// ---- Lab 5: Command Injection ----
var fixedMode = false;

function toggleMode() {
  fixedMode = !fixedMode;
  var badge = document.getElementById("mode-badge");
  var button = document.getElementById("toggle");
  if (fixedMode) {
    badge.textContent = "FIXED MODE";
    badge.className = "mode safe";
    button.textContent = "Switch to vulnerable version";
  } else {
    badge.textContent = "VULNERABLE MODE";
    badge.className = "mode vuln";
    button.textContent = "Switch to fixed version";
  }
  document.getElementById("out").textContent = "";
  document.getElementById("out").className = "output";
}

function runPing() {
  var host = document.getElementById("host").value;
  var out = document.getElementById("out");

  if (fixedMode) {
    // FIXED: only allow letters, numbers, dots and dashes (a valid host).
    // Anything else (like ; or spaces) is rejected, so no extra command can be added.
    document.getElementById("cmd").textContent = "ping -c 4 " + host + "   (input is checked first)";
    var valid = /^[a-zA-Z0-9.-]+$/.test(host);
    if (!valid) {
      out.className = "output bad";
      out.textContent = "Rejected: \"" + host + "\" is not a valid address.";
      return;
    }
    out.className = "output good";
    out.textContent = fakeShell("ping -c 4 " + host);
    return;
  }

  // VULNERABLE: build the command by joining text, then run the whole thing.
  var command = "ping -c 4 " + host;
  document.getElementById("cmd").textContent = command;
  out.className = "output good";
  out.textContent = fakeShell(command);
}

// ---------------------------------------------------------
// A pretend shell. It only knows a few commands and returns
// pretend output. Nothing real runs on your computer.
// ---------------------------------------------------------
function fakeShell(line) {
  var parts = line.split(/;|&&|\|\||\||&/);   // split on ; && || | &
  var output = "";
  for (var i = 0; i < parts.length; i++) {
    output += runOne(parts[i].trim()) + "\n";
  }
  return output.trim();
}
function runOne(cmd) {
  if (cmd.indexOf("ping") === 0) {
    var target = cmd.replace("ping -c 4", "").trim() || "host";
    return "PING " + target + ": 4 packets transmitted, 4 received, 0% packet loss";
  }
  if (cmd.indexOf("cat /etc/passwd") === 0) {
    return "root:x:0:0:root:/root:/bin/bash\n" +
           "www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\n" +
           "(!) A real server would leak its real user list here.";
  }
  if (cmd === "whoami") { return "www-data"; }
  if (cmd === "ls") { return "index.html  app.js  config.php"; }
  if (cmd === "") { return ""; }
  return cmd.split(" ")[0] + ": command not found";
}

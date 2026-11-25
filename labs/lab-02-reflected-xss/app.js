// ---- Lab 2: Reflected XSS ----
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
  document.getElementById("results").textContent = "";
}

function doSearch() {
  var term = document.getElementById("term").value;
  var results = document.getElementById("results");

  if (fixedMode) {
    // FIXED: textContent shows the input as plain text.
    // The browser never treats it as HTML, so nothing runs.
    results.textContent = "You searched for: " + term;
  } else {
    // VULNERABLE: innerHTML puts the input into the page as HTML,
    // so any tags or scripts inside it become real and can run.
    results.innerHTML = "You searched for: " + term;
  }
}

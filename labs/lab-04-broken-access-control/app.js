// ---- Lab 4: Broken Access Control ----
var currentRole = "user";   // you are a normal user, not an admin
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

function setPath(name) {
  document.getElementById("path").value = name;
}

function go() {
  var path = document.getElementById("path").value.trim().toLowerCase();
  var out = document.getElementById("out");

  if (path === "dashboard") {
    out.className = "output good";
    out.textContent = "Dashboard\nWelcome! This page is for every logged-in user.";
    return;
  }

  if (path === "admin") {
    // FIXED: the admin page checks the user's role before showing anything.
    if (fixedMode && currentRole !== "admin") {
      out.className = "output bad";
      out.textContent = "403 Forbidden - admins only.";
      return;
    }
    // VULNERABLE: no role check, so anyone who knows the address gets in.
    out.className = "output good";
    out.textContent =
      "ADMIN PANEL\n" +
      "- Delete any user\n" +
      "- Change site settings\n" +
      "- View all orders\n\n" +
      "(!) You opened this as a normal user.";
    return;
  }

  out.className = "output bad";
  out.textContent = "404 Not Found - no page called \"" + path + "\".";
}

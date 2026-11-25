// =========================================================
// theme.js - switch between dark mode and light mode
// Based on the Media & Interactivity lesson: a button click
// (onclick) that uses classList.toggle to change the page.
// =========================================================

// When the page loads, use the theme saved from the last visit.
// localStorage remembers the choice so every page looks the same.
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// Runs when the button is clicked (onclick="toggleTheme()")
function toggleTheme() {
  // add the "light" class if it is off, remove it if it is on
  document.body.classList.toggle("light");

  // remember the choice for the other pages
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  updateButton();
}

// shows the right label on the button
function updateButton() {
  var button = document.getElementById("theme-btn");
  if (document.body.classList.contains("light")) {
    button.textContent = "dark mode";
  } else {
    button.textContent = "light mode";
  }
}

// set the correct label when the page first loads
updateButton();

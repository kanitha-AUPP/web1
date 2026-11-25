WebPentest101 - Lab 02: Reflected XSS Search
========================================

Difficulty: Easy
Goal: make the page run your own JavaScript.

HOW TO RUN
  1. Unzip this folder anywhere on your computer.
  2. Double-click index.html to open it in your web browser.
  (No installation and no internet connection are needed.)

WHAT IS INSIDE
  index.html  - the lab page
  style.css   - the styling
  app.js      - the lab logic, with the vulnerable and fixed versions
  README.txt  - this file

IMPORTANT
  This lab is a simulation that runs only in your browser. It is made for learning.
  Never use these techniques on a website you do not own or do not have written
  permission to test.

STEPS
  1. Open index.html (VULNERABLE mode).
  2. First search for a normal word to see how results appear.
  3. Now search for:   <img src=x onerror=alert('XSS')>
     A pop-up box appears - your input ran as JavaScript.
  4. Switch to the fixed version and try the same input. It shows as plain text.

THE FIX
  The vulnerable page uses innerHTML, which turns your input into real HTML.
  The fixed page uses textContent, which shows your input as plain words.

Part of the WebPentest101 final project (INFO 250 Web Development I).

WebPentest101 - Lab 04: Broken Access Control
=========================================

Difficulty: Intermediate
Goal: open the admin page as a normal user.

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
  1. Open index.html (VULNERABLE mode). You are a normal user.
  2. Visit "dashboard" - it works, as expected.
  3. Now visit "admin". The admin panel opens, even though you are not an admin.
  4. Switch to the fixed version and visit "admin" again. You get "403 Forbidden".

THE FIX
  Hiding the admin link is not protection. The vulnerable admin page shows to anyone.
  The fixed page checks the user's role on the server before showing anything.

Part of the WebPentest101 final project (INFO 250 Web Development I).

WebPentest101 - Lab 05: Command Injection Ping Tool
===============================================

Difficulty: Intermediate
Goal: run an extra command through the ping tool.

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
  2. Ping 8.8.8.8 normally to see how it works.
  3. Now put this in the address box:   8.8.8.8; cat /etc/passwd
     The ping runs, then a (pretend) system file is printed.
  4. Switch to the fixed version and try the same input. It is rejected.

THE FIX
  The vulnerable tool builds the command by joining text, so a ; adds a new command.
  The fixed tool checks that the address only contains valid characters first,
  so nothing extra can be added.

Part of the WebPentest101 final project (INFO 250 Web Development I).

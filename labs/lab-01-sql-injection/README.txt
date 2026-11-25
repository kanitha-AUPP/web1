WebPentest101 - Lab 01: SQL Injection Login
=======================================

Difficulty: Beginner
Goal: log in as the admin without knowing the password.

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
  1. Open index.html. The form is in VULNERABLE mode.
  2. In the Username box type:   ' OR '1'='1' --
     In the Password box type anything.
  3. Click Log in. You are logged in as the admin.
  4. Click "Switch to fixed version" and try the same input. It no longer works.

THE FIX
  The vulnerable login builds the SQL query by joining text together.
  The fixed login uses a parameterised query, which keeps the input separate
  from the SQL, so your input can never change the query.

Part of the WebPentest101 final project (INFO 250 Web Development I).

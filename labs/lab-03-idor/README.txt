WebPentest101 - Lab 03: IDOR Order Viewer
=====================================

Difficulty: Easy
Goal: read another customer's order by changing the ID.

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
  1. Open index.html (VULNERABLE mode). Order ID is 1 - your own order.
  2. Change the Order ID to 2, then 3, and click View order.
     You can read other customers' orders.
  3. Switch to the fixed version and try ID 2 again. You get "403 Forbidden".

THE FIX
  The vulnerable version returns any order by its ID.
  The fixed version checks that the order belongs to the logged-in user first.

Part of the WebPentest101 final project (INFO 250 Web Development I).

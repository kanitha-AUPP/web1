// ---- Lab 1: SQL Injection ----
// A pretend user table. The first user is the admin.
var users = [
  { username: "admin", password: "S3cr3t-P@ss!" },
  { username: "sophea", password: "hello123" },
  { username: "dara", password: "qwerty" }
];

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

function doLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var out = document.getElementById("out");
  var result;

  if (fixedMode) {
    // FIXED: compare the values directly. No query is built from text,
    // so quotes in the input are just normal characters.
    document.getElementById("query").textContent =
      "Using a parameterised query (input kept separate from the SQL).";
    result = users.filter(function (u) {
      return u.username === username && u.password === password;
    });
  } else {
    // VULNERABLE: build the query by joining strings together.
    var query = "SELECT * FROM users WHERE username='" + username +
                "' AND password='" + password + "'";
    document.getElementById("query").textContent = query;
    result = runQuery(query);
  }

  if (result.length > 0) {
    out.className = "output good";
    out.textContent = "Logged in as: " + result[0].username +
      (result[0].username === "admin" ? "  <-- you got in as the admin!" : "");
  } else {
    out.className = "output bad";
    out.textContent = "Login failed. Wrong username or password.";
  }
}

// ---------------------------------------------------------
// Below this line is a tiny "pretend database engine".
// You do NOT need to understand it to do the lab - it only
// exists so the vulnerable query above can really run.
// ---------------------------------------------------------
function runQuery(query) {
  var where = query.split(/where/i)[1] || "";
  where = where.split("--")[0];          // ignore anything after a comment
  var out = [];
  for (var i = 0; i < users.length; i++) {
    if (evalWhere(where, users[i])) { out.push(users[i]); }
  }
  return out;
}
function evalWhere(expr, row) {
  var ors = expr.split(/\bor\b/i);
  for (var i = 0; i < ors.length; i++) {
    var ands = ors[i].split(/\band\b/i);
    var all = true;
    for (var j = 0; j < ands.length; j++) {
      if (!evalAtom(ands[j], row)) { all = false; break; }
    }
    if (all) { return true; }
  }
  return false;
}
function evalAtom(atom, row) {
  var parts = atom.split("=");
  if (parts.length !== 2) { return false; }
  return resolve(parts[0], row) === resolve(parts[1], row);
}
function resolve(token, row) {
  token = token.trim();
  if (token.charAt(0) === "'") { return token.replace(/^'|'$/g, ""); }
  if (token.toLowerCase() === "username") { return row.username; }
  if (token.toLowerCase() === "password") { return row.password; }
  return token;
}

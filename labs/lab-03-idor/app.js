// ---- Lab 3: IDOR ----
// Pretend orders stored on the "server". Each one has an owner.
var orders = {
  "1": { owner: "you",   item: "USB keyboard",   total: "$18.00" },
  "2": { owner: "alice", item: "Wireless mouse",  total: "$12.50" },
  "3": { owner: "bob",   item: "Laptop stand",    total: "$25.00" }
};

var currentUser = "you";   // who is logged in
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

function viewOrder() {
  var id = document.getElementById("oid").value.trim();
  var out = document.getElementById("out");
  var order = orders[id];

  if (!order) {
    out.className = "output bad";
    out.textContent = "No order with ID " + id + ".";
    return;
  }

  if (fixedMode && order.owner !== currentUser) {
    // FIXED: check that the logged-in user owns this order.
    out.className = "output bad";
    out.textContent = "403 Forbidden - this order does not belong to you.";
    return;
  }

  // VULNERABLE path shows the order no matter who owns it.
  out.className = "output good";
  out.textContent =
    "Order #" + id + "\n" +
    "Owner: " + order.owner + "\n" +
    "Item:  " + order.item + "\n" +
    "Total: " + order.total +
    (order.owner !== currentUser ? "\n\n(!) This is NOT your order." : "");
}

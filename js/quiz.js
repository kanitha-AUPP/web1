const questions = [
  { q: "What must you have before testing a web application?",
    a: ["Written permission from the owner", "A fast internet connection", "A list of default passwords", "A public bug bounty page"],
    c: 0, why: "Testing without authorization is illegal, even with good intentions." },
  { q: "Which stage of a penetration test comes first, after planning?",
    a: ["Reporting", "Exploitation", "Reconnaissance", "Cleanup"],
    c: 2, why: "You gather information about the target before scanning or exploiting." },
  { q: "What is the best defense against SQL injection?",
    a: ["Hiding the login page", "Parameterized queries", "Longer URLs", "Disabling cookies"],
    c: 1, why: "Parameterized queries keep user input separate from the query itself." },
  { q: "An attacker changes /orders/101 to /orders/102 and sees another user's order. What is this?",
    a: ["Broken access control", "Cross-site scripting", "Security misconfiguration", "A denial of service"],
    c: 0, why: "The server did not check that the order belongs to the logged-in user." },
  { q: "Which resource offers free labs focused on web vulnerabilities?",
    a: ["A random forum download", "PortSwigger Web Security Academy", "Any live company website", "A social media group"],
    c: 1, why: "PortSwigger provides free, legal labs built for practice." }
];
const box = document.getElementById("quiz");
questions.forEach((item, i) => {
  const f = document.createElement("fieldset");
  f.className = "q";
  f.innerHTML = `<legend>${i + 1}. ${item.q}</legend>` +
    item.a.map((t, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${t}</label>`).join("") +
    `<p class="why">${item.why}</p>`;
  box.appendChild(f);
});
const result = document.getElementById("result");
document.getElementById("check").addEventListener("click", () => {
  let score = 0, unanswered = 0;
  questions.forEach((item, i) => {
    const f = box.children[i];
    const picked = f.querySelector("input:checked");
    if (!picked) { unanswered++; return; }
    f.classList.add("done");
    f.querySelectorAll("label").forEach((l, j) => {
      l.classList.toggle("right", j === item.c);
      l.classList.toggle("wrong", j === +picked.value && j !== item.c);
    });
    if (+picked.value === item.c) score++;
  });
  result.textContent = unanswered
    ? `Answer all questions first (${unanswered} left).`
    : `You scored ${score} out of ${questions.length}.`;
});
document.getElementById("reset").addEventListener("click", () => {
  box.querySelectorAll("input").forEach(i => i.checked = false);
  box.querySelectorAll(".q").forEach(f => f.classList.remove("done"));
  box.querySelectorAll("label").forEach(l => l.classList.remove("right", "wrong"));
  result.textContent = "";
});

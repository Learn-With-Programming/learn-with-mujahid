function showSection(e) {
  (document.querySelectorAll("section").forEach((e) => {
    e.classList.remove("active");
  }),
    document.getElementById(e).classList.add("active"));
}
(document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let t = document.getElementById("regEmail").value,
      n = document.getElementById("regPassword").value;
    (localStorage.setItem("email", t),
      localStorage.setItem("password", n),
      alert("Registration Successful"),
      showSection("login"));
  }),
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let t = document.getElementById("loginEmail").value,
      n = document.getElementById("loginPassword").value,
      d = localStorage.getItem("email"),
      l = localStorage.getItem("password");
    t === d && n === l
      ? (alert("Login Successful"), showSection("admission"))
      : alert("Invalid Email or Password");
  }),
  document
    .getElementById("admissionForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let t = `\n\n<tr>\n<td>${document.getElementById("studentName").value}</td>\n<td>${document.getElementById("fatherName").value}</td>\n<td>${document.getElementById("motherName").value}</td>\n<td>${document.getElementById("mobile").value}</td>\n<td>${document.getElementById("gender").value}</td>\n<td>${document.getElementById("studentClass").value}</td>\n<td>${document.getElementById("address").value}</td>\n</tr>\n\n`;
      ((document.getElementById("tableBody").innerHTML += t),
        document.getElementById("admissionForm").reset(),
        alert("Admission Submitted"));
    }));

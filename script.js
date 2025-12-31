let data = {};
let holdTimer;

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

setTimeout(() => show("home"), 5000);

function openCategory() {
  show("category");
}

function openForm(type) {
  data.type = type;
  document.getElementById("formTitle").innerText =
    type === "newyear" ? "New Year Wish" : "Birthday Wish";
  show("form");
}

function generateWish() {
  data.to = toName.value;
  data.from = fromName.value;
  data.msg = message.value;
  data.pass = password.value;
  show("passwordScreen");
}

function unlockWish() {
  if (checkPassword.value === data.pass) {
    show("wish");
    startHold();
  } else {
    alert("Wrong password");
  }
}

function startHold() {
  const heart = document.getElementById("holdHeart");
  heart.onmousedown = () => {
    holdTimer = setTimeout(() => {
      openFinal();
    }, 5000);
  };
  heart.onmouseup = () => clearTimeout(holdTimer);
}

function openFinal() {
  document.getElementById("finalTitle").innerText =
    (data.type === "newyear" ? "Happy New Year " : "Happy Birthday ") + data.to;
  document.getElementById("finalFrom").innerText = "By " + data.from;
  document.getElementById("finalMsg").innerText = data.msg;
  show("final");
}

function goHome() {
  show("home");
}

function showSaved() {
  alert("Saved wishes feature can be added next");
}

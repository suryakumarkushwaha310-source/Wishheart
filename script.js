let data = {};
let currentType = "";

setTimeout(() => {
  show("home");
}, 5000);

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openCategory() {
  show("category");
}

function openForm(type) {
  currentType = type;
  document.getElementById("formTitle").innerText =
    type === "newyear" ? "New Year Wish" : "Birthday Wish";
  show("form");
}

function generateWish() {
  data = {
    to: toName.value,
    from: fromName.value,
    msg: message.value,
    pass: password.value,
    type: currentType
  };
  show("passwordScreen");
}

function unlockWish() {
  if (checkPass.value === data.pass) {
    document.getElementById("wishTitle").innerText =
      (data.type === "newyear" ? "Happy New Year " : "Happy Birthday ") + data.to;
    document.getElementById("wishBy").innerText = "By " + data.from;
    document.getElementById("wishMsg").innerText = data.msg;
    show("wish");
  } else {
    alert("Wrong password");
  }
}

function showSaved() {
  alert("Saved links feature can be added next");
}

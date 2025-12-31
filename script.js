let data = {};
let holdTimer;

setTimeout(() => {
  splash.style.display = "none";
  home.classList.remove("hidden");
}, 5000);

function toggleMenu() {
  let m = document.getElementById("menu");
  m.classList.toggle("hidden");
  m.innerHTML = localStorage.getItem("saved") || "No saved links";
}

function openCreator() {
  home.classList.add("hidden");
  creator.classList.remove("hidden");
}

function startForm(type) {
  data.type = type;
  creator.classList.add("hidden");
  form.classList.remove("hidden");
}

function generateWish() {
  data.to = toName.value;
  data.from = fromName.value;
  data.msg = message.value;
  data.pass = password.value;

  let file = photo.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = () => {
      data.photo = reader.result;
      saveAndOpen();
    };
    reader.readAsDataURL(file);
  } else {
    saveAndOpen();
  }
}

function saveAndOpen() {
  localStorage.setItem("wish", JSON.stringify(data));
  form.classList.add("hidden");
  passwordScreen.classList.remove("hidden");
}

function checkPassword() {
  let d = JSON.parse(localStorage.getItem("wish"));
  if (passInput.value === d.pass) {
    passwordScreen.classList.add("hidden");
    holdScreen.classList.remove("hidden");
  } else alert("Wrong password");
}

function holdStart() {
  holdTimer = setTimeout(() => {
    holdScreen.classList.add("hidden");
    showWish();
  }, 5000);
}

function holdEnd() {
  clearTimeout(holdTimer);
}

function showWish() {
  let d = JSON.parse(localStorage.getItem("wish"));
  wishTitle.innerText =
    (d.type === "birthday" ? "Happy Birthday " : "Happy New Year ") + d.to;
  wishMsg.innerText = d.msg;
  if (d.photo) wishPhoto.src = d.photo;
  wish.classList.remove("hidden");
  firework();
}

function showNotebook() {
  wish.classList.add("hidden");
  notebook.classList.remove("hidden");
}

function openNote() {
  notebook.classList.add("hidden");
  noteText.classList.remove("hidden");
  noteMsg.innerText = JSON.parse(localStorage.getItem("wish")).msg;
}

function finalScreen() {
  noteText.classList.add("hidden");
  final.classList.remove("hidden");
}

function saveWish() {
  let old = localStorage.getItem("saved") || "";
  localStorage.setItem("saved", old + "<br>Saved Wish");
  alert("Saved in menu");
}

function firework() {
  let c = fireworks;
  let ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  for (let i = 0; i < 50; i++) {
    ctx.fillStyle = "pink";
    ctx.fillRect(
      Math.random() * c.width,
      Math.random() * c.height,
      4,
      4
    );
  }
}

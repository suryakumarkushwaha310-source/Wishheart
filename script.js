let data = {};
let category = "";

/* SPLASH */
setTimeout(() => {
  splash.classList.add("hidden");
  home.classList.remove("hidden");
  loadSaved();
}, 5000);

/* MENU */
function toggleMenu() {
  menu.classList.toggle("hidden");
}

/* CREATOR */
function openCreator() {
  home.classList.add("hidden");
  creator.classList.remove("hidden");
}

function selectCategory(cat) {
  category = cat;
}

function generateLink() {
  if (!category) return alert("Select category");

  const id = Date.now();
  data = {
    id,
    category,
    to: toName.value,
    from: fromName.value,
    msg: message.value,
    pass: password.value
  };

  const file = photo.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      data.img = reader.result;
      saveData();
    };
    reader.readAsDataURL(file);
  } else {
    saveData();
  }
}

function saveData() {
  localStorage.setItem("wish_" + data.id, JSON.stringify(data));
  const link = location.origin + location.pathname + "?id=" + data.id;
  linkBox.innerText = link;
}

/* LOAD SAVED */
function loadSaved() {
  savedList.innerHTML = "";
  Object.keys(localStorage).forEach(k => {
    if (k.startsWith("wish_")) {
      const id = k.split("_")[1];
      const li = document.createElement("li");
      li.innerText = "Wish " + id;
      li.onclick = () => openWish(id);
      savedList.appendChild(li);
    }
  });
}

/* OPEN WISH */
function openWish(id) {
  data = JSON.parse(localStorage.getItem("wish_" + id));
  home.classList.add("hidden");
  viewer.classList.remove("hidden");
}

/* PASSWORD */
function unlockWish() {
  if (viewPass.value !== data.pass) return alert("Wrong password");

  passwordScreen.classList.add("hidden");
  wishScreen.classList.remove("hidden");

  wishTitle.innerText =
    data.category === "birthday"
      ? "🎂 Happy Birthday " + data.to
      : "🎆 Happy New Year " + data.to;

  wishMsg.innerText = data.msg;
  wishFrom.innerText = "From: " + data.from;

  if (data.img) wishImg.src = data.img;

  startFireworks();
}

/* FIREWORKS */
function startFireworks() {
  const canvas = fireworks;
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,60%)";
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 4, 0, Math.PI*2);
    ctx.fill();
  }, 100);
}

/* AUTO OPEN FROM LINK */
const params = new URLSearchParams(location.search);
if (params.get("id")) {
  openWish(params.get("id"));
}

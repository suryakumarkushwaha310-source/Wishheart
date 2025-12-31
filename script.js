let appData = {};
let holdTimer;

setTimeout(() => {
  splash.style.display = "none";
  home.style.display = "block";
}, 5000);

menuBtn.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

function openCategory() {
  home.style.display = "none";
  category.style.display = "block";
}

function openForm(type) {
  appData.type = type;
  category.style.display = "none";
  form.style.display = "block";
}

function generateWish() {
  appData.to = toName.value;
  appData.from = fromName.value;
  appData.msg = message.value;
  appData.pass = password.value;

  let file = photo.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = () => appData.photo = reader.result;
    reader.readAsDataURL(file);
  }

  localStorage.setItem("wishData", JSON.stringify(appData));
  alert("Link Generated! Share this page.");
  location.reload();
}

let saved = JSON.parse(localStorage.getItem("wishData"));
if (saved) {
  passwordScreen.style.display = "block";
}

function checkPassword() {
  if (passInput.value === saved.pass) {
    passwordScreen.style.display = "none";
    hold.style.display = "block";
    startHold();
  } else alert("Wrong Password");
}

function startHold() {
  holdHeart.onmousedown = () => {
    holdTimer = setTimeout(showWish, 5000);
  };
  holdHeart.onmouseup = () => clearTimeout(holdTimer);
}

function showWish() {
  hold.style.display = "none";
  wish.style.display = "block";

  wishTitle.innerText =
    (saved.type === "birthday" ? "Happy Birthday " : "Happy New Year ") + saved.to;

  if (saved.photo) wishPhoto.src = saved.photo;
  wishFrom.innerText = "By " + saved.from;
}

function openNotebook() {
  wish.style.display = "none";
  notebook.style.display = "block";
}

function openBook() {
  noteText.innerText = saved.msg;
}

function saveWish() {
  alert("Saved in menu!");
  location.reload();
}

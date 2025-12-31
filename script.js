let holdTimer;
let wishData;

setTimeout(() => {
  splash.style.display = "none";
  home.classList.remove("hidden");
}, 5000);

function openForm() {
  home.classList.add("hidden");
  form.classList.remove("hidden");
}

function generateWish() {
  wishData = {
    cat: category.value,
    to: toName.value,
    from: fromName.value,
    msg: message.value,
    pass: password.value,
    photo: ""
  };

  const file = photo.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => wishData.photo = reader.result;
    reader.readAsDataURL(file);
  }

  localStorage.setItem("wish", JSON.stringify(wishData));

  form.classList.add("hidden");
  passwordScreen.classList.remove("hidden");
}

function checkPassword() {
  const data = JSON.parse(localStorage.getItem("wish"));
  if (enterPass.value === data.pass) {
    passwordScreen.classList.add("hidden");
    wish.classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

function startHold() {
  holdTimer = setTimeout(() => {
    wish.classList.add("hidden");
    notebook.classList.remove("hidden");
  }, 5000);
}

function stopHold() {
  clearTimeout(holdTimer);
}

function openBook() {
  const data = JSON.parse(localStorage.getItem("wish"));
  notebook.classList.add("hidden");
  finalMessage.classList.remove("hidden");

  finalTitle.innerText =
    (data.cat === "birthday" ? "Happy Birthday " : "Happy New Year ") + data.to;

  finalText.innerText = data.msg;
  if (data.photo) finalPhoto.src = data.photo;
}

function openSaved() {
  alert("Saved wishes are auto-loaded");
    }

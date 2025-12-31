let data = {};

setTimeout(() => {
  splash.style.display = "none";
  home.classList.remove("hide");
}, 5000);

function openCategory() {
  home.classList.add("hide");
  category.classList.remove("hide");
}

function openForm(type) {
  data.type = type;
  category.classList.add("hide");
  form.classList.remove("hide");
}

function generate() {
  data.to = toName.value;
  data.from = fromName.value;
  data.msg = message.value;
  data.pass = password.value;

  let file = photo.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = () => {
      data.img = reader.result;
      save();
    };
    reader.readAsDataURL(file);
  } else save();
}

function save() {
  localStorage.setItem("wish", JSON.stringify(data));
  alert("Link Generated & Saved");
  showLock();
}

function showLock() {
  form.classList.add("hide");
  lock.classList.remove("hide");
}

function unlock() {
  let saved = JSON.parse(localStorage.getItem("wish"));
  if (unlockPass.value === saved.pass) {
    lock.classList.add("hide");
    showWish(saved);
  } else alert("Wrong Password");
}

function showWish(d) {
  wish.classList.remove("hide");
  wishTitle.innerText =
    d.type === "birthday" ? "Happy Birthday " + d.to : "Happy New Year " + d.to;
  wishMsg.innerText = d.msg + "\n— " + d.from;
  if (d.img) wishImg.src = d.img;
}

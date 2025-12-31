let wishData = {};
let currentCategory = "";

setTimeout(() => {
  splash.style.display = "none";
  home.classList.remove("hidden");
}, 5000);

// MENU
menuBtn.onclick = () => {
  menu.classList.toggle("hidden");
  loadSaved();
};

newProject.onclick = () => {
  home.classList.add("hidden");
  category.classList.remove("hidden");
};

function selectCategory(cat) {
  currentCategory = cat;
  category.classList.add("hidden");
  form.classList.remove("hidden");
}

function generateLink() {
  wishData = {
    to: toName.value,
    from: fromName.value,
    msg: message.value,
    pass: password.value,
    cat: currentCategory,
    photo: ""
  };

  let file = photo.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = () => wishData.photo = reader.result;
    reader.readAsDataURL(file);
  }

  let code = btoa(JSON.stringify(wishData));
  let link = location.href.split("?")[0] + "?wish=" + code;

  navigator.share
    ? navigator.share({ url: link })
    : alert("Copy link:\n" + link);

  alert("Link Generated & Shareable");
}

if (location.search.includes("wish=")) {
  home.classList.add("hidden");
  lock.classList.remove("hidden");

  let data = atob(location.search.split("wish=")[1]);
  wishData = JSON.parse(data);
}

function unlockWish() {
  if (unlockPass.value === wishData.pass) {
    lock.classList.add("hidden");
    showWish();
  } else alert("Wrong password");
}

function showWish() {
  wish.classList.remove("hidden");
  wishTitle.innerText =
    wishData.cat === "birthday"
      ? "Happy Birthday " + wishData.to
      : "Happy New Year " + wishData.to;

  wishFrom.innerText = "By " + wishData.from;
  if (wishData.photo) wishPhoto.src = wishData.photo;
}

function openNotebook() {
  wish.classList.add("hidden");
  notebook.classList.remove("hidden");
}

function openNote() {
  noteText.innerText = wishData.msg;
  noteText.classList.remove("hidden");
}

function finalGift() {
  notebook.classList.add("hidden");
  final.classList.remove("hidden");
}

function saveWish() {
  let arr = JSON.parse(localStorage.getItem("saved") || "[]");
  arr.push(wishData);
  localStorage.setItem("saved", JSON.stringify(arr));
  alert("Saved!");
}

function loadSaved() {
  savedList.innerHTML = "";
  let arr = JSON.parse(localStorage.getItem("saved") || "[]");
  arr.forEach((w, i) => {
    let li = document.createElement("li");
    li.innerText = w.to;
    savedList.appendChild(li);
  });
}

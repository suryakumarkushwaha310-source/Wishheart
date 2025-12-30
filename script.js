let wishData = {};

setTimeout(() => {
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}, 5000);

function openCategory() {
  hideAll();
  category.classList.remove("hidden");
}

function openForm(type) {
  hideAll();
  form.classList.remove("hidden");
  formTitle.innerText =
    type === "newyear" ? "New Year Wish" : "Birthday Wish";
  wishData.type = type;
}

function generateWish() {
  wishData.to = toName.value;
  wishData.from = fromName.value;
  wishData.msg = message.value;

  hideAll();
  wish.classList.remove("hidden");

  wishTitle.innerText =
    (wishData.type === "newyear" ? "Happy New Year " : "Happy Birthday ") +
    wishData.to;

  wishFrom.innerText = "By " + wishData.from;
  wishMsg.innerText = wishData.msg;

  startHearts();
}

function startHearts() {
  const container = document.querySelector(".hearts");
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = wishData.type === "birthday" ? "🎂" : "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

function hideAll() {
  document.querySelectorAll("body > div").forEach(d =>
    d.classList.add("hidden")
  );
    }

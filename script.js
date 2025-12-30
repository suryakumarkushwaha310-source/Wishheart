setTimeout(() => {
  splash.classList.add("hidden");
  home.classList.remove("hidden");
}, 5000);

function openCategory() {
  home.classList.add("hidden");
  category.classList.remove("hidden");
}

function openForm(type) {
  category.classList.add("hidden");
  form.classList.remove("hidden");
  window.wishType = type;
}

function generateWish() {
  form.classList.add("hidden");
  wish.classList.remove("hidden");

  let title =
    wishType === "newyear"
      ? "Happy New Year " + toName.value
      : "Happy Birthday " + toName.value;

  wishTitle.innerText = title;
  wishMsg.innerText = message.value + " - From " + fromName.value;
    }

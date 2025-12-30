let type = "";

setTimeout(() => {
  splash.classList.add("hidden");
  home.classList.remove("hidden");
}, 5000);

function openCategory() {
  hideAll();
  category.classList.remove("hidden");
}

function openForm(t) {
  type = t;
  hideAll();
  form.classList.remove("hidden");
}

function generate() {
  hideAll();
  wish.classList.remove("hidden");

  title.innerText =
    type === "newyear"
      ? "Happy New Year " + toName.value
      : "Happy Birthday " + toName.value;

  by.innerText = "By " + fromName.value;
  text.innerText = msg.value;
}

function hideAll() {
  document.querySelectorAll("body > div")
    .forEach(d => d.classList.add("hidden"));
}

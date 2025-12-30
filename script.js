setTimeout(() => {
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}, 5000);

function hideAll() {
  document.querySelectorAll("body > div").forEach(d => d.classList.add("hidden"));
}

function openCategory() {
  hideAll();
  category.classList.remove("hidden");
}

function openForm(type) {
  hideAll();
  form.classList.remove("hidden");
  formTitle.innerText = type === "newyear" ? "New Year Wish" : "Birthday Wish";
}

function generateWish() {
  hideAll();
  wish.classList.remove("hidden");
}

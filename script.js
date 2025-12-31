let data = {};

setTimeout(() => {
  splash.classList.add("hidden");
  home.classList.remove("hidden");
}, 5000);

function openForm() {
  home.classList.add("hidden");
  form.classList.remove("hidden");
}

function generate() {
  data.to = to.value;
  data.from = from.value;
  data.msg = msg.value;
  data.pass = pass.value;
  form.classList.add("hidden");
  lock.classList.remove("hidden");
}

function unlock() {
  if (check.value === data.pass) {
    lock.classList.add("hidden");
    wish.classList.remove("hidden");
    title.innerText = "Happy New Year " + data.to;
    by.innerText = "By " + data.from;
    text.innerText = data.msg;
  } else {
    alert("Wrong password");
  }
}

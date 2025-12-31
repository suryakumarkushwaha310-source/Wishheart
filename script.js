setTimeout(() => {
  splash.style.display = "none";
  home.classList.remove("hidden");
}, 5000);

function openForm() {
  home.classList.add("hidden");
  form.classList.remove("hidden");
}

function generate() {
  const data = {
    type: type.value,
    to: toName.value,
    from: fromName.value,
    msg: message.value,
    pass: password.value
  };

  localStorage.setItem("wish", JSON.stringify(data));
  form.classList.add("hidden");
  lock.classList.remove("hidden");
}

function unlock() {
  const data = JSON.parse(localStorage.getItem("wish"));
  if (unlockPass.value === data.pass) {
    lock.classList.add("hidden");
    wish.classList.remove("hidden");

    wishTitle.innerText = `Happy ${data.type}, ${data.to}`;
    wishMsg.innerText = `${data.msg}\n— ${data.from}`;
  } else {
    alert("Wrong password");
  }
      }

let savedPassword = "";
let wishData = {};

setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 5000);

// Navigation
function goForm() {
  hideAll();
  document.getElementById("form").classList.remove("hidden");
}

function generateWish() {
  wishData = {
    to: toName.value,
    from: fromName.value,
    msg: message.value
  };
  savedPassword = password.value;

  hideAll();
  document.getElementById("lock").classList.remove("hidden");
}

function unlockWish() {
  if (unlockPass.value === savedPassword) {
    hideAll();
    document.getElementById("wish").classList.remove("hidden");

    wishTitle.innerText = `Dear ${wishData.to} ❤️`;
    wishMsg.innerText = wishData.msg + "\n\nFrom: " + wishData.from;
  } else {
    alert("Wrong Password");
  }
}

function shareWish() {
  navigator.share({
    title: "WishHeart",
    text: "Open my secret wish ❤️",
    url: location.href
  });
}

function hideAll() {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
}

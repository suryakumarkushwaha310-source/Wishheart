let holdTimer;
let holdDone = false;

const heart = document.getElementById("heart");
const passwordBox = document.getElementById("passwordBox");
const firework = document.getElementById("firework");
const photoScreen = document.getElementById("photoScreen");
const noteScreen = document.getElementById("noteScreen");

// HOLD HEART
heart.addEventListener("mousedown", startHold);
heart.addEventListener("touchstart", startHold);

heart.addEventListener("mouseup", cancelHold);
heart.addEventListener("mouseleave", cancelHold);
heart.addEventListener("touchend", cancelHold);

function startHold() {
  holdTimer = setTimeout(() => {
    holdDone = true;
    document.getElementById("holdScreen").style.display = "none";
    passwordBox.style.display = "flex";
  }, 5000);
}

function cancelHold() {
  if (!holdDone) clearTimeout(holdTimer);
}

// PASSWORD CHECK
function unlockWish() {
  const pass = document.getElementById("passwordInput").value;
  if (pass === "1234") {
    passwordBox.style.display = "none";
    firework.style.display = "block";

    setTimeout(() => {
      firework.style.display = "none";
      photoScreen.style.display = "flex";
    }, 3000);
  } else {
    alert("Wrong Password ❌");
  }
}

// NEXT TO NOTE
function nextToNote() {
  photoScreen.style.display = "none";
  noteScreen.style.display = "flex";
}

// SHARE LINK
function shareWish() {
  const link = window.location.href;
  navigator.share({
    title: "WishHeart ❤️",
    text: "Open my special wish 💌",
    url: link
  });
}

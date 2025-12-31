// Splash timer
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("home").classList.remove("hidden");
}, 5000);

// Navigation
function openForm() {
  hideAll();
  document.getElementById("form").classList.remove("hidden");
}

function generateWish() {
  let to = document.getElementById("toName").value;
  let from = document.getElementById("fromName").value;
  let msg = document.getElementById("message").value;

  document.getElementById("finalText").innerText =
    "Dear " + to + " ❤️\n" + msg + "\n\nFrom: " + from;

  hideAll();
  document.getElementById("wish").classList.remove("hidden");
}

function restart() {
  hideAll();
  document.getElementById("home").classList.remove("hidden");
}

function hideAll() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("form").classList.add("hidden");
  document.getElementById("wish").classList.add("hidden");
}

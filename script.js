// Splash → Home after 5 sec
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("home").classList.remove("hidden");
}, 5000);

function showForm() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
}

function generateWish() {
  const to = document.getElementById("to").value;
  const from = document.getElementById("from").value;
  const msg = document.getElementById("msg").value;

  document.getElementById("form").classList.add("hidden");
  document.getElementById("wish").classList.remove("hidden");

  document.getElementById("wishText").innerHTML =
    `💌 Dear ${to}<br><br>${msg}<br><br>— ${from}`;
}

function restart() {
  location.reload();
}

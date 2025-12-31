// Splash screen timing
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("home").classList.remove("hidden");
}, 5000);

// Button action
function goCreate() {
  alert("Next screen coming soon 🚀");
}

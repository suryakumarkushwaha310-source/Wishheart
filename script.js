setTimeout(()=>{
  splash.style.display="none";
  home.classList.remove("hidden");
},5000);

function openCategory(){
  home.classList.add("hidden");
  category.classList.remove("hidden");
}

function openForm(type){
  category.classList.add("hidden");
  form.classList.remove("hidden");
  window.type = type;
}

function generate(){
  title.innerText = type==="newyear"
    ? "Happy New Year " + to.value
    : "Happy Birthday " + to.value;

  by.innerText = "By " + from.value;
  text.innerText = msg.value;

  form.classList.add("hidden");
  wish.classList.remove("hidden");
}

function openSaved(){
  alert("Saved wishes coming soon");
}

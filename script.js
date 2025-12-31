let current = "splash";
const screens = ["splash","hold","password","form","wish"];

function show(id){
  screens.forEach(s=>document.getElementById(s).classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// SPLASH → HOLD
setTimeout(()=>show("hold"),5000);

// HOLD LOGIC
let holdTimer;
document.getElementById("heart").addEventListener("touchstart",()=>{
  holdTimer = setTimeout(()=>show("password"),5000);
});
document.getElementById("heart").addEventListener("touchend",()=>{
  clearTimeout(holdTimer);
});

// PASSWORD
function checkPassword(){
  if(document.getElementById("passInput").value==="1234"){
    show("form");
  } else alert("Wrong Password");
}

// GENERATE
function generateWish(){
  document.getElementById("toShow").innerText =
    "Dear " + toName.value;
  document.getElementById("msgShow").innerText =
    message.value;
  document.getElementById("fromShow").innerText =
    "- " + fromName.value;

  const file = photo.files[0];
  if(file){
    document.getElementById("imgShow").src = URL.createObjectURL(file);
  }
  show("wish");
  fireworks();
}

// SHARE
function share(){
  if(navigator.share){
    navigator.share({
      title:"WishHeart",
      text:"Special wish for you ❤️",
      url:location.href
    });
  } else {
    alert("Copy link & share");
  }
}

// FIREWORKS
function fireworks(){
  const c = document.getElementById("fireworks");
  const ctx = c.getContext("2d");
  c.width=innerWidth; c.height=innerHeight;
  for(let i=0;i<100;i++){
    ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
    ctx.beginPath();
    ctx.arc(Math.random()*c.width,Math.random()*c.height,3,0,7);
    ctx.fill();
  }
}

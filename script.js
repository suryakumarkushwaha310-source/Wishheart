function goCategory(){
  location.href="category.html";
}

function selectType(type){
  localStorage.setItem("type",type);
  location.href="form.html";
}

function saveWish(){
  localStorage.setItem("to",to.value);
  localStorage.setItem("from",from.value);
  localStorage.setItem("msg",msg.value);
  localStorage.setItem("pass",pass.value);
  location.href="wish.html";
}

let hold;
const heart=document.getElementById("bigHeart");

if(heart){
heart.onmousedown=()=>{
  hold=setTimeout(()=>{
    alert("Wish Revealed 🎉");
  },5000);
}
heart.onmouseup=()=>clearTimeout(hold);
}

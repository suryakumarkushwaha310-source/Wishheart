// Splash auto move
setTimeout(()=>{
  document.getElementById("splash").classList.add("hide");
  document.getElementById("home").classList.remove("hide");
},5000);

function openForm(){
  document.getElementById("home").classList.add("hide");
  document.getElementById("form").classList.remove("hide");
}

function generateWish(){
  let to = document.getElementById("to").value;
  let from = document.getElementById("from").value;
  let msg = document.getElementById("msg").value;

  document.getElementById("wishTo").innerText = "Dear " + to;
  document.getElementById("wishMsg").innerText = msg;
  document.getElementById("wishFrom").innerText = "From " + from;

  document.getElementById("form").classList.add("hide");
  document.getElementById("wish").classList.remove("hide");
}

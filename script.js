function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Splash → Form
setTimeout(()=>show("form"),5000);

let savedData={};

function startWish(){
  savedData.to = toName.value;
  savedData.from = fromName.value;
  savedData.msg = message.value;
  savedData.pass = password.value;

  let file = photo.files[0];
  if(file){
    let r = new FileReader();
    r.onload = ()=> savedData.img = r.result;
    r.readAsDataURL(file);
  }

  show("hold");

  setTimeout(revealWish,5000);
}

function revealWish(){
  let p = prompt("Enter Password");
  if(p !== savedData.pass){
    alert("Wrong password");
    return;
  }

  wishTitle.innerText = `💖 ${savedData.to} 💖`;
  wishMsg.innerText = savedData.msg;
  if(savedData.img) wishPhoto.src = savedData.img;

  show("wish");
}

function shareWish(){
  navigator.share({
    title:"WishHeart",
    text:"Open my wish ❤️",
    url:location.href
  });
}

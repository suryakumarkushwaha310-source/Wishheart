let currentType = "";
let savedData = null;

setTimeout(()=>{
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
},5000);

function toggleMenu(){
  let m = document.getElementById("menuPanel");
  m.classList.toggle("hidden");
  m.innerHTML = "";
  let links = JSON.parse(localStorage.getItem("links")||"[]");
  links.forEach(l=>{
    let d = document.createElement("div");
    d.innerText = l.title;
    d.onclick=()=>openLink(l);
    m.appendChild(d);
  });
}

function openCategory(){
  home.hidden=true;
  category.hidden=false;
}

function openForm(type){
  currentType = type;
  category.hidden=true;
  form.hidden=false;
  formTitle.innerText = type==="newyear"?"New Year Wish":"Birthday Wish";
}

function generateLink(){
  let data={
    type:currentType,
    to:toName.value,
    from:fromName.value,
    msg:message.value,
    pass:password.value
  };
  let links = JSON.parse(localStorage.getItem("links")||"[]");
  links.push({title:data.to,data});
  localStorage.setItem("links",JSON.stringify(links));
  savedData=data;
  alert("Link Generated & Saved");
  form.hidden=true;
  home.hidden=false;
}

function openLink(l){
  savedData=l.data;
  home.hidden=true;
  lock.hidden=false;
}

function unlock(){
  if(unlockPass.value===savedData.pass){
    lock.hidden=true;
    showWish();
  }else{
    alert("Wrong Password");
  }
}

function showWish(){
  wish.hidden=false;
  wishTitle.innerText =
    savedData.type==="newyear"?"Happy New Year":"Happy Birthday";
  wishTo.innerText = savedData.to;
}

function nextStep(){
  alert("Notebook, photo & final gift screens can be layered next (PWA build)");
              }

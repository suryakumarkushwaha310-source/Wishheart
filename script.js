let data={}, category="";

setTimeout(()=>{
  splash.classList.add("hidden");
  home.classList.remove("hidden");
  loadMenu();
},3000);

newProject.onclick=()=>{
  home.classList.add("hidden");
  create.classList.remove("hidden");
};

menuBtn.onclick=()=>{
  menu.classList.toggle("hidden");
};

function loadMenu(){
  let list=JSON.parse(localStorage.getItem("links")||"[]");
  menu.innerHTML="";
  list.forEach(l=>{
    let a=document.createElement("div");
    a.textContent=l.title;
    a.onclick=()=>location.href=l.url;
    menu.appendChild(a);
  });
}

function selectCategory(c){
  category=c;
  form.classList.remove("hidden");
}

function generateLink(){
  data={
    category,
    to:toName.value,
    from:fromName.value,
    msg:message.value,
    pass:password.value
  };
  let id=btoa(JSON.stringify(data));
  let url=location.origin+location.pathname+"#"+id;
  linkBox.innerText=url;

  let saved=JSON.parse(localStorage.getItem("links")||"[]");
  saved.push({title:data.to,url});
  localStorage.setItem("links",JSON.stringify(saved));
}

if(location.hash){
  home.classList.add("hidden");
  unlock.classList.remove("hidden");
  data=JSON.parse(atob(location.hash.slice(1)));
}

function unlock(){
  if(unlockPass.value===data.pass){
    unlock.classList.add("hidden");
    wish.classList.remove("hidden");

    wishTitle.innerText=
      (data.category==="birthday"?"Happy Birthday ":"Happy New Year ")
      +data.to;

    wishMsg.innerText=data.msg;
    document.querySelector(".by").innerText="By "+data.from;
  }else alert("Wrong password");
}

function showNotebook(){
  wish.classList.add("hidden");
  note.classList.remove("hidden");
  noteText.innerText=data.msg;
}

function showGift(){
  note.classList.add("hidden");
  gift.classList.remove("hidden");
    }

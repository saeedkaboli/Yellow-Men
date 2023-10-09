// import Poiner from "./Pointer.js";
import preLoader from './Preloader.js';
const Menu = {
  Home: document.getElementById("NavBar"),
};
const Body = document.body;

Body.onload = () => {
  preLoader();
  getWidthDisplay();
};

Menu.Home.addEventListener("click", (e) => {
  e.preventDefault();
  let Modal = document.createElement("div");
  Modal.className = "Modal";
});

// The Respansive
function getWidthDisplay(){
  const WidthDisplay=window.innerWidth;
  let ElementContainer=document.querySelectorAll("#container");
  if(WidthDisplay<=1000){
      ElementContainer.forEach((items)=>{
        items.classList="container mx-auto";
      })
  }else{
    ElementContainer.forEach((items)=>{
      items.removeAttribute("class");
    })
  }
}

//---------------------------------------- The NavLink

const linkMenu=document.querySelectorAll("#NavBar-Link");
const banner=document.getElementById("Banner");

linkMenu.forEach((items)=>{
  items.addEventListener("click",(e)=>{
    if(e.target.innerHTML==="خانه"){
     banner.style.top="100%";
    }else if(e.target.innerHTML==="خدمات"){
      banner.style.top="100%";
    }else if(e.target.innerHTML==="درباره من"){
      banner.style.top="100%";
    }

 
  })

})

banner.addEventListener("click",()=>{
  banner.style.top="-2000%"
})


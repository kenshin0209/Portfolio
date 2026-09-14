const header=document.querySelector(".header"),menu=document.querySelector(".menu"),nav=document.querySelector("nav");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>20));
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

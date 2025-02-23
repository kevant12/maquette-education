let menu = document.querySelector("button:first-of-type");
let nav = document.querySelector("nav");
menu.addEventListener("click", function(){
    
    nav.classList.add("show");
    
});

let x = document.querySelector("nav button"); // pourquoi button last-of-type marche pas?
x.addEventListener("click",function(){
nav.classList.remove("show");
});

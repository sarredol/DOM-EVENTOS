let boton = document.querySelector(".openbtn");
let sidebar = document.querySelector(".sidebar")
let close = document.querySelector(".closebtn")
console.log(boton);

boton.addEventListener("click", ()=> {
    
    sidebar.style.left="0";
    boton.classList.toggle("responsive");
    
});
    
close.addEventListener("click", ()=> {
    
    sidebar.style.left="-200px";
    
});
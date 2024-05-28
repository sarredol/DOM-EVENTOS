//Seleccionar el boton del menu
let boton = document.querySelector(".icon");
console.log(boton);
boton.addEventListener("click", ()=> {
    //alert("diste click al boton")
    let menu = document.querySelector("#myNavbar");

    menu.classList.toggle("responsive");


});
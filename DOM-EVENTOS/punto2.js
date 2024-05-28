let boton = document.querySelector(".dropbtn");
console.log(boton);
boton.addEventListener("click", ()=> {
    //alert("diste click al boton")
    let submenu = document.querySelector("#myDropdown");

    submenu.classList.toggle("show");

});
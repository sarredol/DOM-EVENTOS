// Seleccionar campo de contraseña
let contraInput = document.querySelector("#psw");
let mensajes = document.querySelector("#message");
let minusculas = document.querySelector("#letter")
let mayusculas = document.querySelector("#capital")
let numeros = document.querySelector("#number")
let minimo = document.querySelector("#lengh")
//console.log(contraInput)
//Agregar evento focus
contraInput.addEventListener("focus", ()=>{
    console.log("estoy escribiendo...");
    mensajes.style.display = "block";
});

//Agregar evento blur
contraInput.addEventListener("blur", ()=>{
    console.log("Perdi el foco");
    mensajes.style.display = "none"
})

//Agregar evento del teclado
let minus = /[a-z]/;
contraInput.addEventListener("keyup", (e)=>{
    console.log(contraInput.value);
    
    if(contraInput.value.match(minus)){
        minusculas.classList.add("valid");
        minusculas.classList.remove("invalid")
    }else{
        minusculas.classList.add("invalid");
        minusculas.classList.remove("valid")
    }
})
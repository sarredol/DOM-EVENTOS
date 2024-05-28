// Seleccionar la  etiqueta
let h2 = document.querySelector("h2");
let cambiarTexto = ()=>{
    h2.textContent = "Ok 👍"
    h2.style.color = "blue";
}
let volverTexto = ()=>{
    h2.textContent = "pasa el raton";
    h2.style.color = "green";
}

//manejador de eventos
h2.addEventListener("mouseover",cambiarTexto);
h2.addEventListener("mouseout",volverTexto)
h2.addEventListener("dblclick", ()=>{
    alert("diste doble click")
});
//quitar eventos
h2.removeEventListener("mouseover",cambiarTexto);
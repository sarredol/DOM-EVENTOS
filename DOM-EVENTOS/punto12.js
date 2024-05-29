//Variable globales
let campoTexto = document.querySelector("#campo-texto");
let btnCrear = document.querySelector("#btn-crear");
let table = document.querySelector("#tabla-tarea");

// console.log(campoTexto)
// console.log(btnCrear)
// console.log(table)

//Agregar evento al boton
btnCrear.addEventListener("click", ()=>{
    alert("Escribiste: " + campoTexto.value);
    crearTarea();
});
//agregar evento al campo de texto
campoTexto.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        crearTarea()
    }
});

let  con =1;
//funcion para crear una tarea
function crearTarea(){
    //verificar si se escribio en el campo de texto
    if(campoTexto.value == ""){
        alert("Debes escribir una tarea")
    }else{
       //alert("Todo melo")
       let textoTarea = campoTexto.value;
       let fila = document.createElement("tr");
       fila.innerHTML = `
        <td>${con++} </td>
        <td>${textoTarea} </td>
        <td>
            <button class= "btn btn-warning" type= "button">✍🏽</button>
            <button onclick= "eliminarTarea()" class="btn btn-danger" type ="button">🗑️</button>
        </td>
       `;
       table.appendChild(fila);
       campoTexto.value= "";
    }
}

//funcion para eliminar una tarea
function eliminarTarea(){
    let confirmar = confirm("¿Deseas elimianr esta tarea?")
    console.log(event.target);
    if(confirmar){
        let btn = event.target; //Devuelve la etiqueta que devuelve el evento
        btn.parentElement.parentElement.remove();//Selecciona la etiqueta padre y la elimina
    }
}
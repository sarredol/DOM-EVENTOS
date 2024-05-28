let sabor = document.querySelector(".nieve");
let resultado = document.querySelector(".resultado")

sabor.addEventListener("change", function (){

    let selectHelado = sabor.value;

    if(selectHelado){
        resultado.textContent ="Te gusta el sabor "+ selectHelado;
    }else{

        resultado.textContent = " ";
    }

});
function myFunction(){
    let Checkbox = document.querySelector("#myCheck")
    let texto = document.querySelector("#text")
    
       
        if (Checkbox.checked == true){
            texto.style.display = "block";
            document.write(p)       
        }else {
            texto.style.display = "none";        
        }
}
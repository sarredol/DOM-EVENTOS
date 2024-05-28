let botones = document.querySelectorAll(".accordion");
//console.log(botones)
// botones.forEach((btn, i)=>{
//     btn.addEventListener("click", ()=>{
//         //alert("di click")

//         let panel = document.querySelectorAll(".panel");
//         if(panel[i].style.display == "block"){
//             panel[i].style.display = "none";
//         }else{
//             panel[i].style.display = "block";
//         }
        
//     });
// });


for(let x = 0; x < botones.length; x++){
    botones[x].addEventListener("click", ()=>{

        let panel = document.querySelectorAll(".panel");
        if(panel[x].style.display == "block"){
            panel[x].style.display = "none";
        }else{
            panel[x].style.display = "block";
        }
    })
}
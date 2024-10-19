import methods from "./methods.js";

document.getElementById("password").addEventListener("input", function() {
    let inputPsw = this.value;
    let ninechar=document.getElementById("ninechar");
    let uppercase=document.getElementById("uppercase");
    let number=document.getElementById("number");
    let special=document.getElementById("special");
    console.log(inputPsw);
    if(methods.controlloLunghezza(inputPsw)=== true ){
        if(!ninechar.classList.contains("green")){
            document.getElementById("ninechar").classList.add("green");
            document.getElementById("progress-bar").value+=25;
            
        } 
    }
    //finire di scrivere le altre condizioni su modello di qui sopra 
  
    
});

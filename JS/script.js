import methods from "./methods.js";

document.getElementById("password").addEventListener("input", function () {
    let inputPsw = this.value;
    let ninechar = document.getElementById("ninechar");
    let uppercase = document.getElementById("uppercase");
    let number = document.getElementById("number");
    let special = document.getElementById("special");
    console.log(inputPsw);
    if (methods.controlloLunghezza(inputPsw) === true && !ninechar.classList.contains("green")) {
        ninechar.classList.add("green");
        document.getElementById("progress-bar").value += 25;
    }
    else if (methods.controlloLunghezza(inputPsw) === false && ninechar.classList.contains("green")) {
        ninechar.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;
    }

    if (methods.controlloMaiuscola(inputPsw) === true && !uppercase.classList.contains("green")) {
        uppercase.classList.add("green");
        document.getElementById("progress-bar").value += 25;

    }
    else if (methods.controlloMaiuscola(inputPsw) === false && uppercase.classList.contains("green")) {
        uppercase.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;

    }

    if (methods.controlloNumero(inputPsw) === true && !number.classList.contains("green")) {
        number.classList.add("green");
        document.getElementById("progress-bar").value += 25;
    }
    else if (methods.controlloNumero(inputPsw) === false && number.classList.contains("green")) {
        number.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;
    }


    if (methods.controlloSpeciale(inputPsw) === true && !special.classList.contains("green")) {

        special.classList.add("green");
        document.getElementById("progress-bar").value += 25;
    }
    else if (methods.controlloSpeciale(inputPsw) === false && special.classList.contains("green")) {

        special.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;
    }
    //finire di scrivere le altre condizioni su modello di qui sopra 
    // vedere se prendere per classe o per id le icone per cambiare di classe 
    // mettere il nome delle funzioni in methods nella key e lasciare le function anonime 


});

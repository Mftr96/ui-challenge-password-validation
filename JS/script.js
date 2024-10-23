import methods from "./methods.js";

document.getElementById("password").addEventListener("input",() => {
    let inputPsw = this.value;
    let ninechar = document.getElementById("ninechar");
    let uppercase = document.getElementById("uppercase");
    let number = document.getElementById("number");
    let special = document.getElementById("special");
    console.log(inputPsw);
    if (methods.isPsw9Char(inputPsw) === true && !ninechar.classList.contains("green")) {
        ninechar.classList.add("green");
        document.getElementById("progress-bar").value += 25;
    }
    else if (methods.isPsw9Char(inputPsw) === false && ninechar.classList.contains("green")) {
        ninechar.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;
    }

    if (methods.isPswUpperCase(inputPsw) === true && !uppercase.classList.contains("green")) {
        uppercase.classList.add("green");
        document.getElementById("progress-bar").value += 25;

    }
    else if (methods.isPswUpperCase(inputPsw) === false && uppercase.classList.contains("green")) {
        uppercase.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;

    }

    if (methods.isPswNumber(inputPsw) === true && !number.classList.contains("green")) {
        number.classList.add("green");
        document.getElementById("progress-bar").value += 25;
    }
    else if (methods.isPswNumber(inputPsw) === false && number.classList.contains("green")) {
        number.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;
    }


    if (methods.isPswSpecial(inputPsw) === true && !special.classList.contains("green")) {

        special.classList.add("green");
        document.getElementById("progress-bar").value += 25;
    }
    else if (methods.isPswSpecial(inputPsw) === false && special.classList.contains("green")) {

        special.classList.remove("green");
        document.getElementById("progress-bar").value -= 25;
    }
    //finire di scrivere le altre condizioni su modello di qui sopra 
    // vedere se prendere per classe o per id le icone per cambiare di classe 
    // mettere il nome delle funzioni in methods nella key e lasciare le function anonime 


});

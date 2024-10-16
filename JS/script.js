import methods from "./methods.js";
//saving psw input in variable
let inputPsw = document.getElementById("password").value;
//console.log(inputPsw)


let pswControllata = methods.controlloSpeciale(inputPsw);
console.log(pswControllata);



document.getElementById("password").addEventListener("input", function() {
    let inputPsw = this.value;
    console.log("Is password at least 9 characters?", methods.controlloNumeri(inputPsw));
    console.log("Does password contain an uppercase letter?", methods.controlloMaiuscola(inputPsw));
    console.log("Does password contain a number?", methods.controlloNumero(inputPsw));
    console.log("Does password contain a special character?", methods.controlloSpeciale(inputPsw));
});

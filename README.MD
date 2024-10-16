<aside>
📚 **UI Challenge: strong password validator**
nome repo: *****kata-strong-password-validator*
****

Il designer del sito a cui stai lavorando ci chiede di creare un’interfaccia avanzata per la validazione della password che rispetti i seguenti requisiti:

- almeno 9 caratteri
- almeno una maiuscola
- almeno un numero
- almeno un carattere speciale

La UX/UI è caratterizzata da una barra che rappresenta un indicatore della robustezza della password che si aggiorna istantaneamente in base a quanti requisiti vengono soddisfatti in fase di inserimento.

I requisiti della password sono elencati sotto al campo di input.

✨ **Bonus:** i requisiti si colorano di verde e visualizzano un check ✔️ man mano che vengono soddisfatti.

Questa soluzione fornisce immediatamente un feedback visivo all’utente durante la digitazione dei caratteri.

Buona challenge! 🔐

</aside>

## Suggerimenti

- Implementa una funzione separata per ciascun requisito di validazione rende il codice più modulare e facile da mantenere.
- E’ una best practice tenere separata la parte di logica dalla parte di manipolazione del DOM.
- Approfondisci gli eventi JavaScript per rilevare istantaneamente i cambiamenti nel campo di input.
- Extra: conosci le espressioni regolari (regex)? Potrebbero essere molto utili per verificare i requisiti della password come la presenza di maiuscole, numeri e caratteri speciali!

## esecuzione esercizio

- milestone 1: fare il mockup statico del progetto ragionando su come posizionare gli elementi su foglio di carta

- milestone 2: ragionare sull'esecuzione della parte interattiva, ovvero la validazione:

quello che dobbiamo fare è tenere sotto controllo il value dell'input per sottoporlo a delle condizioni.
quindi salveremo il value in una variabile :

```js
let inputPsw = document.getElementById("password").value;
```

successivamente aandiamo a scrivere le funzioni che determino le condizioni che abbiamo scritto in pagina

per le regex https://www.regextutorial.org/regex-for-numbers-and-ranges.php

avremo quindi 4 funzioni che rispettivamente controllano la lunghezza dei caratteri(almeno 9), che ci sia una maiuscola, un numero ed un carattere speciale.

le funzioni in questione sono le seguenti:

```js
function isPsw9Char(inputPsw) {
  if (typeof inputPsw.length === "string") {
    return "questo valore non è un numero, riprova con un numero";
  }
  if (inputPsw === "") {
    return "valore vuoto, inserire un numero valido.";
  }
  if (inputPsw.length >= 9) {
    return true;
  }

  return false;
}

function isPswUpperCase(inputPsw) {
   
    const pswUpper = inputPsw => /\p{Lu}/u.test(inputPsw);
    console.log(pswUpper);
    return pswUpper(inputPsw) === true ? true : false;
}

function isPswNumber(inputPsw) {
    const pswNumber = inputPsw => /[0-9]/u.test(inputPsw);
    return pswNumber(inputPsw) === true ? true : false;

}

function isPswSpecial(inputPsw) {
    /**
     * 
     *\W is used to control if there's a non-word character
     *(underscore _ excluded)
     */
    const pswSpecial = inputPsw => /\W/u.test(inputPsw);
    return pswSpecial(inputPsw) === true ? true : false;

}
```

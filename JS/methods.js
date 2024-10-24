const methods = {
    isPsw9Char: inputPsw => {
        //controlling if argument is string and not a number
        if (typeof inputPsw.length === "string") {
            return "questo valore non è un numero, riprova con un numero"
        }
        //controlling if argument is empty string 
        if (inputPsw === '') {
            return "valore vuoto, inserire un numero valido."
        }
        //returning true if psw is greater or equal 9
        if (inputPsw.length >= 9) {
            return true;
        }

        return false;
    },
    isPswUpperCase: inputPsw => {
        /*about regular expression:
        * \p{lu}=Unicode property that is equal to every uppercase letters
        * /u =unicode flag, permetting to regex to handel all unicode characters.
        * about .test :
        * test is a method  that find corrispondence between argument and regex
        * return boolean
        */
        const pswUpper = inputPsw => /\p{Lu}/u.test(inputPsw);
        return pswUpper(inputPsw);
    },

    isPswNumber: inputPsw => {
        const pswNumber = inputPsw => /[0-9]/u.test(inputPsw);
        return pswNumber(inputPsw);

    },

    isPswSpecial: inputPsw => {
        /**
         * 
         *\W is used to control if there's a non-word character
         *(underscore _ excluded)
         */
        const pswSpecial = inputPsw => /\W/u.test(inputPsw);
        return pswSpecial(inputPsw);

    },
};
//scrivere con arrow 

export default methods;
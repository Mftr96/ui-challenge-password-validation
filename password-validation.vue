<script>
let controlloPsw= () => {
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
};
</script>



<template>
    <div class="input-container">
        <h2 class="text-center">Verifica della password</h2>
        <!-- INPUT PSW -->
        <div class="d-flex justify-content-center">
            <input @input="controlloPsw" class="w-75 m-1" value="" type="password" name="" id="password">
        </div>
        <!-- CHECKLIST PSW -->
        <div class="m-4">
            <div id="ninechar" class="d-flex align-items-center  ">
                <i class="fa-solid fa-x  me-1"></i>
                <p class="m-0">almeno 9 caratteri</p>
            </div>
            <div id="uppercase" class="d-flex align-items-center  ">
                <i class="fa-solid fa-x me-1"></i>
                <p class="m-0">almeno una maiuscola</p>
            </div>
            <div id="number" class="d-flex align-items-center  ">
                <i class="fa-solid fa-x me-1"></i>
                <p class="m-0">almeno un numero </p>
            </div>
            <div id="special" class="d-flex align-items-center  ">
                <i class="fa-solid fa-x me-1"></i>
                <p class="m-0">almeno un carattere speciale </p>
            </div>
        </div>
        <!-- PROGRESS BAR PSW -->
        <div class="d-flex justify-content-center">
            <progress class="w-75" id="progress-bar" value="" max="100"></progress>
        </div>

    </div>
</template>


<style scoped></style>
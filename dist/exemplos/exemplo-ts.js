"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somarValoress(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase, resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase = "O valor é:";
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    somarValoress(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value), devePrintar, frase);
});

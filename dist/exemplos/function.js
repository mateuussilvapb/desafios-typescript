"use strict";
// ====================================================================== //
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
// ====================================================================== //
function printSomaValores(numero1, numero2) {
    console.log(numero1 + numero2);
}
// ====================================================================== //
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
// ====================================================================== //
function aoQuadrado(numero) {
    return numero * numero;
}
// ====================================================================== //
function aoCubo(numero) {
    return numero ** 3;
}
// ====================================================================== //
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, aoCubo));

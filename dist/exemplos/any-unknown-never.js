"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 1;
anyEstaDeVolta = "teste";
anyEstaDeVolta = true;
anyEstaDeVolta = 5;
let stringTeste = "teste";
stringTeste = anyEstaDeVolta;
let unknownValue;
unknownValue = 3;
unknownValue = "teste";
unknownValue = true;
let stringTeste2 = "teste2";
// stringTeste2 = unknownValue;
if (typeof unknownValue === "string") {
    stringTeste2 = unknownValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("deu erro", 500);

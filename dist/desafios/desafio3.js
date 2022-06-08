"use strict";
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
if (campoSaldo)
    campoSaldo.innerHTML = String(0);
function somarAoSaldo(soma) {
    let campo = Number(campoSaldo === null || campoSaldo === void 0 ? void 0 : campoSaldo.innerHTML);
    campo += soma;
    if (campoSaldo)
        campoSaldo.innerHTML = String(campo);
}
function limparSaldo() {
    if (campoSaldo)
        campoSaldo.innerHTML = "";
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", function () {
    if (soma)
        somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});

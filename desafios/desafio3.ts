let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

if (campoSaldo) campoSaldo.innerHTML = String(0);

function somarAoSaldo(soma: number) {
  let campo: number = Number(campoSaldo?.innerHTML);
  campo += soma;
  if (campoSaldo) campoSaldo.innerHTML = String(campo);
}

function limparSaldo() {
  if (campoSaldo) campoSaldo.innerHTML = "";
}

botaoAtualizar?.addEventListener("click", function () {
  if (soma) somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener("click", function () {
  limparSaldo();
});

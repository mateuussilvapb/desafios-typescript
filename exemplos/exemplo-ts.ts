let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function somarValoress(
  numero1: number,
  numero2: number,
  devePrintar: boolean,
  frase: string
): number {
  let resultado = numero1 + numero2;
  if (devePrintar) {
    console.log(frase, resultado);
  }
  return numero1 + numero2;
}

let devePrintar = true;
let frase = "O valor é:";

button?.addEventListener("click", () => {
  somarValoress(
    Number(input1?.value),
    Number(input2?.value),
    devePrintar,
    frase
  );
});

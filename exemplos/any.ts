let valorAny: any;
valorAny = 3;
valorAny = "Olá!";
valorAny = true;

let valorString: string = "teste";
valorString = valorAny;
let valorString2: string = "teste";
valorString2 = valorAny;

function somarStrings(string1: string, string2: string) {
  console.log(string1 + string2);
}

somarStrings(valorString, valorString2);
somarStrings("Ola!", " Tudo bem?");
console.log(valorString, valorString2, valorAny);

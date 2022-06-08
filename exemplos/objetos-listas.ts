// ====================================================================== //
const paula: { nome: string; idade: number; profissao: string } = {
  nome: "Andre",
  idade: 25,
  profissao: "desenvolvedora",
};
// ====================================================================== //
enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}
// ====================================================================== //
interface Estudante extends Pessoa {
  materias: string[];
}
// ====================================================================== //
interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}
// ====================================================================== //
const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Professora,
};
// ====================================================================== //
const maria: Estudante = {
  nome: "Maria",
  idade: 26,
  profissao: Profissao.JogadoraDeFutebol,
  materias: ["Matemática Discreta", "P1"],
};
// ====================================================================== //
const monica: Estudante = {
  nome: "Maria",
  idade: 26,
  materias: ["Matemática Discreta", "P1"],
};
// ====================================================================== //
function listar(lista: string[]) {
  for (const item of lista) {
    console.log("-", item);
  }
}
// ====================================================================== //
listar(monica.materias);

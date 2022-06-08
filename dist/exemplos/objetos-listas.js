"use strict";
// ====================================================================== //
const paula = {
    nome: "Andre",
    idade: 25,
    profissao: "desenvolvedora",
};
// ====================================================================== //
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
// ====================================================================== //
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Professora,
};
// ====================================================================== //
const maria = {
    nome: "Maria",
    idade: 26,
    profissao: Profissao.JogadoraDeFutebol,
    materias: ["Matemática Discreta", "P1"],
};
// ====================================================================== //
const monica = {
    nome: "Maria",
    idade: 26,
    materias: ["Matemática Discreta", "P1"],
};
// ====================================================================== //
function listar(lista) {
    for (const item of lista) {
        console.log("-", item);
    }
}
// ====================================================================== //
listar(monica.materias);

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numeros = [];
let aux = 0;
let soma = 0;

numeros[0] = parseInt(lines.shift());
numeros[1] = parseInt(lines.shift());

if (numeros[0] > numeros[1]) {
  aux = numeros[0];
  numeros[0] = numeros[1];
  numeros[1] = aux;
}

for (let i = numeros[0]; i <= numeros[1]; i++) {
  if (i % 13 !== 0) {
    soma = soma + i;
  }
}

console.log(soma);

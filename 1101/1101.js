var input = require("fs").readFileSync("1101/stdin", "utf8");
var lines = input.split("\n");

let loops = lines.length;

let paresDeNums = [];
let num1 = [];
let num2 = [];
let valores = "";
let soma = 0;

for (let i = 0; i < loops; i++) {
  paresDeNums[i] = lines.shift();
  num1[i] = parseInt(paresDeNums[i].split(" ").shift());
  num2[i] = parseInt(paresDeNums[i].split(" ").pop());

  if (num1[i] <= 0 || num2[i] <= 0) {
    loops = i;
  }

  if (num1[i] > num2[i]) {
    let aux = 0;
    aux = num1[i];
    num1[i] = num2[i];
    num2[i] = aux;
  }
}

for (let i = 0; i < loops; i++) {
  while (num1[i] <= num2[i]) {
    valores = valores + num1[i] + " ";
    soma = soma + num1[i];
    num1[i]++;
  }
  console.log(`${valores}Sum=${soma}`);
  soma = 0;
  valores = "";
}

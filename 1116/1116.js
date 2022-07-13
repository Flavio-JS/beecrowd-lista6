var input = require("fs").readFileSync("1116/stdin", "utf8");
var lines = input.split("\n");

let entradas = [];
let num1 = 0;
let num2 = 0;

entradas[0] = parseInt(lines.shift());

for (let i = 1; i <= entradas[0]; i++) {
  entradas[i] = lines.shift();
  num1 = parseFloat(entradas[i].split(" ").shift());
  num2 = parseFloat(entradas[i].split(" ").pop());

  if (num2 == 0) {
    console.log("divisao impossivel");
  } else {
    console.log((num1 / num2).toFixed(1));
  }
}

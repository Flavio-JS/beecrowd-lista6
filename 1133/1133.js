var input = require("fs").readFileSync("1133/stdin", "utf8");
var lines = input.split("\n");

let valores = [];

valores[0] = parseInt(lines.shift());
valores[1] = parseInt(lines.shift());

if (valores[0] > valores[1]) {
  let aux = valores[0];
  valores[0] = valores[1];
  valores[1] = aux;
}

while (valores[0] < valores[1]) {
  valores[0]++;
  if ((valores[0] % 5 == 2 || valores[0] % 5 == 3) && valores[0] < valores[1]) {
    console.log(valores[0]);
  }
}

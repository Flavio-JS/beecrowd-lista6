var input = require("fs").readFileSync("1134/stdin", "utf8");
var lines = input.split("\n");

let continuar = true;
let verificacao = 0;
let alcool = 0;
let gasolina = 0;
let disel = 0;

while (continuar) {
  verificacao = parseInt(lines.shift());

  if (verificacao >= 1 && verificacao <= 4) {
    if (verificacao == 1) {
      alcool++;
    } else if (verificacao == 2) {
      gasolina++;
    } else if (verificacao == 3) {
      disel++;
    } else {
      continuar = false;
    }
  }
}

console.log(
  `MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${disel}`
);

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let quantidadeDeExperimentos = parseInt(lines.shift());
let experimentos = [];
let quantidadeExperimentos = [];
let cobaiaExperimento = [];
let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for (let i = 0; i < quantidadeDeExperimentos; i++) {
  experimentos[i] = lines.shift();
  quantidadeExperimentos[i] = parseInt(experimentos[i].split(" ").shift());
  cobaiaExperimento[i] = experimentos[i].split(" ").pop();
  totalCobaias = totalCobaias + quantidadeExperimentos[i];

  if (cobaiaExperimento[i] === "C\r") {
    totalCoelhos = totalCoelhos + quantidadeExperimentos[i];
  } else if (cobaiaExperimento[i] === "R\r") {
    totalRatos = totalRatos + quantidadeExperimentos[i];
  } else {
    totalSapos = totalSapos + quantidadeExperimentos[i];
  }
}

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(
  `Percentual de coelhos: ${((totalCoelhos / totalCobaias) * 100).toFixed(2)} %`
);
console.log(
  `Percentual de ratos: ${((totalRatos / totalCobaias) * 100).toFixed(2)} %`
);
console.log(
  `Percentual de sapos: ${((totalSapos / totalCobaias) * 100).toFixed(2)} %`
);

var input = require("fs").readFileSync("1131/stdin", "utf8");
var lines = input.split("\n");

let grenal = [];
let quantidadeGrenal = 0;
let golsInter = 0;
let vitoriaInter = 0;
let golsGremio = 0;
let vitoriaGremio = 0;
let empates = 0;
let continuar = 1;

while (continuar == 1) {
  grenal[0] = lines.shift();
  golsInter = grenal[0].split(" ").shift();
  golsGremio = grenal[0].split(" ").pop();

  quantidadeGrenal++;

  if (golsInter > golsGremio) {
    vitoriaInter++;
  } else if (golsInter < golsGremio) {
    vitoriaGremio++;
  } else {
    empates++;
  }

  console.log("Novo grenal (1-sim 2-nao)");

  continuar = parseInt(lines.shift());
}

console.log(`${quantidadeGrenal} grenais`);
console.log(`Inter:${vitoriaInter}`);
console.log(`Gremio:${vitoriaGremio}`);
console.log(`Empates:${empates}`);

if (vitoriaInter > vitoriaGremio) {
  console.log("Inter venceu mais");
} else if (vitoriaInter < vitoriaGremio) {
  console.log("Gremio venceu mais");
} else {
  console.log("Nao houve vencedor");
}

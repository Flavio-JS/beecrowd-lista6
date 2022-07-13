var input = require("fs").readFileSync("1099/stdin", "utf8");
var lines = input.split("\n");

let numeroDeTestes = parseInt(lines.shift());
let testes = [];
let testeNum1 = [];
let testeNum2 = [];

for (let i = 0; i < numeroDeTestes; i++) {
  let aux = 0;

  testes[i] = lines.shift();
  testeNum1[i] = parseInt(testes[i].split(" ").shift());
  testeNum2[i] = parseInt(testes[i].split(" ").pop());

  if (testeNum1[i] > testeNum2[i]) {
    aux = testeNum1[i];
    testeNum1[i] = testeNum2[i];
    testeNum2[i] = aux;
  }
  console.log(`testeNum1[${i}] = ${testeNum1[i]}`);
  console.log(`testeNum2[${i}] = ${testeNum2[i]}`);
}

for (let i = 0; i < numeroDeTestes; i++) {
  let somaNumsImpares = 0;
  while (testeNum1[i] < testeNum2[i]) {
    testeNum1[i]++;
    if (testeNum1[i] % 2 !== 0 && testeNum1[i] < testeNum2[i]) {
      somaNumsImpares = somaNumsImpares + testeNum1[i];
    }
  }
  console.log(somaNumsImpares);
}

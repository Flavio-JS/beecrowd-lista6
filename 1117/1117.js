var input = require("fs").readFileSync("1117/stdin", "utf8");
var lines = input.split("\n");

let repetirN1 = true;
let repetirN2 = true;
let nota1 = 0;
let nota2 = 0;

while (repetirN1) {
  nota1 = parseFloat(lines.shift());
  if (nota1 < 0 || nota1 > 10) {
    console.log("nota invalida");
  } else {
    repetirN1 = false;
    while (repetirN2) {
      nota2 = parseFloat(lines.shift());
      if (nota2 < 0 || nota2 > 10) {
        console.log("nota invalida");
      } else {
        repetirN2 = false;
        console.log(`media = ${((nota1 + nota2) / 2).toFixed(2)}`);
      }
    }
  }
}

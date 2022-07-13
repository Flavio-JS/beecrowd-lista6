var input = require("fs").readFileSync("1118/stdin", "utf8");
var lines = input.split("\n");

let nota1 = 0;
let nota2 = 0;
let repetirTodoProcesso = true;
let repetirN1 = true;
let repetirN2 = true;
let novoCalculo = 0;

while (repetirTodoProcesso) {
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
  console.log(`novo calculo (1-sim 2-nao)`);
  novoCalculo = lines.shift();
  if (novoCalculo == 1) {
    repetirN1 = true;
    repetirN2 = true;
  } else if (novoCalculo == 2) {
    repetirTodoProcesso = false;
  }
}

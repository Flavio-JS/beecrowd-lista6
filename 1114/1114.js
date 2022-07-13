var input = require("fs").readFileSync("1114/stdin", "utf8");
var lines = input.split("\n");

let loops = lines.length;

let senha = [];
let i = 0;

while (i < loops) {
  senha[i] = parseInt(lines.shift());

  if (senha[i] != 2002) {
    console.log("Senha Invalida");
  } else {
    console.log("Acesso Permitido");
    i = loops;
  }
  i++;
}

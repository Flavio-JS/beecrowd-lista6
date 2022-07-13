var input = require("fs").readFileSync("1113/stdin", "utf8");
var lines = input.split("\n");

let loops = lines.length;

let paresDeNums = [];
let num1 = [];
let num2 = [];

for (let i = 0; i < loops; i++) {
  paresDeNums[i] = lines.shift();
  num1[i] = parseInt(paresDeNums[i].split(" ").shift());
  num2[i] = parseInt(paresDeNums[i].split(" ").pop());

  if (num1[i] == num2[i]) {
    loops = i;
  }

  if (num1[i] > num2[i]) {
    console.log("Decrescente");
  } else if (num1[i] < num2[i]) {
    console.log("Crescente");
  }
}

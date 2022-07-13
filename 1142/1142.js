var input = require("fs").readFileSync("1142/stdin", "utf8");
var lines = input.split("\n");

let loop = parseInt(lines.shift());

for (let i = 0; i < loop; i++) {
  console.log(`${i * 4 + 1} ${i * 4 + 2} ${i * 4 + 3} PUM`);
}

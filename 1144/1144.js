var input = require("fs").readFileSync("1144/stdin", "utf8");
var lines = input.split("\n");

let loop = parseInt(lines.shift());

for (let i = 0; i < loop; i++) {
  console.log(`${i + 1} ${(i + 1) * (i + 1)} ${(i + 1) * (i + 1) * (i + 1)}`);
  console.log(
    `${i + 1} ${(i + 1) * (i + 1) + 1} ${(i + 1) * (i + 1) * (i + 1) + 1}`
  );
}

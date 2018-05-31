var fs = require('fs');

fs.writeFileSync("untitled.txt", "How am I doing this???");
console.log(fs.readFileSync("untitled.txt"));

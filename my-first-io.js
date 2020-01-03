const fs=require("fs");
var filename= process.argv[2]
var test= fs.readFileSync(filename).toString().split('\n').length-1;
console.log(test);


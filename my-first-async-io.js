const fs=require("fs");
var filename= process.argv[2]
fs.readFile(filename,function(err,data){
if(err) return console.log(err)
const str=data.toString().split('\n').length-1;
console.log(str);
})


/*
 'use strict'
    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })


 */
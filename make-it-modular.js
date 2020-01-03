const fs=require("fs");
const path=require("path")
const myModule= require("./mymodule")
const filename= process.argv[2]
const ext= process.argv[3]

myModule(Buffer.from(filename),ext,function(err,list){
        
    if(err) return console.log(err)
   
 list.filter(x=> path.extname(x) == "."+ext).map(x=> console.log(x)) ;
  callback(null,list)
    


   
    }



)


// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
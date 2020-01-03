

const fs = require("fs");
const path = require("path");

function myModule(filename,ext, callback){
fs.readdir(filename, function  (err, list) {
        
    if(err) return callback(err)
    
 list=list.filter(x=> path.extname(x) == "."+ext) ;
  callback(null,list)
    

   
    })
}
module.exports= myModule

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
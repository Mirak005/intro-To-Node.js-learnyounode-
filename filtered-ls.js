const fs = require("fs");
const path = require("path");

const filename = process.argv[2];
const ext = process.argv[3];
fs.readdir(Buffer.from(filename), function callback(err, list) {
  if (err) return console.log(err);
  else {
    return list
      .filter(x => path.extname(x) == "." + ext)
      .map(x => console.log(x));
  }
});

//         const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })

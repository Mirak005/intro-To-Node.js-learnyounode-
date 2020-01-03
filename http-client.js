const http = require("http");
const url = process.argv[2];
http.get(url, function(response) {
  response
    .setEncoding("utf8")
    .on("data", console.log)
    .on("error", console.error);
});

// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

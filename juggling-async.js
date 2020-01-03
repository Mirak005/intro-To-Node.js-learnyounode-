
const bl = require("bl");
const http = require("http");



// var async = require("async");
 
// ...or ES2017 async functions
// async.mapLimit(process.argv.slice(2), 2, async function(url) {
//     http.get(url, function(response) {
//         response.pipe(
//           bl(function(err, data) {
//             if (err) console.log(err);
//             console.log(data.toString());
//           })
//         )
//       })
// })



const url1=process.argv[2]
const url2=process.argv[3]



http.get(url1, function(response) {
  response.pipe(
    bl(function(err, data) {
      if (err) console.log(err);
      console.log(data.toString());
    })
  )
})

http.get(url2, function(response) {
    response.pipe(
      bl(function(err, data) {
        if (err) console.log(err);
        console.log(data.toString());
      })
    );
  })


//   process.argv.slice(2).map(url=> http.get(url ,function(response) {
//     response.pipe(
//       bl(function(err, data) {
//         if (err) console.log(err);
//         console.log(data.toString());
//       })
//     )
//   })   )


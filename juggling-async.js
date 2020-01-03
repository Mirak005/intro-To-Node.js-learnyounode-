const bl = require("bl");
const http = require("http");
const url1 = process.argv[2];
const url2 = process.argv[3];

http.get(url1, function(response) {
  response.pipe(
    bl(function(err, data) {
      if (err) console.log(err);
      console.log(data.toString());
    })
  );
});

http.get(url2, function(response) {
  response.pipe(
    bl(function(err, data) {
      if (err) console.log(err);
      console.log(data.toString());
    })
  );
});

//   process.argv.slice(2).map(url=> http.get(url ,function(response) {
//     response.pipe(
//       bl(function(err, data) {
//         if (err) console.log(err);
//         console.log(data.toString());
//       })
//     )
//   })   )

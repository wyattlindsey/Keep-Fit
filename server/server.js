var express = require('express');
var helper = require('./helper.js');
var app = express();

require('./routes.js')(app, express);
// start listening to requests on port 8000
app.listen(process.env.PORT || 8000);
console.log('Server up and ready to serve!');
// app.listen(8000, function(err) {
//   if (err) {
//       console.log('Error', err);
//   } else {
//       console.log('Server listening on', 8000);
//   }
// });

// export our app for testing and flexibility, required by index.js
module.exports.app = app;

const express = require('express');
const helper = require('./helper.js');
const app = express();
const config = require('./config');
const routes = require('./routes.js')(app, express);

app.listen(process.env.PORT || 8000, () => {
  console.log('Server up and ready to serve!');
});

module.exports.app = app;

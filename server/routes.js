var helpers = require('./helper.js'); // our custom middleware
var requestHandler = require('./requestHandler');
//var morgan = require('morgan'); <-- debugging
//var bodyParser = require('body-parser');

module.exports = function (app, express) {

  // app.use(morgan()); <-- debugging
  //app.use(bodyParser.urlencoded()); <-- use for ajax post requests
  app.use(express.static(__dirname + '../client'));
  //app.get('/',requestHandler.getIndex);
  app.post('/api/addUser',requestHandler.addUser);
  app.get('/api/logIn',requestHandler.logIn);
  app.post('/api/signUp',requestHandler.signUp);
  app.post('/api/submitWorkout', requestHandler.submitWorkout);
  app.get('/api/getWorkouts', requestHandler.getWorkouts);

  // app.use(helpers.errorLogger); <-- debugging
  // app.use(helpers.errorHandler); <--debugging

};

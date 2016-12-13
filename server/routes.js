var helpers = require('./helper.js'); // our custom middleware
var requestHandler = require('./requestHandler');
var morgan = require('morgan'); //<-- debugging
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
  app.use(morgan()); //<-- debugging

  app.use(bodyParser.urlencoded()); //<-- use for ajax post requests
  app.use(express.static(path.join(__dirname, '../client')));
  //app.get('/',requestHandler.getIndex);
  app.get('/api/getUser',requestHandler.getUser);
  app.post('/api/signUp',requestHandler.signUp);
  app.post('/api/submitWorkout', requestHandler.submitWorkout);
  app.get('/api/getWorkouts', requestHandler.getWorkouts);
  app.post('/api/submitExercise', requestHandler.submitExercise);
  app.get('/api/getExercises', requestHandler.getExercises);

  //need to add this to handle direct addressing of routes.
  //will serve index.html which has our jsx linked for routing.
  app.get('*', function (request, response){
    response.sendFile(path.join(__dirname, '../client/index.html'));
  });

  // app.use(helpers.errorLogger); <-- debugging
  // app.use(helpers.errorHandler); <--debugging

};

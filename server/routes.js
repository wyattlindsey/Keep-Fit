var helpers = require('./helper.js'); // our custom middleware
var requestHandler = require('./requestHandler');
var morgan = require('morgan'); //<-- debugging
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
  // app.use(morgan()); //<-- debugging

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  app.use(express.static(path.join(__dirname, '../client')));
  // //app.get('/',requestHandler.getIndex);


  router.route('/users')
    .get(userController.getAllUsers)
    .post(userController.addUser);

  router.route('/users/:userId')
    .put(userController.updateAUser)

    .delete(userController.deleteAUser);

// this is the dashboard "/users/:userId/workouts"
  router.route('/users/:userId/workouts')
    .get(workoutController.getWorkouts)
    .post(workoutController.addWorkout);

  router.route('/users/:userId/workouts/:workoutId')
    .post(exerciseController.addExercise) // <----- ?? what's the point
    .get(workoutController.getWorkout) //gets the workout, and then gets the associated exercises
    .put(workoutController.updateWorkout)
    .delete(workoutController.deleteWorkout);


  //all the exercises for a workout
  router.route('/users/:userId/workouts/:workoutId/exercises/:exercisesId')

    .put(exerciseController.updateExercise)
    .delete(exerciseController.deleteExercise);

  // app.get('/api/getUser',requestHandler.getUser);
  // app.post('/api/signUp',requestHandler.signUp);

  // app.post('/api/createWorkout', requestHandler.createWorkout);
  // app.post('/api/submitWorkout', requestHandler.submitWorkout);

  // app.get('/api/getWorkouts', requestHandler.getWorkouts);

  // app.post('/api/submitExercise', requestHandler.submitExercise);
  // app.get('/api/getExercises', requestHandler.getExercises);

  //need to add this to handle direct addressing of routes.
  //will serve index.html which has our jsx linked for routing.
  app.get('*', function (request, response){
    response.sendFile(path.join(__dirname, '../client/index.html'));
  });

  // app.use(helpers.errorLogger); <-- debugging
  // app.use(helpers.errorHandler); <--debugging

};

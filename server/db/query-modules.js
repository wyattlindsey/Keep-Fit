var db = require('./index.js');
var mysql = require('mysql');

module.exports = {
  // Add a user to KeepFit db.
  // TODO: check if name already exists
  //    : integrate authentication
  signUp: function (username) {
    db.query("insert into Users (Username, Hash, Salt) values (?,'Ginger','Spells')",['Test1'], function(error, data) {
        if(error) {console.log(error);}
      });
    },
    // Get specific user.
    // Useful perhaps as signUp helper to determining if username taken.
  getUser: function (username,cb) {
    db.query('Select * from Users where Users.Username = ?',['Test1'], function (error, results, fields) {
      if(error) {console.log(error);}
      // use cb from requestHandler to parse results
      cb(results);
    });
  },
  // Completed workout.
  submitWorkout: function (username, workoutName) {
    db.query('insert into Users_Workouts (id_Users,id_Workouts,Date) values ( (select id from Users where Users.Username = ?), (select id from Workouts where Workouts.Name = ?), CURDATE());',[username, workoutName], function(error,data) {
      if(error) {console.log(error);}
    })
  },
  // Created workout.
    // Breaks if one/some of these (workoutName/exerciseName) are not new
  createWorkout: function (userName, workoutName, exerciseName, weight, reps) {
    // Temporary values for easy(er) debugging.
    // userName = "HermioneGranger";
    // workoutName = "TimeTurning";
    // exerciseName = "MalfoyPunch";
    // weight=2;
    // reps=3;
    // Add Exercise.
    db.query('insert ignore into Exercises (Name, Description) values (?,?)',[exerciseName,"Careful: both ends explode."]);

    console.log("After first Query")
    // Add Workout.
    db.query('insert ignore into Workouts (Name) values (?)',[workoutName]);

    console.log("After 2 Query")
    // Connect foreign keys of Exercise & Workout.
    db.query('insert ignore into Workouts_Exercises (id_Workouts,id_Exercises) values ( (select id from Workouts where Workouts.Name=?), (select id from Exercises where Exercises.Name=?) )',[workoutName, exerciseName]);

    console.log("After 3 Query")
    // Connect foreign keys of user to Workout in Users_Workouts.
    db.query('insert ignore into Users_Workouts (id_Users,id_Workouts,Date) values ((select id from Users where Users.Username = ?), (select id from Workouts where Workouts.name = ?), CURDATE())',[userName, workoutName])

    console.log("After 4th Query")
    // Add weight + reps to Users_Workouts_Exercises.
    db.query('insert ignore into Users_Workouts_Exercises (id_Users_Workouts, id_Workouts_Exercises, weight, reps) values ((select id from Users_Workouts where (Users_Workouts.id_Users = (select id from Users where Users.Username = ?) AND Users_Workouts.id_Workouts = (select id from Workouts where Workouts.Name = ?) AND Users_Workouts.date = CURDATE())), (select id from Workouts_Exercises where (Workouts_Exercises.id_Exercises = (select id from Exercises where Exercises.Name = ?) AND Workouts_Exercises.id_Workouts = (select id from Workouts where Workouts.Name = ?))), ?, ?)',[userName, workoutName, exerciseName, workoutName, weight,reps]);
    // id from Users_Workouts
      // userid, workoutid, datesle
        // userid fetch w/ username
        // workoutid fetch w/ workoutname
    // id from Workouts_Exercises
      // workoutid, exerciseid
      // workoutid fetch w/ workoutName
      // exerciseid fetch w/ exerciseName
    // weight/reps
  },
  // Retrieve user's workouts completed
  getWorkouts: function(cb, username = undefined) {
    // For testing: if username input, use it, else hard coded
     if(username) {
       db.query('select Workouts.name, Users_Workouts.Date from Users_Workouts, Workouts where Users_Workouts.id_Workouts = Workouts.id and Users_Workouts.id_Users = (select id from Users where Users.Username = ?)',[username], function(error, results) {cb(results);});
     } else {
      // db.query('select Workouts.name, Users_Workouts.Date from Users_Workouts, Workouts where Users_Workouts.id_Workouts = Workouts.id and Users_Workouts.id_Users = (select id from Users where Users.Username = ?)',["**USERNAME HERE**"], function(error, results) {cb(results);});
      db.query('select distinct Workouts.name, Users_Workouts.Date from Users_Workouts, Workouts where Users_Workouts.id_Workouts = Workouts.id and Users_Workouts.id_Users = (select id from Users where Users.Username = ?)',["Test1"], function(error, results) {cb(results);});
      // db.query('select * from Users_Workouts_Exercises', function(error, results) {cb(results);});
     }
   },
  // Create an exercise and connect to correct foreign keys.
  submitExercise: function () {
    db.query('insert into Exercises (Name, Description) values ("Potato Toss", "Toss a ParrotPotatoe!")', function(error,data) {
      if(error) {
        console.log(error);
        res.send(error);
      }
    })
  },
  // Get all exercises. Possibly to be used when searching and assigning exercises to a new workout.
  getExercises: function(username,cb) {
    db.query('Select * from Exercises', function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    })
  }
}

// Selects detailed workout history for specific user '?':
/*
select * from Users_Workouts,Workouts_Exercises,Users_Workouts_Exercises,Workouts,Exercises where Users_Workouts.id_Users = (select id from Users where Users.Username = '?') and Workouts_Exercises.id = Users_Workouts_Exercises.id_Workouts_Exercises and E
xercises.id = Workouts_Exercises.id_Exercises and Workouts.id = Workouts_Exercises.id_Workouts AND users_workouts.id_workouts = workouts_exercises.id_workouts
*/


var db = require('./index.js');
var mysql = require('mysql');

module.exports = {
  // Add a user to KeepFit
  // TODO: check if name already exists
  //    : integrate authentication
  signUp: function (username) {
    console.log("Q_M signUp")
    db.query("insert into Users (Username, Hash, Salt) values (?,'Browns','Pepper')",['Perl'], function(error, data) {
      console.log("inside QM adduser")
        if(error) {console.log(error); res.send(error);}
      });
    },
    // get specific user. Useful perhaps as signUp helper to determining if username taken
  getUser: function (username,cb) {
    db.query('Select * from Users where Users.Username = ?',['Perl'], function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    });
  },
  // Completed workout.
  submitWorkout: function (username, workoutName, date) {
    db.query('insert into Workouts (Name) values ("PerlsCurls")');
    db.query('insert into Users_Workouts (id_Users,id_Workouts,Date) values ( (select id from Users where Users.Username = ?), (select id from Workouts where Workouts.Name = ?), ?);',['Perl','PerlsCurls', '2016-09-12'], function(error,data) {
      if(error) {
        console.log(error);

      }
    })
  },
  // Created workout.
  createWorkout: function (workoutName, exerciseName, exerciseDescription) {
    // Add Exercise.
    db.query('insert into Exercises (Name, Description) values (?,?)',["Alohomora","Unlocks Doors (novice)"]);
    // Add Workout.
    db.query('insert into Workouts (Name) values ?',["Hermoine\'s Spells"]);
    // Connect foreign keys of Exercise & Workout.
    db.query('insert into Workouts_Exercises (id_Workouts,id_Exercises) values ( (select id from Workouts where Workouts.Name=?), (select id from Exercises where Exercises.Name=?) )',["Hermoine\'s Spells", "Alohomora"]);
    // Connect foreign keys of user to Workout in Users_Workouts.
    // Add weight + reps to Users_Workouts_Exercises.
  },
  // Retrieve user's workouts completed
  getWorkouts: function(username,cb) {
    if(username) {
      db.query('select Workouts.name, Users_Workouts.Date from Users_Workouts, Workouts where Users_Workouts.id_Workouts = Workouts.id and Users_Workouts.id_Users = (select id from Users where Users.Username = ?)',[username], function(error, results) {cb(results)});
    } else {
      db.query('select Workouts.name, Users_Workouts.Date from Users_Workouts, Workouts where Users_Workouts.id_Workouts = Workouts.id and Users_Workouts.id_Users = (select id from Users where Users.Username = ?)',["Mr.Krabs"], function(error, results) {cb(results)});
    }
  },
  //
  submitExercise: function () {
    db.query('insert into Exercises (Name, Description) values ("Potato Toss", "Toss a ParrotPotatoe!")', function(error,data) {
      if(error) {
        console.log(error);
        res.send(error);
      }
    })
  },
  //
  getExercises: function(username,cb) {
    db.query('Select * from Exercises', function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    })
  }
}
// List every user's workout History. Ever.
// Info to be transferred --
  // Users name, Workouts, EX within each WO, Weight&&Reps for each EX in each WO
SELECT
  // Get a user's Workout's IDs
// -- select ID from Users_Workouts where ID_Users = (select ID from Users where Users.Username = 'codybot');
// 
select * from Users_Workouts_Exercises where ID_Users_Workouts = (
  select ID from Users_Workouts where ID_Users = (
    select ID from Users where Users.Username = 'codybot'
  )
);
// ^^^ THIS WORKS ^^^ //
  // List workout history for a user
--  select
// List every user.
-- select name from users;
  // Show a user
-- select name from users where name = 'codybot';

  // List every friend.
*// List every workout.
-- select Names from Workouts;
  // List every WO for a User
    // 1. All the WO's that have been created/subscribed to
    // 2. All the WO's that have been done -- User WO history
  // List every EX for a WO

*// List every exercise.
-- select Name, Description from Exercises;
  // List every WO for an EX

INSERT
// Insert a Username
-- insert into Users Username values 'Harry Potter';
// Enters results of an exercise in a WO
-- insert into Users_Workouts_Exercises (id_Users_Workouts,id_Workouts_Exercises,Weight,Reps) values(
  (select id from Users_Workouts where id_Users = (select id from Users where Users.Username = 'codybot') AND Date = '2016-12-01'), // id_Users_Workouts
  (select id from Workouts_Exercises where id_Workouts = (select id from Workouts where Workouts.Name = 'Full-Body') AND id_Exercises = (select id from Exercises where Exercises.Name = 'Squat')), // id_Workouts_Exercises
  95,15);
// Insert a workout + related exercises

// Subscribe to WO

// Clicking on Workout
  // 1. See details of WO (What exercises are in it?)
  // 2. See your history with that particular WO
  // 3. Create a WO with whatever exercises you want
    //  Would then have to list available exercises
    // OR option to create your own exercise/s

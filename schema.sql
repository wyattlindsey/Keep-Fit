-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  Username VARCHAR(20) NOT NULL,
  Hash VARCHAR(100) NOT NULL,
  Salt VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Workouts'
--
-- ---

DROP TABLE IF EXISTS Workouts;

CREATE TABLE Workouts (
  id INTEGER NOT NULL AUTO_INCREMENT,
  Name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);
-- id INTEGER NOT NULL AUTO_INCREMENT,
-- Name VARCHAR NOT NULL,

-- ---
-- Table 'Exercises'
--
-- ---

DROP TABLE IF EXISTS Exercises;

CREATE TABLE Exercises (
  id INTEGER NOT NULL AUTO_INCREMENT,
  Name VARCHAR(20) NOT NULL,
  Description VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Users-Workouts'
--
-- ---

DROP TABLE IF EXISTS Users_Workouts;

CREATE TABLE Users_Workouts (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_Users INTEGER NOT NULL,
  id_Workouts INTEGER NOT NULL,
  Date DATE NOT NULL,
  PRIMARY KEY (id)
);

-- -
-- Table 'Workouts_Exercises'
  -- __
  -- __ ___

DROP TABLE IF EXISTS Workouts_Exercises;

CREATE TABLE Workouts_Exercises (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_Workouts INTEGER NOT NULL,
  id_Exercises INTEGER NOT NULL,
  PRIMARY KEY (id)
);

-- __ ___
-- __ Table 'Users_Workouts_Exercises'
-- __
-- __ ___

DROP TABLE IF EXISTS Users_Workouts_Exercises;

CREATE TABLE Users_Workouts_Exercises (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_Users_Workouts INTEGER NOT NULL,
  id_Workouts_Exercises INTEGER NOT NULL,
  Weight INTEGER NOT NULL,
  Reps INTEGER NOT NULL,
  PRIMARY KEY (id)
);

-- __ ___
-- __ Foreign Keys
-- __ ___

ALTER TABLE Users_Workouts ADD FOREIGN KEY (id_Users) REFERENCES Users (id);
ALTER TABLE Users_Workouts ADD FOREIGN KEY (id_Workouts) REFERENCES Workouts (id);
ALTER TABLE Workouts_Exercises ADD FOREIGN KEY (id_Workouts) REFERENCES Workouts (id);
ALTER TABLE Workouts_Exercises ADD FOREIGN KEY (id_Exercises) REFERENCES Exercises (id);
ALTER TABLE Users_Workouts_Exercises ADD FOREIGN KEY (id_Users_Workouts) REFERENCES Users_Workouts (id);
ALTER TABLE Users_Workouts_Exercises ADD FOREIGN KEY (id_Workouts_Exercises) REFERENCES Workouts_Exercises (id);

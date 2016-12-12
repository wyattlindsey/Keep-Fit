-- ---
-- Globals
-- ---
CREATE DATABASE keepFit;

USE keepFit;
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

-- ---
--  1  CREATE OR REPLACE TRIGGER employee_insert_update
--  2    BEFORE INSERT OR UPDATE ON employee
--  3    FOR EACH ROW
--  4  DECLARE
--  5    dup_flag  INTEGER;
--  6  BEGIN
--  7       --Force all employee names to uppercase.
--  8  :NEW.first_name := UPPER(:NEW.first_name);
--  9  END;

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Workouts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Exercises` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users-Workouts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Workouts-Exercises` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users-Workouts-Exercises` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Username`) VALUES
-- ('','');
-- INSERT INTO `Workouts` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Exercises` (`id`,`Name`,`Description`) VALUES
-- ('','','');
-- INSERT INTO `Users-Workouts` (`id`,`id_Users`,`id_Workouts`,`Date`) VALUES
-- ('','','','');
-- INSERT INTO `Workouts-Exercises` (`id`,`id_Workouts`,`id_Exercises`) VALUES
-- ('','','');
-- INSERT INTO `Users-Workouts-Exercises` (`id`,`id_Users-Workouts`,`id_Workouts-Exercises`,`Weight`,`Reps`) VALUES
-- ('','','','','');

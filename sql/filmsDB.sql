CREATE DATABASE films;
USE films;

CREATE TABLE award (
	id INT PRIMARY KEY,
    name VARCHAR(45) NOT NULL);
    
CREATE TABLE film_festival (
	id INT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    location VARCHAR(45) NOT NULL,
    year_started INT NOT NULL);
    
CREATE TABLE genre (
	id INT PRIMARY KEY,
    name VARCHAR(45) NOT NULL);
    
CREATE TABLE director (
	id INT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    birthdate DATE NOT NULL,
    gender VARCHAR(45) NOT NULL,
    race VARCHAR(45) NOT NULL);
    
CREATE TABLE film (
	id INT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    date_released DATE NOT NULL,
    passes_bechdol BOOLEAN NOT NULL,
    runtime INT NOT NULL,
    rating INT NOT NULL,
    director INT REFERENCES director(id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
    genre INT REFERENCES genre(id)
		ON UPDATE CASCADE
		ON DELETE CASCADE);

CREATE TABLE winner (
	id INT PRIMARY KEY,
    year INT NOT NULL,
    film INT REFERENCES film(id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
    award INT REFERENCES award(id)
		ON UPDATE CASCADE
		ON DELETE CASCADE);
    
CREATE TABLE debuted_at_festival (
	id INT PRIMARY KEY,
    film INT REFERENCES film(id)
    	ON UPDATE CASCADE
		ON DELETE CASCADE,
    festival INT REFERENCES festival(id)
    	ON UPDATE CASCADE
		ON DELETE CASCADE);
    
CREATE TABLE watched (
	id INT PRIMARY KEY,
    user VARCHAR(45) REFERENCES user(username)
    	ON UPDATE CASCADE
		ON DELETE CASCADE,
    date DATE NOT NULL,
    rating INT,
    film INT REFERENCES film(id)
    	ON UPDATE CASCADE
		ON DELETE CASCADE,
	CHECK (rating = NULL or rating = 1 OR rating = 2 OR rating = 3 
			OR rating = 4 OR rating = 5));
            
CREATE TABLE user (
	username VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL);
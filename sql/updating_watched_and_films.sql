<<<<<<< Updated upstream
-- makes a new watched tuple
DROP PROCEDURE IF EXISTS create_watched;

DELIMITER //
CREATE PROCEDURE create_watched(uname VARCHAR(45),fid INT,wdate DATE,wrate INT)

BEGIN
	INSERT INTO watched(user,date,rating,film)
    VALUES ('uname','wdate',wrate,fid);
END //

-- selects a watched tuples for a given film from a user
DROP PROCEDURE IF EXISTS user_has_watched_film;

DELIMITER //
CREATE PROCEDURE user_has_watched_film(uname VARCHAR(45),fid INT)

BEGIN
	SELECT film.name, watched.date, watched.rating
    FROM watched
    WHERE watched.user = uname
    AND watched.film = fid;
END //
=======
USE films;
>>>>>>> Stashed changes

-- updates a new watched tuple
DROP PROCEDURE IF EXISTS update_watched;

DELIMITER //
CREATE PROCEDURE update_watched(wid INT,wdate DATE,wrate INT)

BEGIN
	UPDATE watched
<<<<<<< Updated upstream
    SET date= 'wdate'
    AND rate= wrate
=======
    SET date = wdate,
		rating = wrate
>>>>>>> Stashed changes
    WHERE id = wid;
END //

-- deletes a new watched tuple
DROP PROCEDURE IF EXISTS delete_watched;

DELIMITER //
CREATE PROCEDURE delete_watched(wid INT)

BEGIN
	DELETE FROM watched
    WHERE id = wid;
END //

-- makes a new film tuple
DROP PROCEDURE IF EXISTS create_film;

DELIMITER //
CREATE PROCEDURE create_film(fn VARCHAR(200), fdr DATE, fpb BOOLEAN, fru INT,
							 fra VARCHAR(45), fp VARCHAR(45), fd INT, fg INT)

BEGIN
	INSERT INTO film(name,date_released,passes_bechdol,runtime,rating,photo,director,genre)
    VALUES ('fn','fdr',fpb,fru,'fra','fp',fd,fg);
END //

-- returns true if there exists a film with the given name and release date
DROP FUNCTION IF EXISTS check_repeat_film;

DELIMITER //
CREATE FUNCTION check_repeat_film(fname VARCHAR(200), fdate DATE)
RETURNS BOOLEAN
DETERMINISTIC READS SQL DATA
BEGIN 
	DECLARE boo boolean;

	SET @homeland = NULL;
    SELECT film.id INTO @homeland FROM film 
    WHERE film.name = fname
    AND film.date_released = fdate;
    
    CASE
	WHEN
    (@homeland > 0)
		THEN SET boo = TRUE;
	ELSE SET boo = FALSE;
	END CASE;
    
    RETURN(boo);
END //

-- gets all the genre types and their ids
DROP PROCEDURE IF EXISTS get_genres;

DELIMITER // 
CREATE PROCEDURE get_genres()
BEGIN
	SELECT * FROM genre;
END //

-- gets all the director names and their ids
DROP PROCEDURE IF EXISTS get_directors;

DELIMITER // 
CREATE PROCEDURE get_directors()
BEGIN
	SELECT director.id, director.name
    FROM director;
END //

-- gets all the film festival names and their ids
DROP PROCEDURE IF EXISTS get_film_festivals;

DELIMITER // 
CREATE PROCEDURE get_film_festivals()
BEGIN
	SELECT film_festivals.id, film_festivals.name
    FROM film_festivals;
END //

-- adds a debuted at film festival for a film festival and a film
DROP PROCEDURE IF EXISTS add_festival_for_film;

DELIMITER // 
CREATE PROCEDURE add_festival_for_film(ffid INT,filmid INT)
BEGIN
	INSERT INTO debuted_at_festival(film,festival)
    VALUES (filmid,ffid);
END //
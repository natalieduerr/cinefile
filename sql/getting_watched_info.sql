USE films;

-- ** System NEEDS to store username for the use of these

-- gets all watched rows for a given user
DROP PROCEDURE IF EXISTS get_watched;//

DELIMITER // 
CREATE PROCEDURE get_watched(uname VARCHAR(45))
BEGIN
	SELECT film.name, watched.date, watched.rating
    FROM watched
    INNER JOIN film
    ON film.id = watched.film
    WHERE watched.user = uname;
END //

-- gets the number of distinct movies watched that pass BCD
DROP FUNCTION IF EXISTS BCD_percent;//

DELIMITER //
CREATE FUNCTION BCD_percent(uname VARCHAR(45))
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
	DECLARE count_BCD INT;
    
    SELECT COUNT(distinct fi) INTO count_BCD
    FROM (SELECT film.id as fi,watched.date,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE watched.user = uname
          AND film.passes_bechdol = true) AS bc; 
	
    RETURN count_BCD;
END //
           
-- gets the number of distinct movies watched that are directed by women
DROP FUNCTION IF EXISTS women_directed_percent;//

DELIMITER //
CREATE FUNCTION women_directed_percent(uname VARCHAR(45))
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
    DECLARE count_women INT;
    
    SELECT COUNT(distinct fi) INTO count_women
    FROM (SELECT film.id as fi,watched.date,watched.rating
		  FROM film
		  INNER JOIN watched
		  ON film.id = watched.film
          INNER JOIN director
          ON film.director = director.id
		  WHERE watched.user = uname
          AND director.gender = "F") AS bc; 
	
    RETURN count_women;
END //

-- returns the number of the times a user gave a given rating 
DROP FUNCTION IF EXISTS rating_percentage;//

DELIMITER //
CREATE FUNCTION rating_percentage(uname VARCHAR(45),rr INT)
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
    DECLARE count_rated INT;
    
    SELECT COUNT(wr) INTO count_rated
    FROM (SELECT watched.rating as wr
		  FROM watched
		  WHERE watched.user = uname) as ope
    WHERE ope.wr = rr;
    
    RETURN count_rated;
END //

-- returns the number of the times a user has seen a watched
DROP FUNCTION IF EXISTS count_watched;//

DELIMITER //
CREATE FUNCTION count_watched(uname VARCHAR(45))
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
    DECLARE count_movies INT;
    
	SELECT COUNT(distinct fi) INTO count_movies 
		FROM (SELECT film.id as fi,watched.date,watched.rating
			  FROM watched
			  INNER JOIN film
			  ON film.id = watched.film
			  WHERE watched.user = uname) AS uwu;
		
	RETURN count_movies;
END //
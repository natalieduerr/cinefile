USE films;

-- ** System NEEDS to store username for the use of these

-- gets all watched rows for a given user
DROP PROCEDURE IF EXISTS get_watched;

DELIMITER // 
CREATE PROCEDURE get_watched(uname VARCHAR(45))
BEGIN
	SELECT film.name, watched.date, watched.rating
    FROM watched
    INNER JOIN film
    ON film.id = watched.film
    WHERE watched.user = uname;
END //

-- gets the integer percentage of distinct movies watched that pass BCD
DROP FUNCTION IF EXISTS BCD_percent;

DELIMITER //
CREATE FUNCTION BCD_percent(uname VARCHAR(45))
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
	DECLARE count_movies INT;
    DECLARE count_BCD INT;
    
    SELECT COUNT(distinct film.id) INTO count_movies 
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE winner.user = uname) AS uwu;
    
    SELECT COUNT(distinct film.id) INTO count_BCD
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE winner.user = uname
          AND film.passes_bechdol = true) AS bc; 
	
    RETURN (count_BCD / count_movies * 100);
END //
           
-- gets the integer percentage of distinct movies watched that are directed by women
DROP FUNCTION IF EXISTS women_directed_percent;

DELIMITER //
CREATE FUNCTION women_directed_percent(uname VARCHAR(45))
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
	DECLARE count_movies INT;
    DECLARE count_women INT;
    
    SELECT COUNT(distinct film.id) INTO count_movies 
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE winner.user = uname) AS uwu;
    
    SELECT COUNT(distinct film.id) INTO count_women
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
          INNER JOIN director
          ON film.director = director.id
		  WHERE winner.user = uname
          AND director.gender = "woman") AS bc; 
	
    RETURN (count_women / count_movies * 100);
END //

-- returns the percentage of the times a user gave a given rating 
DROP FUNCTION IF EXISTS rating_percentage;

DELIMITER //
CREATE FUNCTION rating_percentage(uname VARCHAR(45),rate INT)
RETURNS INT
DETERMINISTIC READS SQL DATA
BEGIN
	DECLARE count_ratings INT;
    DECLARE count_rated INT;
    
    SELECT COUNT(watched.film) INTO count_ratings
    FROM watched
    WHERE watched.film = film.id
    AND watches.user = uname
    AND watched.rating = rate;
    
    SELECT COUNT(watched.film) INTO count_rated
    FROM watched
    WHERE watched.film = film.id
    AND watches.user = uname
    AND watched.rating != NULL;
    
    RETURN (count_rated / count_ratings);
END //

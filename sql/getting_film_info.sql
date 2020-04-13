USE films;

-- fetching a list of all film names
DROP PROCEDURE IF EXISTS get_all_films;

DELIMITER // 
CREATE PROCEDURE get_all_films()
BEGIN
	SELECT film.id, film.name, film.date_released, film.photo FROM film
    ORDER BY date_released DESC;
END //

-- fetching all the film festivals and their information given a film name
DROP PROCEDURE IF EXISTS get_festivals_for_film;//

DELIMITER // 
CREATE PROCEDURE get_festivals_for_film(fid INT)
BEGIN
	SELECT film_festival.id, film_festival.name 
	FROM film_festival
    INNER JOIN debuted_at_festival
    ON debuted_at_festival.festival = film_festival.id
    INNER JOIN film
    ON film.id = debuted_at_festival.film
    WHERE film.id = fid;
END //

-- fetching the director of a film and their information
DROP PROCEDURE IF EXISTS get_director_for_film;//

DELIMITER // 
CREATE PROCEDURE get_director_for_film(fid INT)
BEGIN
	SELECT director.id, director.name
    FROM director
    INNER JOIN film
    ON film.director = director.id
    WHERE film.id = fid;
END //

-- fetching the awards of a film and their information
DROP PROCEDURE IF EXISTS get_awards_for_film;//

DELIMITER // 
CREATE PROCEDURE get_awards_for_film(fid INT)
BEGIN
	SELECT award.id, award.name, winner.year 
    FROM winner
    INNER JOIN award
    ON award.id = winner.award
    INNER JOIN film
    ON film.id = winner.film
    WHERE film.id = fid;
END //

-- fetching all the general information for a film
DROP PROCEDURE IF EXISTS get_film_info;//

DELIMITER // 
CREATE PROCEDURE get_film_info(fid INT)
BEGIN
	SELECT film.id, film.name, film.date_released, film.passes_bechdol,
		   film.runtime, film.rating, genre.name as genre, film.photo
	FROM film
    INNER JOIN genre
    ON genre.id = film.genre
    WHERE film.id = fid;
END //


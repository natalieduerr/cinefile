USE films;

-- gets info for an award (really just the name ngl)
DROP PROCEDURE IF EXISTS get_award_data;//

DELIMITER // 
CREATE PROCEDURE get_award_data(aid int)
BEGIN
	SELECT * FROM award
    WHERE award.id = aid;
END //

-- gets info for a director 
DROP PROCEDURE IF EXISTS get_director_data;//

DELIMITER // 
CREATE PROCEDURE get_director_data(did int)
BEGIN
	SELECT * FROM director
    WHERE director.id = did;
END //

-- gets info for a film festival 
DROP PROCEDURE IF EXISTS get_film_festival_data;//

DELIMITER // 
CREATE PROCEDURE get_film_festival_data(ffid int)
BEGIN
	SELECT * FROM film_festival
    WHERE film_festival.id = ffid;
END //

-- gets films that have won a given award
DROP PROCEDURE IF EXISTS get_film_for_award;//

DELIMITER // 
CREATE PROCEDURE get_film_for_award(aid int)
BEGIN
	SELECT film.id, film.name, film.date_released, film.photo
    FROM film
    INNER JOIN winner
    ON winner.film = film.id
    INNER JOIN award
    ON winner.award = award.id
    WHERE award.id = aid;
END //

-- gets films that have been directed by a given director
DROP PROCEDURE IF EXISTS get_film_for_director;//

DELIMITER // 
CREATE PROCEDURE get_film_for_director(did int)
BEGIN
	SELECT film.id, film.name, film.date_released, film.photo
    FROM film
    WHERE film.director = did;
END //

-- gets films that have debuded at a givel film festival
DROP PROCEDURE IF EXISTS get_film_for_film_festival;//

DELIMITER // 
CREATE PROCEDURE get_film_for_film_festival(ffid int)
BEGIN
	SELECT film.id, film.name, film.date_released, film.photo
    FROM film
    INNER JOIN debuted_at_festival
    ON debuted_at_festival.film = film.id
    INNER JOIN film_festival
    ON debuted_at_festival.festival = film_festival.id
    WHERE film_festival.id = ffid;
END //
const express = require("express");
const cors = require("cors");
const app = express();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'films'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

});

// const get_film_info = `SELECT film.id, film.name, film.date_released, film.passes_bechdol,
// film.runtime, film.rating, genre.name
// FROM film
// INNER JOIN genre
// ON genre.id = film.genre
// WHERE film.id = 1;`;


// con.query(get_film_info, function (err, rows, fields) {
//   if (err) throw err;

//   for (var i in rows) {
//     console.log(rows[i]);
//   }
// });

app.use(cors());

// Films
// app.get("/film", (req, res) => {
//   var get_all_films = `SELECT id, name, date_released, photo FROM film;`;

//   con.query(get_all_films, (err, results) => {
//     if (err) {
//       return res.send(err)
//     } else {
//       return res.json({
//         data: results
//       })
//     }
//   })
// });

app.get("/film", (req, res) => {
  var get_all_films = `CALL get_all_films()`;

  con.query(get_all_films, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/film/:id/info", function (req, res) {
  const id = req.params.id;
  const get_film_info = `SELECT film.id, film.name AS name, film.date_released, film.passes_bechdol,
  film.runtime, film.rating, film.photo, genre.name AS genre
FROM film
INNER JOIN genre
ON genre.id = film.genre
WHERE film.id = ${id};`;

  con.query(get_film_info, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/film/:id/director", function (req, res) {
  const id = req.params.id;
  const get_director = `	SELECT director.id, director.name
  FROM director
  INNER JOIN film
  ON film.director = director.id
  WHERE film.id = ${id};`;

  con.query(get_director, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/film/:id/festivals", function (req, res) {
  const id = req.params.id;
  const get_festivals = `SELECT film_festival.id, film_festival.name 
	FROM film_festival
    INNER JOIN debuted_at_festival
    ON debuted_at_festival.festival = film_festival.id
    INNER JOIN film
    ON film.id = debuted_at_festival.film
    WHERE film.id = ${id};`;

  con.query(get_festivals, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/film/:id/awards", function (req, res) {
  const id = req.params.id;
  const get_awards = `SELECT award.id, award.name, winner.year 
  FROM winner
  INNER JOIN award
  ON award.id = winner.award
  INNER JOIN film
  ON film.id = winner.film
  WHERE film.id = ${id};`;

  con.query(get_awards, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

// Awards
app.get("/award/:id/films", function (req, res) {
  const id = req.params.id;
  const get_awards = `SELECT film.id, film.name, film.date_released, film.photo
  FROM film
  INNER JOIN winner
  ON winner.film = film.id
  INNER JOIN award
  ON winner.award = award.id
  WHERE award.id = ${id};`;

  con.query(get_awards, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/award/:id/award", function (req, res) {
  const id = req.params.id;
  const get_info = `SELECT * FROM award
  WHERE award.id = ${id};`;

  con.query(get_info, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

// Festivals
app.get("/festival/:id/films", function (req, res) {
  const id = req.params.id;
  const get_awards = `SELECT film.id, film.name, film.date_released, film.photo
  FROM film
  INNER JOIN debuted_at_festival
  ON debuted_at_festival.film = film.id
  INNER JOIN film_festival
  ON debuted_at_festival.festival = film_festival.id
  WHERE film_festival.id = ${id};`;

  con.query(get_awards, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/festival/:id/festival", function (req, res) {
  const id = req.params.id;
  const get_info = `SELECT * FROM film_festival
  WHERE film_festival.id = ${id};`;

  con.query(get_info, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

// Director
app.get("/director/:id/films", function (req, res) {
  const id = req.params.id;
  const get_info = `SELECT film.id, film.name, film.date_released, film.photo
  FROM film
  WHERE film.director = ${id};`;

  con.query(get_info, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get("/director/:id/director", function (req, res) {
  const id = req.params.id;
  const get_info = `SELECT *
  FROM director
  WHERE director.id = ${id};`;

  con.query(get_info, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

// Watched

// app.get("/watched/create", (req, res) => {
//   const {user_id, name, date, rating} = req.query;
//   const create_watched = `CALL create_watched(?, ?, ?, ?)`;

//   con.query(create_watched, {user_id}, {name}, {date}, {rating}, (err, results) => {
//     if (err) {
//       return res.send(err)
//     } else {
//       return res.json({
//         message: 'Successfully created watched.',
//         data: results
//       })
//     }
//   })
// });

app.get("/watched/create", (req, res) => {
  const { user_id, name, date, rating } = req.query;
  const create_watched = `INSERT INTO watched(user, date, rating, film)
  VALUES ('${user_id}','${date}',${rating},${name});`;

  con.query(create_watched, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        message: 'Successfully created watched.',
        data: results
      })
    }
  })
});


app.get("/watched/:id", function (req, res) {
  const id = req.params.id;
  const get_watched = `CALL get_watched('${id}');`;

  con.query(get_watched, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});



app.listen(5000, () => {
  console.log("potato on port 5000");
});
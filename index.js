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

//////////////////////// Films ////////////////////////
// Gets all films in the DB
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


// Gets information on specified film
app.get("/film/:id/info", function (req, res) {
  const id = req.params.id;
  const get_film_info = `CALL get_film_info(${id});`;

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

// Gets director for specified film
app.get("/film/:id/director", function (req, res) {
  const id = req.params.id;
  const get_director = `CALL get_director_for_film(${id});`;

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

// Gets festivals for specified film
app.get("/film/:id/festivals", function (req, res) {
  const id = req.params.id;
  const get_festivals = `CALL get_festivals_for_film(${id});`;

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

// Gets awards for specified film
app.get("/film/:id/awards", function (req, res) {
  const id = req.params.id;
  const get_awards = `CALL get_awards_for_film(${id});`;

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

// Gets watched entries for specified user for specified film
app.get("/film/watched/:id/:fid", function (req, res) {
  const id = req.params.id;
  const fid = req.params.fid;
  const get_user_has_watched = `CALL user_has_watched_film('${id}', ${fid});`;

  con.query(get_user_has_watched, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

//////////////////////// Awards ////////////////////////
// Gets films that have won specified award
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

// Gets information on specified award
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

//////////////////////// Festival ////////////////////////
// Gets films for specified festival
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

// Gets festival info for specified festival
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

//////////////////////// Director ////////////////////////
// Gets films for specified director
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

// Gets director information for specified director
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

//////////////////////// Watched ////////////////////////
// Creates new watched film for specified user, film, date, rating
app.get("/watched/create", (req, res) => {
  const {user_id, name, date, rating} = req.query;
  const create_watched = `CALL create_watched('${user_id}', ${name}, '${date}', ${rating})`;

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

// Get all watched films for specified user
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

// Gets number of watched films
app.get("/watched/:id/count", function (req, res) {
  const id = req.params.id;
  const get_count = `select count_watched('${id}');`;
  
  con.query(get_count, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data:results
      })
    }
  })
});

// Gets number of watched films by specified user directed by women
app.get("/watched/:id/women", function (req, res) {
  const id = req.params.id;
  const get_women_directed = `select women_directed('${id}');`;
  
  con.query(get_women_directed, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data:results
      })
    }
  })
});

// Gets number of watched films by specified user that pass the Bechdol test
app.get("/watched/:id/bechdol", function (req, res) {
  const id = req.params.id;
  const get_bechdol = `select BCD_percent('${id}');`;
  
  con.query(get_bechdol, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data:results
      })
    }
  })
});

// Updates the specified watched entry with with specified information
app.get("/watched/update/:wid/:date/:rating", function (req, res) {
  const wid = req.params.wid;
  const date = req.params.date;
  const rating = req.params.rating;
  const update_watched = `CALL update_watched(${wid}, '${date}', ${rating});`;
  
  con.query(update_watched, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        message: 'Successfully updated watched.',
        data:results
      })
    }
  })
});

// Deletes the specified watched entry
app.get("/watched/delete/:wid", function (req, res) {
  const wid = req.params.wid;
  const delete_watched = `CALL delete_watched(${wid});`;
  
  con.query(delete_watched, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        message: 'Successfully deleted watched.',
        data:results
      })
    }
  })
});

// Get number of films rated NUM by specified user
app.get("/watched/:id/:num", function (req, res) {
  const id = req.params.id;
  const num = req.params.num;
  const rating_percentage = `SELECT rating_percentage('${id}', ${num});`;

  con.query(rating_percentage, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data:results
      })
    }
  })
});



app.listen(5000, () => {
  console.log("Terror from the Year 5000 connected");
});
const express = require("express");
const cors = require("cors");
const app = express();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'films',
  insecureAuth : true
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

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

// Creates new film
app.get("/film/create/:name/:released/:bechdel/:runtime/:rating/:imagePath/:director/:genre", function (req, res) {
  const name = req.params.name;
  const released = req.params.released;
  const bechdel = req.params.bechdel;
  const runtime = req.params.runtime;
  const rating = req.params.rating;
  const imagePath = req.params.imagePath;
  const director = req.params.director;
  const genre = req.params.genre;

  const create_film = `CALL create_film('${name}', '${released}', ${bechdel}, ${runtime}, '${rating}', '/imgs/${imagePath}', ${director}, ${genre});`;
  con.query(create_film, (err, results) => {
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

//////////////////////// Awards ////////////////////////
// Gets films that have won specified award
app.get("/award/:id/films", function (req, res) {
  const id = req.params.id;
  const get_awards = `CALL get_film_for_award(${id});`;

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
  const get_info = `CALL get_award_data(${id});`;

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
// Gets all festivals in DB
app.get("/festival/all", function (req, res) {
  const get_festival = `CALL get_film_festivals()`;

  con.query(get_festival, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

// Gets films for specified festival
app.get("/festival/:id/films", function (req, res) {
  const id = req.params.id;
  const get_films = `CALL get_film_for_film_festival(${id});`;

  con.query(get_films, (err, results) => {
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
  const get_info = `CALL get_film_festival_data(${id});`;

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
// Gets all directors in DB
app.get("/director/all", function (req, res) {
  const get_directors = `CALL get_directors()`;

  con.query(get_directors, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
});

// Gets films for specified director
app.get("/director/:id/films", function (req, res) {
  const id = req.params.id;
  const get_info = `CALL get_film_for_director(${id});`;

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
  const get_info = `CALL get_director_data(${id});`;

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

//////////////////////// Genre ////////////////////////
// Gets all genres in DB
app.get("/genre/all", function (req, res) {
  const get_genre = `CALL get_genres()`;

  con.query(get_genre, (err, results) => {
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
  const get_count = `SELECT count_watched('${id}');`;
  
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
  const get_women_directed = `SELECT women_directed('${id}');`;
  
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
  const get_bechdol = `SELECT BCD_percent('${id}');`;
  
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
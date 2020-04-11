import React from 'react';
import Grid from '@material-ui/core/Grid';

import Navigation from "../../components/navigation/Navigation";
import { Link } from "react-router-dom";

// import { FilmImg } from "../../constants";
import Poster from "./little-women.jpg";

export default class FilmCard extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
      <div className="App">
        <Grid container spacing={3}>
          <Navigation activeTab={'explore'} />
          <Grid container
            xs={8}
            spacing={3}
            alignItems={'center'}>
            <Grid item xs ={4}>
              {/* <img src={FilmImg[this.props.film.image_path]} alt={[this.props.film.title]}/> */}
            </Grid>
            <Grid item xs={8}>
              <h1>Film Name Here</h1>
              <h2>Director</h2> <h2>Director name here</h2>
            </Grid>
            <Grid item xs={12}>
              <h2>Festivals played at:</h2> <h2>festival cards</h2>
            </Grid>
            <Grid item xs={12}>
              {/* Going to need to convert M/F */}
              <h2>Awards won:</h2> <h2>award cards</h2>
            </Grid>
            <Grid item xs={12}>
              <h2>Genre:</h2> <h2>genre here</h2>
            </Grid>
            <Grid item xs={12}>
              <h2>Watched:</h2> <h2>watched cards here</h2>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
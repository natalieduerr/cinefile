import React from 'react';
import Grid from '@material-ui/core/Grid';

import Navigation from "../../components/navigation/Navigation";
import { Link } from "react-router-dom";

import FestivalCard from "../../components/festival/FestivalCard";
import AwardCard from "../../components/award/AwardCard";


import Poster from "./little-women.jpg";

export default class FilmDetail extends React.Component {
  state = {
    filmDetails: [],
    director: '',
    festivals: [],
    awards: []
  };


  componentDidMount() {
    this.getFilmDetails();
    this.getDirector();
    this.getFestivals();
    this.getAwards()
  }

  getFilmDetails = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/info`)
      .then(response => response.json())
      // .then(response => console.log(response.data))
      .then(response => this.setState({ filmDetails: response.data[0] }))
      .catch(err => console.error(err))
  };

  getDirector = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/director`)
      .then(response => response.json())
      // .then(response => console.log(response.data[0].name))
      .then(response => this.setState({ director: response.data[0].name }))
      .catch(err => console.error(err))
  };

  getFestivals = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/festivals`)
      .then(response => response.json())
      .then(response => this.setState({ festivals: response.data }))
      .catch(err => console.error(err))
  };

  getAwards = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/awards`)
      .then(response => response.json())
      // .then(response => console.log(response.data))
      .then(response => this.setState({ awards: response.data }))
      .catch(err => console.error(err))
  };

  render() {
    const festivalList = this.state.festivals;
    const awardList = this.state.awards;

    console.log(this.state.filmDetails);

    function ShowFestival() {
      if (festivalList.length !== 0) {
        return <Grid item xs={12}>
          <h2>Festivals played at:</h2>
          {festivalList.map(festival => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </Grid>
      }
      else {
        return <Grid item xs={12}>
          <h2>Debuted at no film festivals.</h2>
        </Grid>
      }
    };

    function ShowAwards() {
      if (awardList.length !== 0) {
        return <Grid item xs={12}>
          <h2>Awards Won:</h2>
          {awardList.map(award => (
            <AwardCard key={award.id} award={award} />
          ))}
        </Grid>
      }
      else {
        return <Grid item xs={12}>
          <h2>Won no awards.</h2>
        </Grid>
      }
    };


    return (
      <div className="App">
        <Grid container spacing={3}>
          <Navigation activeTab={''} />
          <Grid container
            xs={8}
            spacing={3}
            alignItems={'center'}>
            <Grid item xs={4}>
              {/* <img src={FilmImg[this.props.film.image_path]} alt={[this.props.film.title]}/> */}
            </Grid>
            <Grid item xs={8}>
              <h1>{this.state.filmDetails.name}</h1>
              <p>Director: {this.state.director}</p>
              {/* Need to get */}
              <p>Genre: {this.state.filmDetails.genre}</p>
              <p>Runtime: {this.state.filmDetails.runtime} minutes</p>
              <p>Date Released: {this.state.filmDetails.date_released}</p>
              <p>Rating: {this.state.filmDetails.rating}</p>
            </Grid>
            <ShowFestival />
            <ShowAwards />
            <Grid item xs={12}>
              <h2>Watched:</h2> <h2>watched cards here</h2>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
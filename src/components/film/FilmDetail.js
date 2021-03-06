import React from 'react';
import Grid from '@material-ui/core/Grid';

import Navigation from "../../components/navigation/Navigation";
import { Redirect } from "react-router-dom";

import FestivalCard from "../../components/festival/FestivalCard";
import AwardCard from "../../components/award/AwardCard";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Button from '@material-ui/core/Button';

import WatchedCard from "../../components/film/WatchedCard"

import "./filmdetail.scss";

var dateFormat = require('dateformat');

export default class FilmDetail extends React.Component {
  state = {
    filmDetails: [],
    director: [],
    festivals: [],
    awards: [],
    redirect: false,
    watched: [],
    watchedDate: new Date().toISOString().split('T')[0],
    rating: null,
    success: false,
    failure: false,
    allFestivals: [],
    selectedFestival: [],
    addFestival: false,
    addAward: false
  };

  componentDidMount() {
    this.getFilmDetails();
    this.getDirector();
    this.getFestivals();
    this.getAwards();
    this.getWatched();
    this.getAllFestivals();
  }

  createWatched = () => {
    fetch(`http://localhost:5000/watched/create?user_id=${localStorage.getItem('username')}&name=${this.state.filmDetails.id}&date=${this.state.watchedDate}&rating=${this.state.rating}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ rating: '' });
        this.setState({ watchedDate: new Date().toISOString().split('T')[0] });
        this.getWatched();
        this.setState({ success: true });
        setTimeout(() => {
          this.setState({
            success: false
          });
        }, 5000);
      })
      .catch(err => {
        console.error(err);
        this.setState({ failure: true });
        setTimeout(() => {
          this.setState({
            failure: false
          });
        }, 7000);
      })
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createWatched();
  };

  getFilmDetails = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/info`)
      .then(response => response.json())
      .then(response => this.setState({ filmDetails: response.data[0][0] }))
      .catch(err => console.error(err))
  };

  getDirector = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/director`)
      .then(response => response.json())
      .then(response => this.setState({ director: response.data[0][0] }))
      .catch(err => console.error(err))
  };

  getFestivals = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/festivals`)
      .then(response => response.json())
      .then(response => this.setState({ festivals: response.data[0] }))
      .catch(err => console.error(err))
  };

  getAllFestivals = _ => {
    fetch(`http://localhost:5000/festival/all`)
      .then(response => response.json())
      .then(response => this.setState({ allFestivals: response.data[0] }))
      .catch(err => console.error(err))
  }

  getAwards = _ => {
    fetch(`http://localhost:5000/film/${this.props.location.state.filmId}/awards`)
      .then(response => response.json())
      .then(response => this.setState({ awards: response.data[0] }))
      .catch(err => console.error(err))
  };

  getWatched = _ => {
    fetch(`http://localhost:5000/film/watched/${localStorage.getItem('username')}/${this.props.location.state.filmId}/`)
      .then(response => response.json())
      .then(response => this.setState({ watched: response.data[0] }))
      .catch(err => console.error(err))
  };

  addFestivalForFilm = _ => {
    fetch(`http://localhost:5000/film/addfest/${this.props.location.state.filmId}/${this.state.selectedFestival}`)
      .then(response => response.json())
      .then(this.setState({ addFestival: false }))
      .then(this.getFestivals())
      .then(this.setState({ selectedFestival: [] }))
      .catch(err => console.error(err))
  };

  toAddFestival = event => {
    this.setState({ addFestival: true });
  };

  cancel = event => {
    this.setState({ addFestival: false });
  };

  myCallback = (dataFromChild) => {
    if (dataFromChild === true) {
      this.getWatched()
    }
  };


  render() {
    const festivalList = this.state.festivals;
    const awardList = this.state.awards;
    const watched = this.state.watched;
    const user = localStorage.getItem('username');
    const self = this;

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

    function ShowWatched() {
      if (user === '') {
        return <Grid item xs={12}>
          <h4>Log-in to see watched films</h4>
        </Grid>
      }
      else if (watched.length !== 0) {
        return <Grid item xs={12}>
          {self.state.watched.map(watched => (
            <WatchedCard callbackFromParent={self.myCallback} key={watched.id} watched={watched} />
          ))}
        </Grid>
      }
      else {
        return <Grid item xs={12}>
          <h4>You haven't seen this film</h4>
        </Grid>
      }
    };

    if (this.state.redirect) {
      return <Redirect
        to={{
          pathname: "/director/" + this.state.director.id,
          state: { directorId: this.state.director.id }
        }} />
    }
    else {
      return (
        <div className="App">
          {this.state.success ? <div className="success-pop-up">Successfully added!</div> : (null)}
          {this.state.failure ? <div className="fail-pop-up">Error! Something went wrong, this film was not updated</div> : (null)}
          <Grid container spacing={3}>
            <Navigation activeTab={''} />
            <Grid container
              xs={8}
              spacing={3}
              alignItems={'center'}
              className={"film-detail"}>
              <Grid container xs={12} spacing={3} alignItems={"flex-start"}>
                <Grid item xs={4}>
                  <img className="poster" src={`${this.state.filmDetails.photo}`} alt={[this.state.filmDetails.name]} />
                </Grid>
                <Grid item xs={8}>
                  <h1>{this.state.filmDetails.name}</h1>
                  <p><b>Director:</b> <span className="director-link" onClick={() => this.setState({ redirect: true })}>{this.state.director.name}</span></p>
                  <p><b>Genre:</b> {this.state.filmDetails.genre}</p>
                  <p><b>Runtime:</b> {this.state.filmDetails.runtime} minutes</p>
                  <p><b>Date Released:</b> {dateFormat(this.state.filmDetails.date_released, "longDate")}</p>
                  <p><b>Rating:</b> {this.state.filmDetails.rating}</p>
                </Grid>
              </Grid>

              <ShowFestival />
              {this.state.addFestival ?
                <Grid container xs={12} spacing={3} alignItems={"center"}>
                  <Grid item xs={9}>
                    <TextField variant="filled"
                      required
                      select
                      fullWidth
                      label="Film Festivals"
                      value={this.state.selectedFestival}
                      onChange={this.handleChange('selectedFestival')}
                    >
                      {this.state.allFestivals.map((allFestivals) => (
                        <MenuItem key={allFestivals.id} value={allFestivals.id}>
                          {allFestivals.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={3}>
                    {/* <Button color={'secondary'} variant={'contained'}  onClick={this.addFestivalToFilm()} disabled={(this.state.selectedFestival.length === 0)}>Save</Button> */}
                    <Button color={'secondary'} variant={'contained'} onClick={this.addFestivalForFilm} disabled={(this.state.selectedFestival.length === 0)}>Save</Button>
                    <Button onClick={this.cancel} className={'cancel'}>Cancel</Button>
                  </Grid>
                </Grid> : <Button color={'secondary'} onClick={this.toAddFestival} > + Add Festival Debut</Button>}
              <ShowAwards />
              <Grid item xs={12}>
                <h2>You watched:</h2>
              </Grid>
              <ShowWatched />
              <Grid item xs={12}>
                <h2>Add new watch:</h2>
              </Grid>
              {user !== '' ? (
                <Grid container xs={12} spacing={3} className={"new-watch"}>
                  <Grid item xs={4}>
                    <TextField variant="filled"
                      required
                      type={'date'}
                      fullWidth
                      label="Date Watched"
                      value={this.state.watchedDate}
                      onChange={this.handleChange('watchedDate')}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField variant="filled"
                      select
                      fullWidth
                      label="Your rating:"
                      value={this.state.rating}
                      onChange={this.handleChange('rating')}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <Button color={'primary'} variant={'contained'} type={'button'}
                      onClick={this.handleSubmit}>+ Add Watched</Button>
                  </Grid>
                </Grid>

              ) : (
                  <Grid item xs={12}>
                    <h4>Log-in to add your rating</h4>
                  </Grid>
                )
              }
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
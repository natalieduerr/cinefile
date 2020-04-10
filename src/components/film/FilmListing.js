import React from 'react';

import FilmCard from './FilmCard.js'

import Grid from '@material-ui/core/Grid';



export default class FilmListing extends React.Component {

  state = {
    films: []
  };

  componentDidMount() {
    if (this.props.view === 'all') {
      this.getFilms();
    }
  }

  getFilms = _ => {
    fetch(`http://localhost:5000/films`)
        .then(response => response.json())
        .then(response => this.setState({films: response.data}))
        .catch(err => console.error(err))
};

  render() {
    return (
      <div className={"films"}>
          {this.state.films.map(film => (
          <Grid item key={film.id}>
            <FilmCard film={film}/>
          </Grid>
        ))}
      </div>
    );
  }
}
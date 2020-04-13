import React from 'react';
import Grid from '@material-ui/core/Grid';

import FilmCard from '../../components/film/FilmCard.js'

import Navigation from "../../components/navigation/Navigation";

var dateFormat = require('dateformat');

export default class Dashboard extends React.Component {
    state = {
        films: [],
        director: []
    };

    componentDidMount() {
        this.getFilms();
        this.getDirector();
    }

    getFilms = _ => {
        fetch(`http://localhost:5000/director/${this.props.location.state.directorId}/films`)
            .then(response => response.json())
            .then(response => this.setState({ films: response.data }))
            .catch(err => console.error(err))
    };

    getDirector = _ => {
        fetch(`http://localhost:5000/director/${this.props.location.state.directorId}/director`)
            .then(response => response.json())
            .then(response => this.setState({ director: response.data[0] }))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={''} />
                    <Grid container
                        xs={8}
                        spacing={3}
                        alignItems={'center'}>
                        <Grid item xs={12}>
                            <h1>{this.state.director.name}</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <p><b>Birthdate:</b> {dateFormat(this.state.director.birthdate, "longDate")}</p>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Going to need to convert M/F */}
                            <p><b>Gender:</b> {this.state.director.gender} </p>
                        </Grid>
                        <Grid item xs={12}>
                            <p><b>Race:</b> {this.state.director.race} </p>
                        </Grid>
                        {this.state.films.map(film => (
                            <FilmCard key={film.id} film={film} />
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

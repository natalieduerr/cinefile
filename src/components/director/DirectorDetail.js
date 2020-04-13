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
            .then(response => this.setState({ films: response.data[0] }))
            .catch(err => console.error(err))
    };

    getDirector = _ => {
        fetch(`http://localhost:5000/director/${this.props.location.state.directorId}/director`)
            .then(response => response.json())
            .then(response => this.setState({ director: response.data[0][0] }))
            .catch(err => console.error(err))
    };

    render() {
        var gender;
        if (this.state.director.gender === "M") {
            gender = "Man";
        }
        else if (this.state.director.gender === "F") {
            gender = "Woman"
        }
        else {
            gender = this.state.director.gender;
        }

        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={''} />
                    <Grid container
                        xs={8}
                        spacing={3}>
                        <Grid item xs={12}>
                            <br></br>
                            <h4>Films directed by</h4>
                            <h1>{this.state.director.name}</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <p><b>Birthdate:</b> {dateFormat(this.state.director.birthdate, "longDate")}</p>
                            <p><b>Gender:</b> {gender}</p>
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

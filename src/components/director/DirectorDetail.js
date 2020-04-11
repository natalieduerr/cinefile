import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import FilmCard from '../../components/film/FilmCard.js'

import Navigation from "../../components/navigation/Navigation";

export default class Dashboard extends React.Component {
    state = {
        films: []
    };

    componentDidMount() {
        this.getFilm(this.props.id);
    }

    getFilms = id => {
        fetch('http://localhost:5000/sitters')
            // then filter
            .then(response => response.json())
            .then(response => this.setState({ sitters: response.data }))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={'explore'} />
                    <Grid container
                        xs={8}
                        spacing={3}
                        alignItems={'center'}>
                        <Grid item xs={12}>
                            <h1>Director's Name here</h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h2>Birthdate:</h2> <h2>dob here</h2>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Going to need to convert M/F */}
                            <h2>Gender:</h2> <h2>gender here</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <h2>Race:</h2> <h2>race here</h2>
                        </Grid>
                        <Grid item xs={12}>
                            {this.state.films.map(film => (
                                <FilmCard film={film}/>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

import FilmCard from "../../components/film/FilmCard";

import "./explore.scss";

export default class Dashboard extends React.Component {
    state = {
        films: [],
    };

    componentDidMount() {
        this.getFilms();
    }

    getFilms = _ => {
        fetch('http://localhost:5000/film')
            .then(response => response.json())
            .then(response => this.setState({ films: response.data[0] }))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={'explore'} />
                    <Grid className={"explore"}
                        container
                        item
                        xs={8}
                        spacing={3}>
                        <Grid item
                            xs={12}>
                            <h1>All Films</h1>
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

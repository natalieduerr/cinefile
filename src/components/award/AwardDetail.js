import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

import FilmCard from "../../components/film/FilmCard";

export default class Dashboard extends React.Component {
    state = {
        films: [],
        award: '',
    };

    componentDidMount() {
        this.getFilms();
        this.getAward();
    }

    getFilms = _ => {
        fetch(`http://localhost:5000/award/${this.props.location.state.awardId}/films`)
            .then(response => response.json())
            .then(response => this.setState({ films: response.data }))
            .catch(err => console.error(err))
    };

    getAward = _ => {
        fetch(`http://localhost:5000/award/${this.props.location.state.awardId}/award`)
            .then(response => response.json())
            .then(response => this.setState({ award: response.data[0].name }))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={''} />
                    <Grid className={"explore"}
                        container
                        item
                        xs={8}
                        spacing={3}>
                        <Grid item
                            xs={12}>
                            <h1>Films that won the {this.state.award}</h1>
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

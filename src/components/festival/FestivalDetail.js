import React from 'react';
import Grid from '@material-ui/core/Grid';

import Navigation from "../../components/navigation/Navigation";

import FilmCard from "../../components/film/FilmCard";

export default class Dashboard extends React.Component {
    state = {
        films: [],
        festival: '',
    };

    componentDidMount() {
        this.getFilms();
        this.getFestival();
    }

    getFilms = _ => {
        fetch(`http://localhost:5000/festival/${this.props.location.state.festivalId}/films`)
            .then(response => response.json())
            .then(response => this.setState({ films: response.data }))
            .catch(err => console.error(err))
    };

    getFestival = _ => {
        fetch(`http://localhost:5000/festival/${this.props.location.state.festivalId}/festival`)
            .then(response => response.json())
            .then(response => this.setState({ festival: response.data[0] }))
            .catch(err => console.error(err))
    };

    render() {
        console.log(this.state.festival);
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
                            <h1>Films that debuted at {this.state.festival.name}</h1>
                            <p>Located in: {this.state.festival.location}</p>
                            <p>Started in: {this.state.festival.year_started}</p>
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

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import FilmCard from "../../components/film/FilmCard";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={'explore'} />
                    <Grid container
                        item
                        xs={9}
                        spacing={3}>
                        {/* <Button variant="contained" color="primary">
                        Hello World
                      </Button> */}
                        <FilmCard></FilmCard>
                        <FilmCard></FilmCard>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

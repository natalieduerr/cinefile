import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import FilmListing from "../../components/film/FilmListing";

import FilmCard from "../../components/film/FilmCard";


import "./explore.scss";

export default class Dashboard extends React.Component {
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
                            <FilmCard></FilmCard>
                        </Grid>
                        <FilmListing view={'all'}></FilmListing>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
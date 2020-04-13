import React from 'react';

import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Grid from '@material-ui/core/Grid';

import { Redirect } from "react-router-dom";

import './filmcard.scss'

var dateFormat = require('dateformat');

export default class FilmCard extends React.Component {
  state = {
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      return <Redirect
      to={{
        pathname: "/film/" + this.props.film.id,
        state: {filmId: this.props.film.id}
      }} />
    }
    else {
      return (
        <Grid item
          xs={6}
          md={3}>
          <Card className={'film-card'}>
            <CardActionArea className={'film-card--action'} onClick={() => this.setState({redirect: true})}>
              <CardMedia className={'film-card--poster'}>
                <img src={`${this.props.film.photo}`} alt={this.props.film.name}></img>
              </CardMedia>
              <CardContent className={'film-card--info'}>
                <h2>{this.props.film.name}</h2>
                <h3> {dateFormat(this.props.film.date_released, "longDate")}</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
  }
}
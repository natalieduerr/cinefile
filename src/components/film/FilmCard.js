import React from 'react';

// import './FilmCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

// import {filmPoster} from "../../constants";
import Poster from "./little-women.jpg";
import './filmcard.scss'

export default class FilmCard extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
      <Grid item
        xs={4}>
        {/* <Link to={"/film/" + this.props.film.id}> */}
          <Card className={'film-card'}>
            <CardActionArea className={'film-card--action'}>
              <CardMedia className={'film-card--poster'}>
                <img src={Poster} alt="Little Women"></img>
                {/* {this.props.film.title}></img> */}
              </CardMedia>
              <CardContent className={'film-card--info'}>
                {/* <h2>{this.props.film.title}</h2> */}
                <h2>Little Women</h2>
                {/* do if statement in case no year */}
                {/* <h3>{this.props.film.year}</h3> */}
                <h3>2019</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        {/* </Link> */}
      </Grid>
    );
  }
}
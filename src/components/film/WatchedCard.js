import React from 'react';

import Grid from '@material-ui/core/Grid';
import "./watchedcard.scss";

var dateFormat = require('dateformat');

export default class WatchedCard extends React.Component {

  render() {
    return (
      <Grid container className="watched-card">
        <Grid container xs={12}>
          <Grid item xs={6}><h4>{this.props.watched.name}</h4></Grid>
          {/* Making rating none if null */}
          <Grid item xs={6}>Rating: {this.props.watched.rating}</Grid>
        </Grid>
        <Grid container>
          <Grid item>Date Watched: {dateFormat(this.props.watched.date, "longDate")}</Grid>
        </Grid>
      </Grid>
    );
  }
}
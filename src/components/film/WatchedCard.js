import React from 'react';

import Grid from '@material-ui/core/Grid';

export default class WatchedCard extends React.Component {

  render() {
    return (
      <Grid container className="watched-card">
        <Grid container xs={12}>
          <Grid item xs={3}>Film Title</Grid>
          <Grid item xs={3}>2019</Grid>
          <Grid item xs={3}>Director Name</Grid>
          <Grid item xs={3}>Rating: 4</Grid>
        </Grid>
        <Grid container>
          <Grid item> Date Watched: MM/DD/YYYY</Grid>
        </Grid>
      </Grid>
    );
  }
}
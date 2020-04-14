import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

import "./watchedcard.scss";

var dateFormat = require('dateformat');

export default class WatchedCard extends React.Component {
  state = {
    mode: "view",
    id: this.props.watched.id,
    rating: this.props.watched.rating,
    watchedDate: (dateFormat(this.props.watched.date, "isoDate")),
    update: false,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toEdit = event => {
    this.setState({ mode: "edit" });
  };

  toView = event => {
    this.setState({ mode: "view" })
  };

  toDelete = event => {
    this.setState({ mode: "delete" })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.updateWatched();
  };

  handleDelete = event => {
    event.preventDefault();
    this.deleteWatched();
  }

  updateWatched = () => {
    fetch(`http://localhost:5000/watched/update/${this.state.id}/${this.state.watchedDate}/${this.state.rating}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ mode: "view" });
        this.setState({ update: true });
        this.props.callbackFromParent(this.state.update);
        this.setState({ update: false });
        this.props.callbackFromParent(this.state.update);
      })
      .catch(err => console.error(err))
  };

  deleteWatched = () => {
    fetch(`http://localhost:5000/watched/delete/${this.state.id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ mode: "view" });
        this.setState({ update: true });
        this.props.callbackFromParent(this.state.update);
        this.setState({ update: false });
        this.props.callbackFromParent(this.state.update);
      })
      .catch(err => console.error(err))
  };

  render() {
    if (this.state.mode === "view") {
      return (
        <Grid container className="watched-card">
          <Grid container xs={8}>
            <Grid item xs={6}><h4>{this.props.watched.name}</h4></Grid>
            {(this.props.watched.rating === null) ? <Grid item xs={6}>No rating</Grid> : <Grid item xs={6}>Rating: {this.props.watched.rating}</Grid>}
            <Grid item xs={12}>Date Watched: {dateFormat(this.props.watched.date, "longDate")}</Grid>
          </Grid>
          <Grid container xs={4} className="buttons" justify={"flex-end"}>
            <Button color="primary" onClick={this.toEdit}>Edit</Button>
            <Button color="secondary" onClick={this.toDelete} >Delete</Button>
          </Grid>
        </Grid>
      );
    }
    else if (this.state.mode === "edit") {
      return (
        <Grid container className="watched-card blue">
          <Grid container xs={8}>
            <Grid item xs={4}><h4>{this.props.watched.name}</h4></Grid>
            <Grid item container direction={"row"} spacing={3} xs={8}>
              <Grid item xs={6}>
                <TextField variant="filled"
                  select
                  fullWidth
                  label="Your rating:"
                  value={this.state.rating}
                  onChange={this.handleChange('rating')}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField variant="filled"
                  required
                  type={'date'}
                  fullWidth
                  label="Date Watched"
                  value={this.state.watchedDate}
                  onChange={this.handleChange('watchedDate')}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container xs={4} className="buttons" justify={"flex-end"}>
            <Button color="primary" onClick={this.handleSubmit}>Save</Button>
            <Button color="secondary" onClick={this.toView}>Cancel</Button>
          </Grid>
        </Grid>
      );
    }
    else if (this.state.mode === "delete") {
      return (
        <Grid container className="watched-card red">
          <Grid container xs={8}>
            <Grid item xs={6}><h4>{this.props.watched.name}</h4></Grid>
            <Grid item xs={6}>Rating: {this.props.watched.rating}</Grid>
            <Grid item xs={12}>Date Watched: {dateFormat(this.props.watched.date, "longDate")}</Grid>
          </Grid>
          <Grid container xs={4} className="buttons" justify={"flex-end"}>
            <Button color="primary" onClick={this.handleDelete}>Confirm Delete</Button>
            <Button color="secondary" onClick={this.toView}>Cancel</Button>
          </Grid>
        </Grid>
      );
    }
  }
}
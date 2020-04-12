import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Redirect } from "react-router-dom";

export default class FestivalCard extends React.Component {
    state = {
        redirect: false
    };

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: "/festival/" + this.props.festival.id,
                    state: { festivalId: this.props.festival.id }
                }} />
        }
        else {
            return (
                <Grid container className="festival-card">
                    <Grid item xs={12} onClick={() => this.setState({redirect: true})}>
                        <h4>{this.props.festival.name}</h4>
                    </Grid>
                </Grid>
            );
        }
    }
}
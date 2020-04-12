import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Redirect } from "react-router-dom";

export default class AwardCard extends React.Component {
    state = {
        redirect: false
    };

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: "/award/" + this.props.award.id,
                    state: { awardId: this.props.award.id }
                }} />
        }
        else {
            return (
                <Grid container className="award-card">
                    <Grid item xs={12} onClick={() => this.setState({redirect: true})}>
                        <h4>{this.props.award.name}, {this.props.award.year}</h4>
                    </Grid>
                </Grid>
            );
        }
    }
}
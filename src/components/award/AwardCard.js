import React from 'react';
import { Redirect } from "react-router-dom";

import Grid from '@material-ui/core/Grid';

import "./awardcard.scss";

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
                        <p><b>{this.props.award.name}</b>, {this.props.award.year}</p>
                    </Grid>
                </Grid>
            );
        }
    }
}
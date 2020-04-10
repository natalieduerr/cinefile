import React from 'react';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './account.scss';

import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";


export default class Account extends React.Component {
    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={'account'} />
                    <Grid className={'account'}
                        container
                        item
                        xs={8}
                        spacing={3}>
                        <Grid container
                            xs={12}
                            spacing={3}
                            alignItems={'center'}>
                            <Grid item xs={8}>
                                <h1>Hi USERNAME</h1>
                            </Grid>
                            <Grid item xs={4} spacing={3}>
                                <Button variant="contained" color="primary">
                                    Delete account
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid container xs={12}>
                            <Grid item>
                                <h2>Watched films</h2>
                                <p>listing of watched films</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
import React from 'react';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './account.scss';

import { Redirect } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

import WatchedCard from "../../components/film/WatchedCard"

import CanvasJSReact from '../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default class Account extends React.Component {
    state = {
        redirect: false
    };

    backHome() {
        localStorage.setItem('username', '');
    };

    render() {
        console.log(localStorage.getItem('username'));

        // localStorage.setItem('username', '');

        // console.log(localStorage.getItem('username'));

        if ((localStorage.getItem('username') === "")) {
            this.setState({ redirect: true });
        };

        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: "/",
                }} />
        }
        else {
            const womenDirector = {
                animationEnabled: true,
                title: {
                    fontWeight: "bold",
                    fontSize: 18,
                    text: "Watched films directed by women"
                },
                data: [{
                    indexLabelFontFamily: 'Work Sans',
                    type: "pie",
                    dataPoints: [
                        { y: 100, label: "By women", color: "#6157A6" },
                        { y: 64, label: "Not by women", color: "#40e0d0" }
                    ]
                }]
            }

            const bechdolTest = {
                animationEnabled: true,
                title: {
                    fontWeight: "bold",
                    fontSize: 18,
                    text: "Watched films that pass the Bechdol Test"
                },
                data: [{
                    indexLabelFontFamily: 'Work Sans',
                    type: "pie",
                    dataPoints: [
                        { y: 100, label: "Pass", color: "#40e0d0" },
                        { y: 64, label: "Does not pass", color: "#FEEA19" }
                    ]
                }]
            }

            const ratings = {
                animationEnabled: true,
                title: {
                    fontWeight: "bold",
                    fontSize: 18,
                    text: "Your Ratings"
                },
                axisX: {
                    labelFontFamily: 'Work Sans'
                },
                axisY: {
                    labelFontFamily: 'Work Sans'
                },
                data: [{
                    indexLabelFontFamily: 'Work Sans',
                    type: "column",
                    dataPoints: [
                        { y: 100, label: "1", color: "#6157A6" },
                        { y: 64, label: "2", color: "#6157A6" },
                        { y: 100, label: "3", color: "#6157A6" },
                        { y: 64, label: "4", color: "#6157A6" },
                        { y: 100, label: "5", color: "#6157A6" }
                    ]
                }]
            }

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
                                    <h1>Account Details</h1>
                                </Grid>
                                <Grid item xs={4} spacing={3}>
                                    <Button variant="contained" color="primary" onClick={() => { this.backHome(); this.setState({redirect: true})}}>
                                        Log-out
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <h2>Data Visualizations</h2>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <CanvasJSChart options={womenDirector} />
                                </Grid>
                                <Grid item xs={4}>
                                    <CanvasJSChart options={bechdolTest} />
                                </Grid>
                                <Grid item xs={4}>
                                    <CanvasJSChart options={ratings} />
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <h2 className="watched">Watched films</h2>
                                <WatchedCard></WatchedCard>
                            </Grid>
                            <Button variant="contained" color="primary">
                                Delete account
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}
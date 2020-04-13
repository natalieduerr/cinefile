import React from 'react';

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
        watcheds: [],
        redirect: false,
        countWatched: '',
        women: '',
        bechdol: '',
        rating1: '',
        rating2: '',
        rating3: '',
        rating4: '',
        rating5: '',
    };

    backHome() {
        localStorage.setItem('username', '');
    };

    getWatched = _ => {
        fetch(`http://localhost:5000/watched/${localStorage.getItem('username')}`)
            .then(response => response.json())
            .then(response => this.setState({ watcheds: response.data[0] }))
            .catch(err => console.error(err))
    };

    getCountWatched = _ => {
        fetch(`http://localhost:5000/watched/${localStorage.getItem('username')}/count`)
            .then(response => response.json())
            .then(response => this.setState({ countWatched: response.data[0]["count_watched('" + localStorage.getItem('username') + "')"] }))
            .catch(err => console.error(err))
    };

    getWomenDirected = _ => {
        fetch(`http://localhost:5000/watched/${localStorage.getItem('username')}/women`)
            .then(response => response.json())
            .then(response => this.setState({ women: response.data[0]["women_directed('" + localStorage.getItem('username') + "')"] }))
            .catch(err => console.error(err))
    };

    getBechdol = _ => {
        fetch(`http://localhost:5000/watched/${localStorage.getItem('username')}/bechdol`)
            .then(response => response.json())
            .then(response => this.setState({ bechdol: response.data[0]["BCD_percent('" + localStorage.getItem('username') + "')"] }))
            .catch(err => console.error(err))
    };

    get = name => {
        fetch(`http://localhost:5000/watched/${localStorage.getItem('username')}/${name}`)
            .then(response => response.json())
            .then(response => this.setState({ ["rating" + [name]]: response.data[0]["rating_percentage('" + localStorage.getItem('username') + "', " + name + ")"] }))
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.getWatched();
        this.getWomenDirected();
        this.getCountWatched();
        this.getBechdol();
        this.get(1);
        this.get(2);
        this.get(3);
        this.get(4);
        this.get(5);
    }

    render() {
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
                        { y: [this.state.women], label: "By women", color: "#6157A6" },
                        { y: [this.state.countWatched] - [this.state.women], label: "Not by women", color: "#40e0d0" }
                    ]
                }]
            }

            const bechdolTest = {
                animationEnabled: true,
                title: {
                    fontWeight: "bold",
                    fontSize: 18,
                    text: "Watched films that pass the Bechdel Test"
                },
                data: [{
                    indexLabelFontFamily: 'Work Sans',
                    type: "pie",
                    dataPoints: [
                        { y: [this.state.bechdol], label: "Pass", color: "#40e0d0" },
                        { y: [this.state.countWatched] - [this.state.bechdol], label: "Does not pass", color: "#FEEA19" }
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
                        { y: this.state.rating1, label: "1", color: "#6157A6" },
                        { y: this.state.rating2, label: "2", color: "#6157A6" },
                        { y: this.state.rating3, label: "3", color: "#6157A6" },
                        { y: this.state.rating4, label: "4", color: "#6157A6" },
                        { y: this.state.rating5, label: "5", color: "#6157A6" }
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
                                <Grid container justify={"flex-end"} xs={4} spacing={3}>
                                    <Button variant="contained" color="primary" onClick={() => { this.backHome(); this.setState({ redirect: true }) }}>
                                        Log-out
                                    </Button>
                                </Grid>
                            </Grid>
                            <h2>Data Visualizations</h2>
                            {(this.state.watcheds.length !== 0) ?
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
                                </Grid> :
                                <Grid container xs={12}>
                                    <Grid item xs={12}><h4>Watch some films and we'll analyze your data!</h4></Grid>
                                </Grid>
                            }
                            {(this.state.watcheds.length !== 0) ?
                                <Grid container xs={12}>
                                    <h2 className="watched">Watched films</h2>
                                    {this.state.watcheds.map(watched => (
                                        <WatchedCard key={watched.id} watched={watched} />
                                    ))}
                                </Grid> :
                                <Grid container xs={12}>
                                    <Grid item xs={12}><h2 className="watched">Watched films</h2></Grid>
                                    <Grid item xs={12}><h4>You haven't watched any films yet!</h4></Grid>
                                </Grid>
                            }
                            <Button className="delete" variant="contained" color="primary">
                                Delete account
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}
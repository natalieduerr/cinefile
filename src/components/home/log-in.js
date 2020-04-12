import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

// import * as constants from "../../constants";

import "./log-in.scss";

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            redirect: false,
        };
    }

    // //   Creates User in database
    // createUser = () => {
    //     fetch(`http://localhost:5000/film/create?owner_id=${user_id}&title=${this.state.title}&start=${this.state.start}&end=${this.state.end}&pet_id=${this.state.pet_id}&wage=${this.state.wage}&description=${this.state.description}`)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             this.setState({ redirect: true });
    //         })
    //         .catch(err => console.error(err))
    // };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect push to= '/explore' />  
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
        if (this.state.username.length > 0) {
            // createUser();
            localStorage.setItem('username', this.state.username);
            // console.log(localStorage.getItem('username'));
            this.setState({
                redirect: true
            })
        }
        else {
            event.preventDefault();
        }
    };

    render() {
        const isEnabled = this.state.username.length > 0;

        return (
            <div className="App">
                <Grid container
                    xs={12}
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="log-in">
                    <Grid item>
                        <img src={'/imgs/logo.png'} alt={'logo'} width={200} />
                    </Grid>
                    <Grid item xs={6} className="intro">
                        <p>Welcome to Cinefile! Enter your name or username to begin tracking films. If you've already made a profile, you can access it by entering the same name you used last time!</p>
                    </Grid>
                    <Grid item>
                        <form className={"form"}>
                            <TextField variant="filled"
                                fullWidth
                                label="Username"
                                type={'text'}
                                color={'secondary'}
                                value={this.state.value}
                                onChange={this.handleChange('username')}
                            />
                        </form>
                    </Grid>
                    <Grid item>
                        {this.renderRedirect()} 
                        <Button disabled={!isEnabled} color={'secondary'} variant="contained" onClick={this.handleSubmit}>Log-in</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


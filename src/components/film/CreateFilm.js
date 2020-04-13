import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Navigation from "../../components/navigation/Navigation";
import "./createfilm.scss";

const ratings = [
    {
        value: 'G',
        label: 'G - General Audiences',
    },
    {
        value: 'PG',
        label: 'PG - Parental Guidance Suggested',
    },
    {
        value: 'PG-13',
        label: 'PG-13 - Parents Strongly Encouraged',
    },
    {
        value: 'R',
        label: 'R - Restricted',
    },
    {
        value: 'NC-17',
        label: 'NC-17 - Adults Only',
    },
];

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            film: '',
            director: [],
            released: new Date().toISOString().split('T')[0],
            rating: '',
            genre: [],
            runtime: '',
            bechdol: false,
        };
    }

    // componentDidMount() {
    //     this.getDirectors();
    //     this.getGenres();
    // }

    // getDirectors = _ => {
    //     fetch(`http://localhost:5000/users/${user_id}/director`)
    //         .then(response => response.json())
    //         .then(response => this.setState({ director: response.data }))
    //         .catch(err => console.error(err))
    // };

    // getGenres = _ => {
    //     fetch(`http://localhost:5000/users/${user_id}/genres`)
    //         .then(response => response.json())
    //         .then(response => this.setState({ genres: response.data }))
    //         .catch(err => console.error(err))
    // };

    // Creates film in database
    // createFilm = () => {
    //     fetch(`http://localhost:5000/film/create?owner_id=${user_id}&title=${this.state.title}&start=${this.state.start}&end=${this.state.end}&pet_id=${this.state.pet_id}&wage=${this.state.wage}&description=${this.state.description}`)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             this.setState({ redirect: true });
    //         })
    //         .catch(err => console.error(err))
    // };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.createFilm();
    };

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Navigation activeTab={'add'} />
                    <Grid container
                        item
                        xs={8}
                        spacing={3}>
                        <Grid item xs={12}>
                            <h1>Add a film</h1>
                            <p>This film only saves to your computer!</p>
                        </Grid>
                        <Grid item xs={12}>
                            <form className={"form"}>
                                <TextField variant="filled"
                                    fullWidth
                                    required
                                    label="Film Title"
                                    type={'text'}
                                    value={this.state.value}
                                    onChange={this.handleChange('film')}
                                />
                                <TextField variant="filled"
                                    required
                                    type={'date'}
                                    fullWidth
                                    label="Date Released"
                                    value={this.state.value}
                                    onChange={this.handleChange('released')}
                                />
                                <TextField variant="filled"
                                    required
                                    select
                                    fullWidth
                                    label="Select a rating for this film"
                                    value={this.state.rating}
                                    onChange={this.handleChange('rating')}
                                >
                                    {ratings.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField variant="filled"
                                    required
                                    type={'number'}
                                    fullWidth
                                    label="Runtime in minutes"
                                    value={this.state.value}
                                    onChange={this.handleChange('runtime')}
                                />
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Does this film pass the Bechdol test? <a href = "">Learn more about the Bechdol test.</a></FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox  value={this.state.bechdol} onChange={this.handleChange('bechdol')} name="bechdol" />}
                                            label="Yes"
                                        />
                                    </FormGroup>
                                </FormControl>
                                <Button color={'primary'} variant={'contained'} type={'button'}
                                            onClick={this.handleSubmit}>Submit</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

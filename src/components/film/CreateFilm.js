import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
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
            film: "",
            selectedDirector: [],
            selectedGenre: [],
            director: [],
            released: new Date().toISOString().split('T')[0],
            rating: null,
            genre: [],
            runtime: "",
            bechdol: false,
            imagePath: "",
            success: false,
            failure: false,
        };
    }

    getDirectors = _ => {
        fetch(`http://localhost:5000/director/all`)
            .then(response => response.json())
            .then(response => this.setState({ director: response.data[0] }))
            .catch(err => console.error(err))
    };

    getGenres = _ => {
        fetch(`http://localhost:5000/genre/all`)
            .then(response => response.json())
            .then(response => this.setState({ genre: response.data[0] }))
            .catch(err => console.error(err))
    };

    componentDidMount() {
        this.getDirectors();
        this.getGenres();
    }

    createFilm = () => {
        fetch(`http://localhost:5000/film/create/${this.state.film}/${this.state.released}/${this.state.bechdol}/${this.state.runtime}/${this.state.rating}/${this.state.imagePath}/${this.state.selectedDirector}/${this.state.selectedGenre}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({ film: "" });
                this.setState({ selectedDirector: [] });
                this.setState({ released: new Date().toISOString().split('T')[0] });
                this.setState({ rating: null });
                this.setState({ runtime: "" });
                this.setState({ selectedGenre: [] });
                this.setState({ bechdol: false });
                this.setState({ imagePath: "" });
                this.setState({ success: true });
                setTimeout(() => {
                    this.setState({
                        success: false
                    });
                }, 5000);
            })
            .catch(err => {
                console.error(err);
                this.setState({ failure: true });
                setTimeout(() => {
                    this.setState({
                        failure: false
                    });
                }, 7000);
            })
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.createFilm();
    };

    render() {
        const isEnabled = (this.state.film !== "") && (this.state.selectedDirector !== []) && (this.state.rating !== null || this.state.rating !== "") && (this.state.runtime !== "") && (this.state.selectedGenre !== []) && (this.state.imagePath !== "");

        return (
            <div className="App">
                {this.state.success ? <div className="success-pop-up">Successfully added!</div> : (null)}
                {this.state.failure ? <div className="fail-pop-up">Error! Check the information you are entering is correct and nothing is empty</div> : (null)}
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
                                    value={this.state.film}
                                    onChange={this.handleChange('film')}
                                />
                                <TextField variant="filled"
                                    required
                                    select
                                    fullWidth
                                    label="Select a director"
                                    value={this.state.selectedDirector}
                                    onChange={this.handleChange('selectedDirector')}
                                >
                                    {this.state.director.map((director) => (
                                        <MenuItem key={director.id} value={director.id}>
                                            {director.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField variant="filled"
                                    required
                                    type={'date'}
                                    fullWidth
                                    label="Date Released"
                                    value={this.state.released}
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
                                    value={this.state.runtime}
                                    onChange={this.handleChange('runtime')}
                                />
                                <TextField variant="filled"
                                    required
                                    select
                                    fullWidth
                                    label="Select a genre"
                                    value={this.state.selectedGenre}
                                    onChange={this.handleChange('selectedGenre')}
                                >
                                    {this.state.genre.map((genre) => (
                                        <MenuItem key={genre.id} value={genre.id}>
                                            {genre.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <FormControl component="fieldset">
                                    <p>Does this film pass the Bechdel test? <a target="_blank" href="https://bechdeltest.com/">Learn more about the Bechdel test.</a></p>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox value={!this.state.bechdol} onChange={this.handleChange('bechdol')} name="bechdol" />}
                                            label="Yes"
                                        />
                                    </FormGroup>
                                </FormControl>
                                <br></br>
                                <p>The image needs to be placed inside the React project. Navigate to cinefile > public > imgs and place image there. Below, leave the name (including file extension).</p>
                                <p>Example: little-women.jpg</p>
                                <TextField variant="filled"
                                    fullWidth
                                    required
                                    label="Image path"
                                    type={'text'}
                                    value={this.state.imagePath}
                                    onChange={this.handleChange('imagePath')}
                                />
                                <Button disabled={!isEnabled} color={'primary'} variant={'contained'} type={'button'}
                                    onClick={this.handleSubmit}>Submit</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

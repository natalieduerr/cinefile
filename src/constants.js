import React from 'react';

export default class FilmImg extends React.Component {
    state = {
        filmsImgs: []
    };
    
    componentDidMount() {
        this.getFilmImgs();
    }
    
    getFilmImgs = _ => {
        fetch('http://localhost:5000/film/img_src')
            .then(response => response.json())
            .then(response => this.setState({ filmsImgs: response.data }))
            .catch(err => console.error(err))
    };
    
}
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import LogIn from "./components/home/log-in";
import Explore from "./components/explore/Explore";
import Account from "./components/account/Account";
import CreateFilm from "./components/film/CreateFilm";
import FilmDetail from "./components/film/FilmDetail";
import DirectorDetail from "./components/director/DirectorDetail";
import FestivalDetail from "./components/festival/FestivalDetail";
import AwardDetail from "./components/award/AwardDetail";


const Routes = props => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <LogIn/>}/>
                    <Route exact path="/explore" render={() => <Explore/>}/>
                    <Route exact path="/account" render={() => <Account/>}/>
                    <Route exact path="/film/create" render={() => <CreateFilm/>}/>
                    <Route path="/film/:id" component={FilmDetail} />
                    <Route path="/director/:id" component={DirectorDetail} />
                    <Route path="/festival/:id" component={FestivalDetail} />
                    <Route path="/award/:id" component={AwardDetail} />
                </Switch>
            </Router>
    );
};

export default Routes;
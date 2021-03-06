import React from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';

import './navigation.scss';

export default class Navigation extends React.Component {

    render() {
        return (
            <Grid container xs={4}>
                <Grid className={'nav'}
                    container
                    item
                    justify={'center'}
                    alignItems={'flex-start'}
                    direction={'column'}
                    xs={4}
                    spacing={3} >
                    <Grid item>
                        <Link to='/explore'>
                            <img src={'/imgs/logo.png'} alt={'logo'} width={200} />
                        </Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'explore' ? 'active' : null}>
                        <Link to='/explore'>Explore</Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'add' ? 'active' : null}>
                        <Link to='/film/create'>Add Film</Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'account' ? 'active' : null}>
                        <Link to='/account'>Account</Link>
                    </Grid>
                </Grid>
            </Grid>

        );
    }
}
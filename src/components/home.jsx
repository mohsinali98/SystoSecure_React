import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import History from './history';
import Location from './location';
import Announcement from './announcement';
import Profile from './profile';
import Attendance from './attendance';
import Logout from './logout';
import NotFound from './notFound';
import TimeTable from './timtable';
import auth from '../services/authService';

class Home extends Component {
    state = {
        user: ""
    };

    async componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar user={this.state.user} />
                <main>
                    <Switch>
                        <Route path="/home/attendance" component={Attendance} />
                        <Route path="/home/history" component={History} />
                        <Route path="/home/location" component={Location} />
                        <Route path="/home/announcement" component={Announcement} />
                        <Route path="/home/timetable" component={TimeTable} />
                        <Route path="/home/profile" component={Profile} />
                        <Route path="/home/logout" component={Logout} />
                        <Route path='/home/not-found' component={NotFound} />
                        <Redirect from='/home' exact to='/home/attendance' />
                        <Redirect to='/home/not-found' />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default Home;
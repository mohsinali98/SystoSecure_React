import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminNavbar from './adminNavbar';
import AdminAnnouncement from './adminAnnouncement';
import AdminUpcomingExam from './adminUpcomingExam';
import AdminResult from './adminResult';
import AdminTimetable from './adminTimetable';
import AdminProfile from './adminProfile';
import AdminLogout from './adminLogout';
import NotFound from './notFound';
import auth from '../services/authService';

class Admin extends Component {
    state = {}
    render() {
        if (auth.getCurrentUser.isAdmin===false) {
            return <Redirect to='/home' />;
        }

        return (
            <div>
                <AdminNavbar />
                <main>
                    <Switch>
                        <Route path='/admin/home/announcement' component={AdminAnnouncement} />
                        <Route path='/admin/home/upexam' component={AdminUpcomingExam} />
                        <Route path='/admin/home/result' component={AdminResult} />
                        <Route path='/admin/home/timetable' component={AdminTimetable} />
                        <Route path='/admin/home/profile' component={AdminProfile} />
                        <Route path='/admin/home/logout' component={AdminLogout} />
                        <Route path='/admin/home/not-found' component={NotFound} />
                        <Redirect from="/admin/home" exact to='/admin/home/announcement' />
                        <Redirect to='/admin/home/not-found' />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Admin;
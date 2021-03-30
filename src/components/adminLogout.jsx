import { Component } from 'react';
import auth from '../services/authService';

class AdminLogout extends Component {
    state = {}
    componentDidMount() {
        auth.logout();
        window.location = '/admin';
    }

    render() {
        return (
            null
        );
    }
}

export default AdminLogout;
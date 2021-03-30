import React, { Component } from 'react';
import { getHistory } from './../services/attendanceService';
import auth from './../services/authService';

class History extends Component {
    state = {
        history: []
    }

    async componentDidMount() {
        const { username } = auth.getCurrentUser();
        const { data: history } = await getHistory(username);
        this.setState({ history });
    }
    render() {
        return (
            <div className="container">
                <div style={{margin:'2%'}}>
                    <h4>History of Attendance</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.history.map(h => (
                                <tr key={h._id}>
                                    <td>{h.date}</td>
                                    <td>{h.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default History;
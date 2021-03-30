import React, { Component } from 'react';
import { getTodayAtt, getHistory } from './../services/attendanceService';
import auth from './../services/authService';

class Attendance extends Component {
    state = {
        attendance: [],
        history:[]
    }

    async componentDidMount() {
        const { username } = auth.getCurrentUser();
        const { data: attendance } = await getTodayAtt(username);
        this.setState({ attendance });
        const {data:history}=await getHistory(username);
        this.setState({history});
    }

    render() {
        return (
            <div style={{margin:"2%"}}>
                <div className="row">
                    <div style={{ borderRight: "2px solid #C8C8C8" }} className="col-2">
                        <h4>History</h4>
                        <ul className="list-group list-group-flush">
                            {this.state.history.map(h=>(<li className="list-group-item" key={h._id}>{h.date}, {h.time}</li>))}
                        </ul>


                    </div>
                    <div className="col">
                        <h4>Today's Attendance</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.attendance.map(att => (
                                    <tr key={att._id}>
                                        <td>{att.date}</td>
                                        <td>{att.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attendance;
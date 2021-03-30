import React, { Component } from 'react';
import { getTimetable } from '../services/timetableService';

class TimeTable extends Component {
    state = {
        timetable: []
    }

    async componentDidMount() {
        const { data: timetable } = await getTimetable();
        this.setState({ timetable });
    }
    render() {
        return (
            <div style={{margin: "5%"}}>
                <h2 style={{marginBottom:"2%"}}>Timetable</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Day/Time</th>
                            <th>8:15 - 9:00</th>
                            <th>9:00 - 9:45</th>
                            <th>9:45 - 10:30</th>
                            <th>10:30 - 11:15</th>
                            <th>11:15 - 12:00</th>
                            <th>12:00 - 12:45</th>
                        </tr>
                        <tr>
                            <th>Friday Timing</th>
                            <th>8:15 - 8:45</th>
                            <th>8:45 - 9:15</th>
                            <th>9:15 - 9:45</th>
                            <th>9:45 - 10:15</th>
                            <th>10:15 - 10:45</th>
                            <th>10:45 - 11:15</th>
                        </tr>
                    </thead>

                    {this.state.timetable.map(tt => (
                        <tbody key={tt._id}>
                            <tr>
                                <th>Monday</th>
                                <td>{tt['monday']['mc1']}</td>
                                <td>{tt['monday']['mc2']}</td>
                                <td>{tt['monday']['mc3']}</td>
                                <td rowSpan="5"><span style={{ writingMode: "vertical-rl", fontSize: "70px", paddingTop: "10%" }}>Break</span></td>
                                <td>{tt['monday']['mc4']}</td>
                                <td>{tt['monday']['mc5']}</td>
                            </tr>
                            <tr>
                                <th>Tuesday</th>
                                <td>{tt['tuesday']['tc1']}</td>
                                <td>{tt['tuesday']['tc2']}</td>
                                <td>{tt['tuesday']['tc3']}</td>
                                <td>{tt['tuesday']['tc4']}</td>
                                <td>{tt['tuesday']['tc5']}</td>
                            </tr>
                            <tr>
                                <th>Wednesday</th>
                                <td>{tt['wednesday']['wc1']}</td>
                                <td>{tt['wednesday']['wc2']}</td>
                                <td>{tt['wednesday']['wc3']}</td>
                                <td>{tt['wednesday']['wc4']}</td>
                                <td>{tt['wednesday']['wc4']}</td>
                            </tr>
                            <tr>
                                <th>Thursday</th>
                                <td>{tt['thursday']['thc1']}</td>
                                <td>{tt['thursday']['thc2']}</td>
                                <td>{tt['thursday']['thc3']}</td>
                                <td>{tt['thursday']['thc4']}</td>
                                <td>{tt['thursday']['thc5']}</td>
                            </tr>
                            <tr>
                                <th>Friday</th>
                                <td>{tt['friday']['fc1']}</td>
                                <td>{tt['friday']['fc2']}</td>
                                <td>{tt['friday']['fc3']}</td>
                                <td>{tt['friday']['fc4']}</td>
                                <td>{tt['friday']['fc5']}</td>
                            </tr>
                        </tbody>
                    ))}


                </table>
            </div>
        );
    }
}

export default TimeTable;
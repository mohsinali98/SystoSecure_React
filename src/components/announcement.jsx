import React, { Component } from 'react';
import auth from '../services/authService';
import { getResult } from './../services/resultService';
import { getannouncement } from './../services/announcementService';
import { getExam } from './../services/upcomingExams';

class Announcement extends Component {
    state = {
        result: [],
        announcement: [],
        exam:[]
    }

    async componentDidMount() {
        const { username } = auth.getCurrentUser();
        const { data: result } = await getResult(username);
        this.setState({ result });

        const { data: announcement } = await getannouncement();
        this.setState({ announcement });

        const { data: exam } = await getExam();
        this.setState({ exam });
    }
    render() {
        return (
            <div style={{ margin: "2%" }}>
                <div className="row">
                    <div className="col-4">
                        <h2>Recent Result</h2>
                        <ul class="list-group">
                            {this.state.result.map(r => (<React.Fragment key={r._id}>
                                <li class="list-group-item list-group-item-light">English: {r.english}</li>
                                <li class="list-group-item list-group-item-light">Urdu: {r.urdu}</li>
                                <li class="list-group-item list-group-item-light">Maths: {r.maths}</li>
                                <li class="list-group-item list-group-item-light">Chemistry: {r.chemistry}</li>
                                <li class="list-group-item list-group-item-light">Physics: {r.physics}</li>
                                <li class="list-group-item list-group-item-light">Total Marks: {r.total}</li>
                                <li class="list-group-item list-group-item-light">Obtained Marks: {r.obtained}</li>
                            </React.Fragment>))}
                        </ul>


                    </div>
                    <div className="col">
                        <div className="row">
                            <div style={{marginBottom:"10%"}} className="col">
                                <h2>Announcement</h2>
                                <ul class="list-group list-group-flush">
                                    {this.state.announcement.map(announce=>(
                                    <li class="list-group-item" key={announce._id}>{announce.date} - {announce.announceText}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Upcoming Exams</h2>
                                <ul class="list-group list-group-flush">
                                    {this.state.exam.map(exam=>(
                                    <li class="list-group-item" key={exam._id}>{exam.date} - {exam.exam}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Announcement;
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getExam } from '../services/upcomingExams';
import { postExam, deleteExam } from '../services/adminService';

const AdminUpcomingExam = () => {
    const style = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '40ch',
            }
        },
        root2: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = style();

    const [exam, setExam] = useState("");
    const [upExam, setUpExam] = useState([{}]);

    useEffect(() => {
        let mounted = true;
        async function getUpExam() {
            const { data } = await getExam();
            setUpExam(data);
        }
        if (mounted) {
            getUpExam();
        }
        return () => mounted = false;
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        doSubmit();
    }

    const doSubmit = async () => {
        try {
            await postExam({ "exam": exam });
            setExam("");
            document.getElementById("addUpExam").value = "";

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log(ex.response.data);
            }
        }
    }

    const handleDelete = async (exam) => {
        const originalExam = upExam;
        const upExams = originalExam.filter(ue => ue._id !== exam._id);
        setUpExam(upExams);

        try {
            await deleteExam(exam._id);
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) {
                console.log('This exam has already been deleted.');
            }
            setUpExam(originalExam);
        }
    }

    return (
        <div style={{ margin: "2%" }}>
            <div className="row">
                <div style={{ borderRight: "2px solid #C8C8C8" }} className="col-4">
                    <h2>Add Upcoming Exam</h2>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="addUpExam"
                            label="Upcoming Exam"
                            placeholder="Upcoming Exam"
                            multiline
                            variant="outlined"
                            onChange={(e) => (setExam(e.target.value))}
                        />
                        <div className={classes.root2}>
                            <Button type="submit" color="primary" variant="contained">Add</Button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <h2>Upcoming Exams</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Upcoming Exam</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {upExam.map((ue, index) => (
                                <tr key={index}>
                                    <td>{ue.date}</td>
                                    <td>{ue.exam}</td>
                                    <td><Button type="submit" color="Secondary" variant="contained" onClick={() => (handleDelete(ue))}>Delete</Button></td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default AdminUpcomingExam;
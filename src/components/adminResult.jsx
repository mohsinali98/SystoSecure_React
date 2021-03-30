import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { getStudents, postResult } from '../services/adminService';

const AdminResult = () => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 200,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    const [students, setStudents] = useState([{}]);
    const [userStu, setUserStu] = useState("");
    const [english, setEnglish] = useState(0);
    const [urdu, setUrdu] = useState(0);
    const [maths, setMaths] = useState(0);
    const [chemistry, setChemistry] = useState(0);
    const [physics, setPhysics] = useState(0);
    const [total, setTotal] = useState(500);
    const [obtained, setObtained] = useState(0);

    useEffect(() => {
        let mounted = true;
        async function getStudent() {
            const { data } = await getStudents();
            setStudents(data);
        }
        if (mounted) {
            getStudent();
        }
        return () => mounted = false;
    }, [students]);

    const handleObt = () => {
        const marks = english + urdu + maths + chemistry + physics;
        setObtained(marks);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        doSubmit();
    }

    const doSubmit = async () => {
        try {
            await postResult({ "username": userStu, "english": english, "urdu": urdu, "maths": maths, "chemistry": chemistry, "physics": physics, "total": total, "obtained": obtained });
            setUserStu("");
            setEnglish(0);
            setUrdu(0);
            setMaths(0);
            setChemistry(0);
            setPhysics(0);
            setObtained(0);
            document.getElementById("usernameStu").value = "";
            document.getElementById("english").value = "";
            document.getElementById("urdu").value = "";
            document.getElementById("maths").value = "";
            document.getElementById("chemistry").value = "";
            document.getElementById("physics").value = "";
            document.getElementById("omarks").value = "";

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log(ex.response.data);
            }
        }
    }

    return (
        <div style={{ marginTop: "2%" }} className="container">
            <h2>Add Result</h2>
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <label htmlFor="usernameStu">Student Username</label>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="usernameStuLabel">Student Username</InputLabel>
                        <Select
                            labelId="usernameStu"
                            id="usernameStu"
                            label="Student Username"
                            value={userStu}
                            onChange={(e => (setUserStu(e.target.value)))}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {students.map((st,index) => (
                                <MenuItem key={index} value={st.username}>{st.username}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.root}>
                    <label htmlFor="english">Englsih</label>
                    <TextField id="english" label="English" variant="outlined" type="number" onChange={(e) => (setEnglish(e.target.valueAsNumber))} onBlur={handleObt} value={english} />
                </div>
                <div className={classes.root}>
                    <label htmlFor="urdu">Urdu</label>
                    <TextField id="urdu" label="Urdu" variant="outlined" type="number" onChange={(e) => (setUrdu(e.target.valueAsNumber))} onBlur={handleObt} value={urdu} />
                </div>
                <div className={classes.root}>
                    <label htmlFor="maths">Maths</label>
                    <TextField id="maths" label="Maths" variant="outlined" type="number" onChange={(e) => (setMaths(e.target.valueAsNumber))} onBlur={handleObt} value={maths} />
                </div>
                <div className={classes.root}>
                    <label htmlFor="physics">Physics</label>
                    <TextField id="physics" label="Physics" variant="outlined" type="number" onChange={(e) => (setPhysics(e.target.valueAsNumber))} onBlur={handleObt} value={physics} />
                </div>
                <div className={classes.root}>
                    <label htmlFor="chemistry">Chemistry</label>
                    <TextField id="chemistry" label="Chemistry" variant="outlined" type="number" onChange={(e) => (setChemistry(e.target.valueAsNumber))} onBlur={handleObt} value={chemistry} />
                </div>
                <div className={classes.root}>
                    <label htmlFor="tmarks">Total Marks</label>
                    <TextField id="tmarks" label="Total Marks" variant="outlined" type="number" onChange={(e) => (setTotal(e.target.valueAsNumber))} value={total} />
                </div>
                <div className={classes.root}>
                    <label htmlFor="omarks">Obtained Marks</label>
                    <TextField id="omarks" label="Obtained Marks" variant="outlined" type="number" value={obtained} disabled={true} />
                </div>
                <div className={classes.root}>
                    <Button type="submit" color="primary" variant="contained">Add Result</Button>
                </div>
            </form>

        </div>
    );
}

export default AdminResult;
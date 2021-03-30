import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { postTimetable } from '../services/adminService';

const AdminTimetable = () => {
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

    const [courses] = useState(["English", "Urdu", "Maths", "Chemistry", "Physics"]);
    const [mc1, setMc1] = useState("");
    const [mc2, setMc2] = useState("");
    const [mc3, setMc3] = useState("");
    const [mc4, setMc4] = useState("");
    const [mc5, setMc5] = useState("");
    const [tc1, setTc1] = useState("");
    const [tc2, setTc2] = useState("");
    const [tc3, setTc3] = useState("");
    const [tc4, setTc4] = useState("");
    const [tc5, setTc5] = useState("");
    const [wc1, setWc1] = useState("");
    const [wc2, setWc2] = useState("");
    const [wc3, setWc3] = useState("");
    const [wc4, setWc4] = useState("");
    const [wc5, setWc5] = useState("");
    const [thc1, setThc1] = useState("");
    const [thc2, setThc2] = useState("");
    const [thc3, setThc3] = useState("");
    const [thc4, setThc4] = useState("");
    const [thc5, setThc5] = useState("");
    const [fc1, setFc1] = useState("");
    const [fc2, setFc2] = useState("");
    const [fc3, setFc3] = useState("");
    const [fc4, setFc4] = useState("");
    const [fc5, setFc5] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        doSubmit();
    }

    const doSubmit = async () => {
        const objTimetable = {
            "monday": { "mc1": mc1, "mc2": mc2, "mc3": mc3, "mc4": mc4, "mc5": mc5 },
            "tuesday": { "tc1": tc1, "tc2": tc2, "tc3": tc3, "tc4": tc4, "tc5": tc5 },
            "wednesday": { "wc1": wc1, "wc2": wc2, "wc3": wc3, "wc4": wc4, "wc5": wc5 },
            "thursday": { "thc1": thc1, "thc2": thc2, "thc3": thc3, "thc4": thc4, "thc5": thc5 },
            "friday": { "fc1": fc1, "fc2": fc2, "fc3": fc3, "fc4": fc4, "fc5": fc5 }
        }
        await postTimetable(objTimetable);
        window.location='/admin/home/timetable';
    }

    return (
        <div style={{ margin: "2%" }}>
            <h2>Add Timetable</h2>
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <label htmlFor="monday">Monday</label>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="mondayLabel1">Class 1</InputLabel>
                        <Select
                            labelId="mondayc1"
                            id="mondayc1"
                            label="Class 1"
                            value={mc1}
                            onChange={(e) => (setMc1(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="mondayLabel2">Class 2</InputLabel>
                        <Select
                            labelId="mondayc2"
                            id="mondayc2"
                            label="Class 2"
                            value={mc2}
                            onChange={(e) => (setMc2(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="mondayLabel3">Class 3</InputLabel>
                        <Select
                            labelId="mondayc3"
                            id="mondayc3"
                            label="Class 3"
                            value={mc3}
                            onChange={(e) => (setMc3(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="mondayLabel">Class 4</InputLabel>
                        <Select
                            labelId="mondayc4"
                            id="mondayc4"
                            label="Class 4"
                            value={mc4}
                            onChange={(e) => (setMc4(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="mondayLabel5">Class 5</InputLabel>
                        <Select
                            labelId="mondayc5"
                            id="mondayc5"
                            label="Class 5"
                            value={mc5}
                            onChange={(e) => (setMc5(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.root}>
                    <label htmlFor="tuesday">Tuesday</label>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="tusdayLabel1">Class 1</InputLabel>
                        <Select
                            labelId="tuesdayc1"
                            id="tuesdayc1"
                            label="Class 1"
                            value={tc1}
                            onChange={(e) => (setTc1(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="tuesdayLabel2">Class 2</InputLabel>
                        <Select
                            labelId="tuesdayc2"
                            id="tuesdayc2"
                            label="Class 2"
                            value={tc2}
                            onChange={(e) => (setTc2(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="tuesdayLabel3">Class 3</InputLabel>
                        <Select
                            labelId="tuesdayc3"
                            id="tuesdayc3"
                            label="Class 3"
                            value={tc3}
                            onChange={(e) => (setTc3(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="tuesdayLabel">Class 4</InputLabel>
                        <Select
                            labelId="tuesdayc4"
                            id="tuesdayc4"
                            label="Class 4"
                            value={tc4}
                            onChange={(e) => (setTc4(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="tuesdayLabel5">Class 5</InputLabel>
                        <Select
                            labelId="tuesdayc5"
                            id="tuesdayc5"
                            label="Class 5"
                            value={tc5}
                            onChange={(e) => (setTc5(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.root}>
                    <label htmlFor="wednesday">Wednesday</label>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="wednesdayLabel1">Class 1</InputLabel>
                        <Select
                            labelId="wednesdayc1"
                            id="wednesdayc1"
                            label="Class 1"
                            value={wc1}
                            onChange={(e) => (setWc1(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="wednesdayLabel2">Class 2</InputLabel>
                        <Select
                            labelId="wednesdayc2"
                            id="wednesdayc2"
                            label="Class 2"
                            value={wc2}
                            onChange={(e) => (setWc2(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="wednesdayLabel3">Class 3</InputLabel>
                        <Select
                            labelId="wednesdayc3"
                            id="wednesdayc3"
                            label="Class 3"
                            value={wc3}
                            onChange={(e) => (setWc3(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="wednesdayLabel">Class 4</InputLabel>
                        <Select
                            labelId="wednesdayc4"
                            id="wednesdayc4"
                            label="Class 4"
                            value={wc4}
                            onChange={(e) => (setWc4(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="wednesdayLabel5">Class 5</InputLabel>
                        <Select
                            labelId="wednesdayc5"
                            id="wednesdayc5"
                            label="Class 5"
                            value={wc5}
                            onChange={(e) => (setWc5(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.root}>
                    <label htmlFor="thursday">Thursday</label>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="thursdayLabel1">Class 1</InputLabel>
                        <Select
                            labelId="thursdayc1"
                            id="thursdayc1"
                            label="Class 1"
                            value={thc1}
                            onChange={(e) => (setThc1(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="thursdayLabel2">Class 2</InputLabel>
                        <Select
                            labelId="thursdayc2"
                            id="thursdayc2"
                            label="Class 2"
                            value={thc2}
                            onChange={(e) => (setThc2(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="thursdayLabel3">Class 3</InputLabel>
                        <Select
                            labelId="thursdayc3"
                            id="thursdayc3"
                            label="Class 3"
                            value={thc3}
                            onChange={(e) => (setThc3(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="thursdayLabel">Class 4</InputLabel>
                        <Select
                            labelId="thursdayc4"
                            id="thursdayc4"
                            label="Class 4"
                            value={thc4}
                            onChange={(e) => (setThc4(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="thursdayLabel5">Class 5</InputLabel>
                        <Select
                            labelId="thursdayc5"
                            id="thursdayc5"
                            label="Class 5"
                            value={thc5}
                            onChange={(e) => (setThc5(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.root}>
                    <label htmlFor="friday">Friday</label>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="fridayLabel1">Class 1</InputLabel>
                        <Select
                            labelId="fridayc1"
                            id="fridayc1"
                            label="Class 1"
                            value={fc1}
                            onChange={(e) => (setFc1(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="fridayLabel2">Class 2</InputLabel>
                        <Select
                            labelId="fridayc2"
                            id="fridayc2"
                            label="Class 2"
                            value={fc2}
                            onChange={(e) => (setFc2(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="fridayLabel3">Class 3</InputLabel>
                        <Select
                            labelId="fridayc3"
                            id="fridayc3"
                            label="Class 3"
                            value={fc3}
                            onChange={(e) => (setFc3(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="fridayLabel">Class 4</InputLabel>
                        <Select
                            labelId="fridayc4"
                            id="fridayc4"
                            label="Class 4"
                            value={fc4}
                            onChange={(e) => (setFc4(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="fridayLabel5">Class 5</InputLabel>
                        <Select
                            labelId="fridayc5"
                            id="fridayc5"
                            label="Class 5"
                            value={fc5}
                            onChange={(e) => (setFc5(e.target.value))}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {courses.map((c, index) => (
                                <MenuItem key={index} value={c}>{c}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.root}>
                    <Button type="submit" color="primary" variant="contained">Add Timetable</Button>
                </div>
            </form>

        </div>

    );
}


export default AdminTimetable;
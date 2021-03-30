import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { postAnnouncement, deleteAnnouncement } from '../services/adminService';
import { getannouncement } from '../services/announcementService';


const AdminAnnouncement = () => {

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

    const [announceText, setAnnounceText] = useState("");
    const [announcement, setAnnouncement] = useState([{}]);

    useEffect(() => {
        async function getAnnounce() {
            const { data } = await getannouncement();
            setAnnouncement(data);
        }
        getAnnounce();
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        doSubmit();
    }

    const doSubmit = async () => {
        try {
            await postAnnouncement({ "announceText": announceText });
            setAnnounceText("");
            document.getElementById("addAnnouncement").value = "";

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log(ex.response.data);
            }
        }
    }

    const handleDelete = async (announce) => {
        const originalAnnouncement = announcement;
        const announcements = originalAnnouncement.filter(ann => ann._id !== announce._id);
        setAnnouncement(announcements);

        try {
            await deleteAnnouncement(announce._id);
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) {
                console.log('This announcement has already been deleted.');
            }
            setAnnouncement(originalAnnouncement);
        }
    }

    return (
        <div style={{ margin: "2%" }}>
            <div className="row">
                <div style={{ borderRight: "2px solid #C8C8C8" }} className="col-4">
                    <h2>Add Announcement</h2>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="addAnnouncement"
                            label="Announcement"
                            placeholder="Announcement"
                            multiline
                            variant="outlined"
                            onChange={(e) => setAnnounceText(e.target.value)}
                        />
                        <div className={classes.root2}>
                            <Button type="submit" color="primary" variant="contained">Add</Button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <h2>Announcements</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Announcement</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {announcement.map((ann,index) => (
                                <tr key={index}>
                                    <td>{ann.date}</td>
                                    <td>{ann.announceText}</td>
                                    <td><Button type="submit" color="Secondary" variant="contained" onClick={() => (handleDelete(ann))}>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default AdminAnnouncement;
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { getUser } from '../services/userService';

const AdminProfile = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            large: {
                width: "100%",
                height: "100%",
            },
        },
    }));

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
        async function getU() {
            const user = await getUser();
            setName(user.name);
            setUsername(user.username);
            setImg(user.profileImg);
        }
        getU()
    }, [name, username, img])

    const classes = useStyles();

    return (
        <div style={{ marginTop: "2%" }} className="container">
            <h2>Your Profile</h2>
            <div className="row">
                <div style={{ margin: "5%" }} className="col-4">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField disabled id="standard-basic" label="Name" value={name} />
                        <TextField disabled id="standard-basic" label="Username" value={username} />
                    </form>
                </div>
                <div className="col">
                    <div style={{ margin: "5%" }}>
                        <Avatar alt={name} src={`data:image/jpeg;base64,${img}`} style={{ width: "40%", height: "40%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AdminProfile;
import React, { useState } from 'react';
import * as m from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../services/userService';
import auth from '../services/authService';


function Register(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            minWidth: 300,
            minHeight: 550
        },
        title: {
            fontSize: 100,
            textAlign: 'center',
            marginLeft: '40%',
        },
        pos: {
            marginLeft: '38%',
            color: '#5e6464',
        }, 
        root2: {
            width: '48%',
            marginLeft: '17%',
            '& > * + *': {
                marginTop: theme.spacing(2),

            },
        },

    }));

    const theme = createMuiTheme({
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    body: {
                        backgroundColor: 'black',
                    },
                },
            },
        },
    });

    const classes = useStyles();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profileImg, setprofileImg] = useState("");
    const [nameError, setNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e) => {
        if (e.currentTarget.name === "name") {
            if (e.currentTarget.value.trim() === "") {
                setName(e.currentTarget.value)
                return setNameError("Name is Required.");
            }
            else {
                setNameError("");
                return setName(e.currentTarget.value);
            }
        }
        if (e.currentTarget.name === "username") {
            if (e.currentTarget.value.trim() === "") {
                setUsername(e.currentTarget.value);
                return setUsernameError("Username is Required.");
            }
            else {
                setUsernameError("");
                return setUsername(e.currentTarget.value);
            }
        }
        if (e.currentTarget.name === "password") {
            if (e.currentTarget.value.trim() === "")
            {
                setPassword(e.currentTarget.value);
                return setPasswordError("Password is Required.");
            } 
            else {
                setPasswordError("");
                return setPassword(e.currentTarget.value);
            }
        }
        if (e.currentTarget.name === "profileImg") {
            if (e.currentTarget.value.trim() === "") {
                setprofileImg("");
            }
            else {
                return setprofileImg(e.currentTarget.files[0]);
            }
        }
    }

    const doSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('profileImg', profileImg);
            formData.append('name', name);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('isAdmin', false);

            const response = await register(formData);
            auth.loginWithJwt(response.headers['x-auth-token']);
            window.location = '/home';
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setUsernameError(ex.response.data);
                console.log(ex.response.data);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setNameError("Name is Required");
        }
        if (username.trim() === '') {
            setUsernameError("Username is Required");
        }
        if (password.trim() === '') {
            setPasswordError("Password is Required");
        }
        if (name.trim() !== '' && username.trim() !== '' && password.trim() !== '') {
            doSubmit();
        }
    }

    if (auth.getCurrentUser()) return <Redirect to='/home' />

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
            </ThemeProvider>
            <div className="row">
                <div style={{ marginTop: "8%" }} className="col-sm">
                    <Container maxWidth="sm">
                        <m.Card className={classes.root} variant="outlined">
                            <m.CardContent>
                                <PersonAddIcon className={classes.title} />
                            </m.CardContent>
                            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                                <div className="mb-4" style={{ marginLeft: '15%' }}>
                                    <label htmlFor="name" className="form-label m-2">Full Name</label>
                                    <m.TextField id="name" name="name" label="Full Name" variant="outlined" autoFocus={true} onChange={handleChange} required={true} />
                                    {nameError && <div className={classes.root2}><Alert severity="error">{nameError}</Alert></div>}
                                </div>
                                <div className="mb-4" style={{ marginLeft: '15%' }}>
                                    <label htmlFor="username" className="form-label m-2">Username</label>
                                    <m.TextField id="username" name="username" label="RFID" variant="outlined" onChange={handleChange} required={true} />
                                    {usernameError && <div className={classes.root2}><Alert severity="error">{usernameError}</Alert></div>}
                                </div>
                                <div className="mb-4" style={{ marginLeft: '15%' }}>
                                    <label htmlFor="password" className="form-label m-2">Password</label>
                                    <m.TextField id="password" name="password" label="Password" variant="outlined" type="password" onChange={handleChange} required={true} />
                                    {passwordError && <div className={classes.root2}><Alert severity="error">{passwordError}</Alert></div>}
                                </div>
                                <div className="mb-4" style={{ marginLeft: '15%' }}>
                                    <label htmlFor="profileImg" className="form-label m-2">Image</label>
                                    <m.TextField style={{ marginLeft: "1.5em" }} id="profileImg" name="profileImg" label="" variant="outlined" type="file" onChange={handleChange} required={true} />
                                </div>
                                <div style={{ marginLeft: '40%' }}>
                                    <m.CardActions>
                                        <m.Button type="submit" variant="contained">Register</m.Button>
                                    </m.CardActions>
                                </div>
                            </form>
                            <div style={{ marginTop: '2%', marginBottom: "1em" }}>
                                <Link className={classes.pos} to='/login' >Already Has Account?</Link>
                            </div>
                        </m.Card>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;
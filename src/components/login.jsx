import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import auth from '../services/authService';
import * as m from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Login = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            minWidth: 300,
            minHeight: 400
        },
        title: {
            fontSize: 100,
            textAlign: 'center',
            marginLeft: '40%',
        },
        pos: {
            marginLeft: '35%',
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e) => {
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
            if (e.currentTarget.value.trim() === "") {
                setPassword(e.currentTarget.value);
                return setPasswordError("Password is Required.");
            }
            else {
                setPasswordError("");
                return setPassword(e.currentTarget.value);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === '') {
            setUsernameError("Username is Required");
        }
        if (password.trim() === '') {
            setPasswordError("Password is Required");
        }
        if (username.trim() !== '' && password.trim() !== '') {
            doSubmit();
        }
    }

    const doSubmit = async () => {
        try {
            await auth.login(username, password);
            window.location = '/home';

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setUsernameError(ex.response.data);
                console.log(ex.response.data);
            }
        }
    }

    if (auth.getCurrentUser()) return <Redirect to='/home' />

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
            </ThemeProvider>
            <div className="row">
                <div style={{ marginTop: "10%" }} className="col-sm">
                    <Container maxWidth="sm">
                        <m.Card className={classes.root} variant="outlined">
                            <m.CardContent>
                                <AccountCircleIcon className={classes.title} />
                            </m.CardContent>
                            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                                <div className="mb-4" style={{ marginLeft: '15%' }}>
                                    <label htmlFor="username" className="form-label m-2">Username</label>
                                    <m.TextField id="username" name="username" label="RFID" variant="outlined" onChange={handleChange} autoFocus={true} />
                                    {usernameError && <div className={classes.root2}><Alert severity="error">{usernameError}</Alert></div>}
                                </div>
                                <div className="mb-4" style={{ marginLeft: '15%' }}>
                                    <label htmlFor="password" className="form-label m-2">Password</label>
                                    <m.TextField id="password" name="password" label="Password" variant="outlined" type="password" onChange={handleChange} />
                                    {passwordError && <div className={classes.root2}><Alert severity="error">{passwordError}</Alert></div>}
                                </div>
                                <div style={{ marginLeft: '40%' }}>
                                    <m.CardActions>
                                        <m.Button type="submit" variant="contained">Login</m.Button>
                                    </m.CardActions>
                                </div>
                            </form>
                            <div style={{ marginTop: '2%', marginBottom: "1em" }}>
                                <Link className={classes.pos} to='/register' >Create New Account</Link>
                            </div>
                        </m.Card>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;


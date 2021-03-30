import React, { useState, useEffect } from 'react';
import logo from '../images/SystoSecureLogo.png';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { getUser } from '../services/userService';

const AdminNavbar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        large: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
    }));

    const [userImg,setUserImg]=useState("");
    const [name,setName]=useState("");


    useEffect(() => {
        async function getData() {
            const user = await getUser();
            setUserImg(user.profileImg);
            setName(user.name);
        }
        getData()
    });

    const classes = useStyles();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/admin/home">
                    <img src={logo} alt="SystoSecure" width="200" height="auto" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/home/announcement">Announcement</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/home/upexam">Upcoming Exams</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/home/result">Result</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/home/timetable">Timetable</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li>
                            <Avatar alt="Name" src={`data:image/jpeg;base64,${userImg}`} className={classes.large} />
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/home/profile"><h5>{name}</h5></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/home/logout"><ExitToAppIcon /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      );
}
 
export default AdminNavbar;
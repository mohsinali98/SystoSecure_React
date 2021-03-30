import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/authService';


const ProtectedRoute = ({ path, component: Component, render, flag, ...rest }) => {
    return (
        <Route path={path} {...rest} render={props => {
            if (flag === "user") {
                if (!auth.getCurrentUser()) return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />;
            }
            else if (flag === "admin") {
                if (!auth.getCurrentUser()) return <Redirect to={{
                    pathname: '/admin',
                    state: { from: props.location }
                }} />;
            }
            return Component ? <Component {...props} /> : render(props);
        }} />
    );
}


export default ProtectedRoute;
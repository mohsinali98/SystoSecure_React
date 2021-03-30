import http from './httpService';
import config from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndPoint = config.apiUrl + "/auth";

http.setJwt(getJwt());

export async function login(username, password) {
    const { data: jwt } = await http.post(apiEndPoint, { username, password });
    localStorage.setItem("token", jwt);
}

export function loginWithJwt(jwt){
    localStorage.setItem("token", jwt);
}

export function logout() {
    localStorage.removeItem('token');
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem('token');
        return jwtDecode(jwt);
    }
    catch (ex) {
        return null;
    }
}
export function getJwt(){
    return localStorage.getItem("token");
}

const auth= {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
}

export default auth;
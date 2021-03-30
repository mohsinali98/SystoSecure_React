import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/attendance";

export function getTodayAtt(username) {
    return http.get(apiEndPoint + '/today/' + username);
}

export function getHistory(username) {
    return http.get(apiEndPoint + '/history/' + username);
}
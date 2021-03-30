import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/timetable";

export function getTimetable() {
    return http.get(apiEndPoint);
}
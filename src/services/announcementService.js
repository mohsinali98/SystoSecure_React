import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/announcement";

export function getannouncement() {
    return http.get(apiEndPoint);
}
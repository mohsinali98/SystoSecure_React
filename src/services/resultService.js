import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/result";

export function getResult(username) {
    return http.get(apiEndPoint + '/' + username);
}
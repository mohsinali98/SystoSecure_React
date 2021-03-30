import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/exam";

export function getExam() {
    return http.get(apiEndPoint);
}
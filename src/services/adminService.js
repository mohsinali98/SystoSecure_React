import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/admin";

export function register(formdata) {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return http.post(apiEndPoint, formdata, config);
}


export async function getUser() {
    let getU = await http.get(apiEndPoint + '/me').then((response) => {
        return {
            "_id": response.data._id,
            "name": response.data.name,
            "username": response.data.username,
            "profileImg": Buffer.from(response.data.profileImg.data, 'binary').toString('base64'),
            "isAdmin": response.data.isAdmin
        }
    })
    return getU;
}

export function postAnnouncement(objAnnounce) {
    return http.post(apiEndPoint + '/announcement', objAnnounce);
}

export function deleteAnnouncement(annId) {
    return http.delete(apiEndPoint + '/announcement/' + annId);

}

export function postExam(objExam) {
    return http.post(apiEndPoint + '/exam', objExam);
}

export function deleteExam(upId) {
    return http.delete(apiEndPoint + '/exam/' + upId);
}

export function getStudents() {
    return http.get(apiEndPoint + '/students');
}

export function postResult(objResult) {
    return http.post(apiEndPoint + '/result', objResult);
}

export function postTimetable(objTimetable) {
    return http.post(apiEndPoint + '/timetable', objTimetable);
}

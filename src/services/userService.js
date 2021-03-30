import http from './httpService';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/users";

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
            "profileImg": Buffer.from(response.data.profileImg.data, 'binary').toString('base64')
         }
    })
    return getU;
}


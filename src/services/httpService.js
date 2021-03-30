import axios from 'axios';


axios.interceptors.response.use(null, error => { //null wali jaga success hota hai.
  const expectedError = error.reponse && error.response.status >= 400 && error.reponse.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

const httpService={
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};

export default httpService
import axios, { AxiosResponse } from 'axios';

const requestTime = 15000;
const badRequest = 400;
const unauthorized = 401;
const notFound = 404;
const internalServerError = 500;

export const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: requestTime,
});

axios.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    switch (error.response.status) {
      case badRequest:
        console.log('400 Bad Request');
        break;
      case unauthorized:
        console.log('401 Unauthorized');
        break;
      case notFound:
        console.log('404 Not Found');
        break;
      case internalServerError:
        console.log('500 Internal Server Error');
        break;
    }
  }
);

export default api;

// let responseBody = (response: AxiosResponse) => response.data;

// export const requests = {
//   get: (url: string) => instance.get(url).then(responseBody),
// };

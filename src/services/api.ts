import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 15000,
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    switch (error.response.status) {
      case 400:
        console.log('400 Bad Request');
        break;
      case 401:
        console.log('401 Unauthorized');
        break;
      case 404:
        console.log('404 Not Found');
        break;
      case 500:
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

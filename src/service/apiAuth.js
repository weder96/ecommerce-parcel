import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3000/"
});

api.interceptors.request.use(async config => {

  if (
    !config.url.endsWith('login') ||
    !config.url.endsWith('refresh') ||
    !config.url.endsWith('signup')
  ) {
    const userTokenExpiration = new Date(await AsyncStorage.getItem('userTokenExpiration'));
    const today = new Date();
    if (today > userTokenExpiration) {
      // refresh the token here
      const userRefreshToken = await AsyncStorage.getItem('userRefreshToken');
    } else {
      const userToken = await AsyncStorage.getItem('userToken');
      config.headers.Authorization = `Bearer ${userToken}`;
    }
  }

  return config;
}, (error) => {
  // Do something with response error
  // You can even test for a response code 
  // and try a new request before rejecting the promise
  if (error.response.status === 401) {     
    const requestConfig = error.config;
    return axios(requestConfig);
  }
  return Promise.reject(error);
});


api.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 401 && !originalRequest._retry) {
  }
  return Promise.reject(error);
});

export default api;
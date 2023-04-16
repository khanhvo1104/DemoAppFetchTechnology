import {ReactNode} from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:6060';

export interface AxiosProps {
  children: ReactNode;
}

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export const AxiosProvider = ({children}: AxiosProps) => {
  instance.interceptors.request.use(
    async config => {
      // Need to set loading, set token to storage and set token to Bearer Header in here
      return config;
    },
    error => {
      console.log('error: ', error);
      return error;
    },
  );

  instance.interceptors.response.use(
    response => {
      console.log('response?.status: ', response?.status);
      if (response?.status >= 200 && response?.status <= 299) {
        // Need to set loading in here
        if (response?.data === '') {
          return true;
        }
        return response?.data ?? true;
      }
      return response;
    },
    error => {
      if (error.response) {
        // Do something
        if (error.response.status === 401) {
        }
      } else if (error.request) {
        // Do something
      } else {
        // Do something
      }
    },
  );
};

import axios from 'axios';

const baseURL = 'https://awap-6server.onrender.com';

export const checkOpenCode = (openCode) => {
    return axios.get(`${baseURL}/checkOpenCode`, {
      params: { openCode }
  });
};

export const checkLockerStatus = (openCode) => {
  return axios.get(`${baseURL}/lockerStatus`, {
    params: { openCode }
  });
};

export const updateLockerStatus = (openCode, status) => {
  return axios.post(`${baseURL}/updateStatus?openCode=${openCode}&status=${status}`);
};
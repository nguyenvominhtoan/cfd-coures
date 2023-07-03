import axios from "axios";
import { BASE_URL } from "../config/environments";

export const authService = {
  login(payload = {}) {
    return axios.post(`${BASE_URL}/customer/login`, payload);
  },
  register(payload = {}) {
    return axios.post(`${BASE_URL}/customer/register`, payload);
  },
  getProfile() {
    return axios.post(`${BASE_URL}/customer/profiles`);
  },
};

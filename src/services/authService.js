import axios from "axios";
import { BASE_URL } from "../config/environments";

export const authService = {
  login(payload = {}) {
    return axios.post(`${BASE_URL}/customer/login`, payload);
  },
  register(payload = {}) {
    return axios.post(`${BASE_URL}/customer/register`, payload);
  },
  getProfile(token = "") {
    return axios.get(`${BASE_URL}/customer/profiles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateProfile(payload = {}, token = "") {
    return axios.put(`${BASE_URL}/customer/profiles`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart-form-data",
      },
    });
  },
};

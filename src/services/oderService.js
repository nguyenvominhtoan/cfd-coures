import axios from "axios";
import { BASE_URL } from "../config/environments";

export const oderService = {
  getCourseHistories(token = "") {
    return axios.get(`${BASE_URL}/orders/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

import axios from "axios";
import { BASE_URL } from "../config/environments";

export const courseService = {
  getCourse(query = "") {
    return axios.get(`${BASE_URL}/courses${query}`);
  },
  getCourseBySlug(slug = "") {
    return axios.get(`${BASE_URL}/courses${slug ? "/" + slug : ""}`);
  },
};

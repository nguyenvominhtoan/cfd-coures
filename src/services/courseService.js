import axios from "axios";

export const courseService = {
  getCourse(query = "") {
    return axios.get(`${BASE_URL}/courses${query}`);
  },
  getCourseBySlug(slug = "") {
    return axios.get(`${BASE_URL}/courses${slug ? "/" + slug : ""}`);
  },
};

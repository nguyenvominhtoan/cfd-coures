const COURSES_PATH = "/courses";
const PROFILE_PATH = "/profile";

export const PATHS = {
  HOME: "/",
  COURSES: COURSES_PATH,
  COURSES_DETAIL: COURSES_PATH + "/:slug",
  PROFILE: {
    INDEX: PROFILE_PATH,
    COURSES: PROFILE_PATH + "/my-courses",
    PAYMENT: PROFILE_PATH + "/my-payment",
  },
  BLOG: "/blog",
  CONTACT: "/contact",
  ABOUT: "/about",
};

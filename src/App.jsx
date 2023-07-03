import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Course from "./pages/Courses";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Blog from "./pages/Blog";

import ProfileLayout from "./layout/ProfileLayout";
import MyInfo from "./pages/Profile/MyInfo";
import MyCourses from "./pages/Profile/MyCourses";
import MyPayment from "./pages/Profile/MyPayment";
import Modal from "./pages/Modal";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Contact from "./pages/Contact/Contact";
import { PATHS } from "./config";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.COURSES} element={<Course />} />
          <Route path={PATHS.COURSES_DETAIL} element={<CourseDetail />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path="blogdetail" element={<BlogDetail />} />
          <Route path={PATHS.BLOG} element={<Blog />} />
          <Route path={PATHS.PROFILE.INDEX} element={<ProfileLayout />}>
            <Route index element={<MyInfo />} />
            <Route path={PATHS.PROFILE.COURSES} element={<MyCourses />} />
            <Route path={PATHS.PROFILE.PAYMENT} element={<MyPayment />} />
          </Route>
          <Route path={PATHS.ABOUT} element={<About />} />
          {/* <Route path="modal" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

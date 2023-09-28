import { Empty, Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../config";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseService";

const index = () => {
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(false);

  const {
    data: courses,
    loading,
    error,
  } = useQuery(() => courseService.getCourse());
  // console.log("courses", courses);

  // useEffect(() => {
  //   courseService
  //     .getCourse()
  //     .then((res) => {
  //       setCourses(res.data?.data?.courses || []);
  //     })
  //     .catch((error) => console.log("error", error));
  //   const fetchCourse = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await courseService.getCourse();
  //       setCourses(res.data?.data?.courses || []);
  //     } catch (error) {
  //       console.log("error", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCourse();
  // }, []);

  return (
    <div>
      <main className="mainwrapper courses --ptop">
        <div className="container">
          <div className="textbox">
            <div className="container">
              <h2 className="title --t2">Tất cả khoá học</h2>
            </div>
          </div>
          <div className="courses__list">
            {/* render courses */}
            {!loading && courses?.length === 0 && (
              <Empty
                description="ko tim thay du lieu nao"
                style={{ margin: "0 auto" }}
              />
            )}
            {loading &&
              Array(4)
                .fill("")
                .map((_, index) => (
                  <div key={index} className="courses__list-item">
                    <Skeleton style={{ width: "521px", height: "515px" }} />
                  </div>
                ))}
            {courses?.length > 0 &&
              courses.map((course, index) => {
                const { slug, image, tags } = course || {};
                return (
                  <div key={course.id || index} className="courses__list-item">
                    <div className="img">
                      <Link to={`/courses/${course.slug}`}>
                        <img
                          src={image}
                          alt={slug}
                          className="course__thumbnail"
                        />
                        <span className="course__img-badge badge">
                          Offline | Online
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <p className="label">{course.title}</p>
                      <h3 className="title --t3">
                        <Link to={PATHS.COURSES_DETAIL}>{course.name}</Link>
                      </h3>
                      <div className="content__info">
                        <div className="user">
                          <div className="user__img">
                            <img
                              src="img/avatar_nghia.jpg"
                              alt="Avatar teacher"
                            />
                          </div>
                          <p className="user__name">Trần Nghĩa</p>
                        </div>
                        <div className="price">
                          <strong>4.500.000đ</strong>
                        </div>
                      </div>
                      <div className="content__action">
                        <Link
                          to={PATHS.COURSES_DETAIL + course.slug}
                          className="btn btn--primary"
                        >
                          Đăng ký ngay
                        </Link>
                        <a href="" className="btn btn--default">
                          <img src="img/icon-paper.svg" alt="icon paper" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* {courses?.length > 0 && !loading && courses.map((course, index) =>
              return <
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;

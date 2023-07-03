import { Empty, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthen } from "../../components/AuthenContext";
import { PATHS } from "../../config";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseService";

const HomePage = () => {
  const {
    data: courses,
    loading,
    error,
  } = useQuery(() => courseService.getCourse());
  const { openAuthenModal } = useAuthen();

  const showModal = () => {
    openAuthenModal();
  };
  console.log("courses", courses, loading);
  return (
    <main className="mainwrapper">
      <section className="hero">
        <div className="hero__content">
          <div className="container">
            <h1 className="title --white">
              Học Viện Đào Tạo
              <br /> Lập Trình Front-End Thực Chiến
            </h1>
            <p className="text">
              Dạy từ kinh nghiệm, học từ thực tế để tạo ra sản phẩm có giá trị.
            </p>
            <div
              className="btn btn--primary btnmodal"
              data-modal="mdlogin"
              onClick={showModal}
            >
              Bắt đầu học
            </div>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="container-fluid">
            <div className="hero__bottom-social">
              <a href="https://www.facebook.com/cfdcircle" target="_blank">
                <img src="img/icon-facebook.svg" alt="Facebook CFD" />
              </a>
              <a href="https://www.youtube.com/cfdcircle" target="_blank">
                <img src="img/icon-youtube.svg" alt="Youtube CFD" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__background">
          <img
            className="hero__background-img"
            src="img/bg-hero-home.jpg"
            alt="CFD Training Background"
          />
          <div
            className="hero__background-video"
            data-src="video/CFD-video-bg2.mp4"
          />
        </div>
      </section>
      <section className="coursecoming --scpadding">
        <div className="container">
          <div className="heading">
            <h2 className="heading__title title --t2">
              Khoá học <span className="color--primary">sắp khai giảng</span>
            </h2>
            <div className="control">
              <div className="control__prev">
                <img src="img/icon-btn-control.svg" alt="icon prev" />
              </div>
              <div className="control__next">
                <img src="img/icon-btn-control.svg" alt="icon next" />
              </div>
            </div>
          </div>
        </div>
        <div className="coursecoming__list" id="coursecoming__slider">
          <div className="coursecoming__item">
            <div className="coursecoming__item-img">
              <a href="">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
                  alt="Khóa học sắp ra mắt CFD"
                />
              </a>
            </div>
            <div className="coursecoming__item-content">
              <p className="category label">Front-end</p>
              <h2 className="title --t2">
                <a
                  href="
                "
                >
                  Frontend Master
                </a>
              </h2>
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Ngày khai giảng</span>
                  <p className="title --t2">04/05/2023</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Hình thức học</span>
                  <p className="title --t2">Offline | Online</p>
                </div>
              </div>
              <div className="btnwrap">
                <a href="course-order.html" className="btn btn--primary">
                  Đăng Ký Học
                </a>
                <a href="" className="btn btn--border --black">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="coursecoming__item">
            <div className="coursecoming__item-img">
              <a href="">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
                  alt="Khóa học sắp ra mắt CFD"
                />
              </a>
            </div>
            <div className="coursecoming__item-content">
              <p className="category label">Front-End</p>
              <h2 className="title --t2">
                <Link to={PATHS.COURSES_DETAIL}>Web Responsive</Link>
              </h2>
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Ngày khai giảng</span>
                  <p className="title --t2">04/05/2023</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Hình thức học</span>
                  <p className="title --t2">Offline | Online</p>
                </div>
              </div>
              <div className="btnwrap">
                <a href="course-order.html" className="btn btn--primary">
                  Đăng Ký Học
                </a>
                <a
                  href="course-detail.html"
                  className="btn btn--border --black"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="coursecoming__item">
            <div className="coursecoming__item-img">
              <a href="course-detail.html">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                  alt="Khóa học sắp ra mắt CFD"
                />
              </a>
            </div>
            <div className="coursecoming__item-content">
              <p className="category label">Front-end</p>
              <h2 className="title --t2">
                <a href="course-detail.html">Frontend Newbie</a>
              </h2>
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Ngày khai giảng</span>
                  <p className="title --t2">04/05/2023</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Hình thức học</span>
                  <p className="title --t2">Offline | Online</p>
                </div>
              </div>
              <div className="btnwrap">
                <a href="course-order.html" className="btn btn--primary">
                  Đăng Ký Học
                </a>
                <a
                  href="course-detail.html"
                  className="btn btn--border --black"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses">
        <div className="container">
          <div className="heading">
            <h2 className="heading__title title --t2">
              Tất cả <span className="color--primary">khóa học</span>
            </h2>
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
          <div className="courses__btnall">
            <a href="courses.html" className="course__btn btn btn--grey">
              Tất cả khoá học
            </a>
          </div>
        </div>
      </section>
      <section className="teacher --scpadding">
        <div className="container">
          <div className="heading">
            <h2 className="heading__title title --t2">
              Đội Ngũ <span className="color--primary">CFD Circle</span>
            </h2>
            <div className="heading__content">
              <p className="text">
                Đội ngủ giảng viên và mentor tâm huyết nhiều kinh nghiệm được
                tích luỹ từ những dự án thực tế sẽ đồng hành cùng bạn xuyên suốt
                quá trình học và con đường phát triển sự nghiệp.
              </p>
              <div className="control">
                <div className="control__prev">
                  <img src="img/icon-btn-control.svg" alt="icon prev" />
                </div>
                <div className="control__next">
                  <img src="img/icon-btn-control.svg" alt="icon next" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teacher__list">
          <div className="container">
            <div className="teacher__list-inner">
              <div className="teacher__list-item">
                <div className="img">
                  <img
                    src="https://cfdcircle.vn/files/teachers/trannghia.jpg"
                    alt="Giảng viên CFD"
                  />
                </div>
                <div className="info">
                  <p className="label">Creative Front-End Dev</p>
                  <h3 className="title --t3">Trần Nghĩa</h3>
                </div>
              </div>
              <div className="teacher__list-item">
                <div className="img">
                  <img
                    src="https://cfdcircle.vn/files/teachers/huy.jpg"
                    alt="Giảng viên CFD"
                  />
                </div>
                <div className="info">
                  <p className="label">Fullstack Dev</p>
                  <h3 className="title --t3">Nguyễn Đức Huy</h3>
                </div>
              </div>
              <div className="teacher__list-item">
                <div className="img">
                  <img
                    src="https://cfdcircle.vn/files/teachers/thien.jpg"
                    alt="Giảng viên CFD"
                  />
                </div>
                <div className="info">
                  <p className="label">Senior Front-end Dev</p>
                  <h3 className="title --t3">Lê Châu Hữu Thiện</h3>
                </div>
              </div>
              <div className="teacher__list-item">
                <div className="img">
                  <img
                    src="https://cfdcircle.vn/files/teachers/kiet.jpg"
                    alt="Giảng viên CFD"
                  />
                </div>
                <div className="info">
                  <p className="label">Front-end Dev</p>
                  <h3 className="title --t3">Huỳnh Anh Kiệt</h3>
                </div>
              </div>
              <div className="teacher__list-item">
                <div className="img">
                  <img
                    src="https://cfdcircle.vn/files/teachers/an.jpg"
                    alt="Giảng viên CFD"
                  />
                </div>
                <div className="info">
                  <p className="label">Senior Front-End Dev</p>
                  <h3 className="title --t3">Nguyễn Văn Thái An</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured">
        <img src="img/icon-cfd.svg" alt="" className="featured__c" />
        <div className="container">
          <div className="featured__title">
            <h2 className="title --t2 --white">
              Những điều <br />
              <span>Đặc biệt</span> Tại CFD
            </h2>
          </div>
          <div className="featured__content">
            <div className="featured__content-item">
              <h3 className="title --t3 --white">
                Chương trình học thực chiến
              </h3>
              <p>
                CFD Circle đào tạo thực chiến trên dự án, đi thẳng vào trọng
                tâm, sát với yêu cầu thực tế, được truyền đạt từ những giảng
                viên giàu kinh nghiệm và tâm huyết.
              </p>
            </div>
            <div className="featured__content-item">
              <h3 className="title --t3 --white">Đồng hành và hỗ trợ 24/7</h3>
              <p>
                Giảng viên, mentor và học viên là một team gắn kết, cùng nhau hỗ
                trợ, kết nối và giúp đỡ lẫn nhau trong suốt quá trình học và
                phát triển sự nghiệp.
              </p>
            </div>
            <div className="featured__content-item">
              <h3 className="title --t3 --white">Hình thức học đa dạng</h3>
              <p>
                Học offline hoặc online cùng lớp offline thông qua Google Meet,
                học viên được hỗ trợ và đánh giá như học viên học offline.
              </p>
            </div>
            <div className="featured__content-item">
              <h3 className="title --t3 --white">
                Đặt chữ "Tâm" trong tất cả mọi việc
              </h3>
              <p>
                Cái tâm của người dạy, cùng sự tâm huyết của người học, ắt sẽ
                thành công trên con đường sự nghiệp của mỗi chúng ta.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------Testimonial-------------------------------- */}
      <section className="testimonial --scpadding">
        <div className="container">
          <div className="testimonial__inner">
            <div className="heading --white">
              <h2 className="heading__title title --t2 --white">
                Cảm nhận <span className="color--primary">học viên</span>
              </h2>
              <div className="control">
                <div className="control__prev">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 39L15 24L30 9"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="control__next">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 39L15 24L30 9"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="testimonial__slider">
              <div className="testimonial__slider-list">
                <div className="item">
                  <div className="text">
                    <div className="ct ct-1 active">
                      <div className="info">
                        <div className="name">
                          <h4 className="title --t3 --white">
                            Nguyễn Thanh Tùng
                          </h4>
                        </div>
                      </div>
                      <div className="content">
                        Khoá học này thực sự rất chất lượng. Mình từ một người
                        làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code
                        được một web hoàn chỉnh và đã đi làm front-end dev.
                        Mentor hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là
                        thực chiến luôn. Sau khoá học thì được giảng viên chia
                        sẻ kinh nghiệm.
                      </div>
                      <div className="bottom">
                        <span className="label">Học viên CFD1</span>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="ct ct-2">
                      <div className="info">
                        <div className="name">
                          <h4 className="title --t3 --white">Huỳnh Anh Kiệt</h4>
                        </div>
                      </div>
                      <div className="content">
                        Là một nơi truyền cảm hứng cho mình thực hiện tiếp ước
                        mơ và hoài bảo! Cảm ơn các thầy đã nổ lực hỗ trợ để mình
                        có thể tiếp cận ước mơ của mình gần hơn.
                      </div>
                      <div className="bottom">
                        <span className="label">Học viên CFD2</span>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="ct ct-3">
                      <div className="info">
                        <div className="name">
                          <h4 className="title --t3 --white">
                            Nguyễn Anh Tuấn
                          </h4>
                        </div>
                      </div>
                      <div className="content">
                        Mình đã từng tự học nhưng bị mất phương hướng trầm
                        trọng, sau khóa học mình đã tự code được 2 dự án riêng,
                        4 mentor dạy và hỗ trợ học viên rất có tâm, chuyện
                        livestream giải đáp thắc mắc cho học viên tới khuya là
                        thường xuyên. Sau khóa học mình học được cách tạo giao
                        diện sao cho đẹp tinh tế, thân thiện với người dùng.
                      </div>
                      <div className="bottom">
                        <span className="label">Học viên CFD1</span>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="ct ct-4">
                      <div className="info">
                        <div className="name">
                          <h4 className="title --t3 --white">
                            Nguyễn Văn Tuấn
                          </h4>
                        </div>
                      </div>
                      <div className="content">
                        Khóa học thực sự chất lượng, anh Nghĩa và mentor hỗ trợ
                        rất nhiệt tình. Sau khóa học riêng mình cảm thấy học hỏi
                        được rất nhiều.
                      </div>
                      <div className="bottom">
                        <span className="label">Học viên CFD1</span>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="images">
                    <div className="list">
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://cfdcircle.vn/files/testimonial/1648229180-thanh-tung.jpg"
                            />
                            <img
                              data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/1648229180-thanh-tung.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="ct_m">
                          <div className="info">
                            <div className="name">
                              <h4 className="title --t3 --white">
                                Nguyễn Thanh Tùng
                              </h4>
                            </div>
                          </div>
                          <div className="content">
                            Khoá học này thực sự rất chất lượng. Mình từ một
                            người làm Sale, chưa biết gì về HTML, CSS, JS, mà
                            giờ code được một web hoàn chỉnh và đã đi làm
                            front-end dev. Mentor hỗ trợ nhiệt tình, lên lớp học
                            lý thuyết xong là thực chiến luôn. Sau khoá học thì
                            được giảng viên chia sẻ kinh nghiệm.
                          </div>
                          <div className="bottom">
                            <span className="label">Học viên CFD1</span>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img src="img/facebook.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://cfdcircle.vn/files/testimonial/kiet.jpg"
                            />
                            <img
                              data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/kiet.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="info">
                          <div className="name">
                            <h4 className="title --t3 --white">
                              Huỳnh Anh Kiệt
                            </h4>
                          </div>
                        </div>
                        <div className="content">
                          Là một nơi truyền cảm hứng cho mình thực hiện tiếp ước
                          mơ và hoài bảo! Cảm ơn các thầy đã nổ lực hỗ trợ để
                          mình có thể tiếp cận ước mơ của mình gần hơn.
                        </div>
                        <div className="bottom">
                          <span className="label">Học viên CFD2</span>
                          <a href="https://www.facebook.com/" target="_blank">
                            <img src="img/facebook.svg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://cfdcircle.vn/files/testimonial/1648229287-anh-tuan.jpg"
                            />
                            <img
                              data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/1648229287-anh-tuan.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="ct_m">
                          <div className="info">
                            <div className="name">
                              <h4 className="title --t3 --white">
                                Nguyễn Anh Tuấn
                              </h4>
                            </div>
                          </div>
                          <div className="content">
                            Mình đã từng tự học nhưng bị mất phương hướng trầm
                            trọng, sau khóa học mình đã tự code được 2 dự án
                            riêng, 4 mentor dạy và hỗ trợ học viên rất có tâm,
                            chuyện livestream giải đáp thắc mắc cho học viên tới
                            khuya là thường xuyên. Sau khóa học mình học được
                            cách tạo giao diện sao cho đẹp tinh tế, thân thiện
                            với người dùng.
                          </div>
                          <div className="bottom">
                            <span className="label">Học viên CFD1</span>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img src="img/facebook.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://cfdcircle.vn/files/testimonial/tuan.jpg"
                            />
                            <img
                              data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/tuan.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="ct_m">
                          <div className="info">
                            <div className="name">
                              <h4 className="title --t3 --white">
                                Nguyễn Văn Tuấn
                              </h4>
                            </div>
                          </div>
                          <div className="content">
                            Khóa học thực sự chất lượng, anh Nghĩa và mentor hỗ
                            trợ rất nhiệt tình. Sau khóa học riêng mình cảm thấy
                            học hỏi được rất nhiều.
                          </div>
                          <div className="bottom">
                            <span className="label">Học viên CFD1</span>
                            <a href="https://www.facebook.com/" target="_blank">
                              <img src="img/facebook.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------faq-------------------------------- */}
      <section className="faq --scpadding">
        <div className="container">
          <div className="faq__inner">
            <div className="heading --noline --center">
              <h2 className="heading__title title --t2">
                Câu hỏi <span className="color--primary">thường gặp</span>
              </h2>
            </div>
            <div className="faq__list">
              <div className="accordion">
                <h3 className="accordion__title label">Thông tin chung</h3>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>
                        Muốn đặt câu hỏi với giảng viên, thì phải làm sao?
                      </strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    I'd like to demonstrate a powerful little pattern called
                    “Server-Fetched Partials” that offers some tangible benefits
                    over alternatives like VueJS for simple page interactions.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>Thành viên sáng lập CFD gồm những ai?</strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Đối với hình thức học Offline hoặc Online cùng lớp offline
                    thông qua Google Meet thì học viên có thể hỏi trực tiếp
                    trong lúc học, cũng như là hỏi trên nhóm chat Facebook của
                    lớp bạn đang học, giảng viên và mentor sẽ hỗ trợ 24/7.{" "}
                    <br />
                    <br />
                    Đối với hình thức học Video Mentor, học viên có thể đặt câu
                    hỏi trong các buổi dạy online của giảng viên, cũng như là
                    hỏi trên nhóm chat Telegram của lớp bạn đang học, giảng viên
                    và mentor sẽ hỗ trợ 24/7. <br />
                    <br />
                    Đối với hình thức học Video, học viên có thể đặt câu hỏi
                    thông qua nhóm chat Facebook hỗ trợ học viên của đội ngũ
                    giảng viên và mentor CFD Circle.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>
                        Học tại CFD Circle xong có đi làm hay thực tập được
                        không?
                      </strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Khóa học thực chiến tại CFD Circle giúp học viên trải nghiệm
                    dự án, quy trình làm việc và kỹ năng thực tế cần có để không
                    chỉ xin thực tập mà còn có thể ứng tuyển các vị trí chính
                    thức cao hơn như ở các công ty.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>
                        CFD Circle có cam kết đầu ra và cấp chứng chỉ không?
                      </strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Hiện tại, CFD Circle không quảng cáo bằng cách cam kết đầu
                    ra 100% để thu hút học viên, vì thế, CFD không cam kết đầu
                    ra và chứng chỉ, điều chúng tôi làm là cố gắng hết sức để
                    truyền đạt và giúp cho tất cả học viên có thể làm được việc
                    và các kỹ năng thực tế cần có sau khóa học và ứng tuyển ít
                    nhất là vị trí fresher cho các công ty.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>Học tại CFD Circle sao cho hiệu quả nhất?</strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Học viên cần chuẩn bị đủ thời gian để học Offline hoặc
                    Online, cũng như thời gian để hoàn thành bài tập, tự học tại
                    nhà.
                    <br />
                    <br /> Tự tin vào bản thân, kiên trì, cố gắng và sức chiến
                    đấu cao không lùi bước, chủ động hỏi những vấn đề chưa rõ để
                    được giải đáp và hỗ trợ. <br />
                    <br /> Hạn chế tối đa việc nghỉ học, nếu có nghỉ thì phải
                    xin và xem lại video được ghi lại trong lúc học để hoàn
                    thành bài tập và kiến thức ngày hôm đó.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>
                        Sau mỗi buổi học có quay video để xem lại không?
                      </strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    CFD Circle sẽ quay lại video buổi học offline để các bạn
                    không tham gia được có thể xem lại bằng cách đăng nhập vào
                    website CFD, chọn mục Khóa Học Của Tôi, chọn Khóa Đang Học
                    và xem lại video.
                    <br />
                    <br />
                    Bản quyền video thuộc về CFD Circle, nên nếu học viên tìm
                    cách tải video về và chia sẻ thì sẽ bị khóa tài khoản vĩnh
                    viễn.
                  </div>
                </div>
              </div>
              <div className="accordion">
                <h3 className="accordion__title label">Đăng ký, thanh toán</h3>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>
                        Đăng ký khóa học tại CFD Circle như thế nào?
                      </strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Bạn đăng ký tài khoản, chọn khóa học muốn học, điền đầy đủ
                    thông tin và bấm đăng ký học.
                    <br />
                    <br />
                    Đối với khoá học Offline: Bạn có thể thanh toán bằng chuyển
                    khoản ngân hàng, ví điện tử Momo hoặc đóng tiền mặt tại văn
                    phòng CFD Circle. Đội ngũ CFD Circle sẽ gửi email cho bạn để
                    xác nhận khi bạn đăng ký khoá học thành công.
                    <br />
                    <br />
                    Đối với khoá học Online hoặc Video: Bạn có thể thanh toán
                    bằng chuyển khoản ngân hàng hoặc ví điện tử Momo.
                    <br />
                    <br />
                    Thông tin chuyển khoản sẽ được gửi đến email của bạn ngay
                    khi bạn đăng ký khoá học, khoá học sẽ được kích hoạt khi bạn
                    thanh toán thành công.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>Làm sao để được giảm giá khoá học?</strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Đối với khoá học Offline hoặc Online cùng lớp Offline:
                    <br />
                    - Giảm giá cho mỗi học viên khi học theo nhóm 2 người trở
                    lên (áp dụng trên từng khoá học cụ thể).
                    <br />
                    Đối với khoá học video:
                    <br />- Chương trình giảm giá tuỳ từng mỗi khoá học khác
                    nhau.
                  </div>
                </div>
                <div className="accordion__content">
                  <div className="accordion__content-title">
                    <h4>
                      <strong>
                        Làm sao để đăng ký làm giảng viên/đối tác hoặc mentor
                        tại CFD Circle
                      </strong>
                    </h4>
                  </div>
                  <div className="accordion__content-text">
                    Đối với giảng viên/đối tác:
                    <br />
                    Bạn có thể đăng ký trở thành giảng viên/đối tác nội dung cho
                    CFD Circle thì vui lòng bấm{" "}
                    <a
                      href="https://cfdcircle.vn/dang-ky-giang-vien"
                      target="_blank"
                    >
                      <strong>đăng ký giảng viên</strong>
                    </a>
                    . <br />
                    <br />
                    Đối với mentor:
                    <br />
                    CFD Circle sẽ thông báo tuyển dụng mentor rộng rãi thông qua
                    website và nhóm Cộng đồng CFD Circle để các bạn có thể ứng
                    tuyển.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="heading --noline --center">
          <h2 className="heading__title title --t2">
            <span className="color--primary">CFD Circle</span> Là Một Team
          </h2>
        </div>
        <div className="list">
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc01129.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00541.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00545.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00662-1.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/beauty-1618471253214-2.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc6912.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc01147.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00677.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00678-1.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc6977.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00688.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc01114.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/img-001-(1).jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5918-2.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5506.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5511.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5587-2.jpg"
            alt=""
          />
          <img
            data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5637-1.jpg"
            alt=""
          />
        </div>
        <div className="controls">
          <div className="btn_ctr prev" />
          <span>Trượt qua</span>
          <div className="timeline">
            <div className="process" />
          </div>
          <div className="btn_ctr next" />
        </div>
      </section>
      <section className="callregister">
        <div className="container">
          <div className="callregister__content">
            <h3 className="title --t2">
              <span className="color--primary">trở thành một phần</span> của CFD
              Circle
            </h3>
            <p>
              Chúng tôi rất vui khi bạn quyết định trở thành một phần của CFD
              Circle để cùng nhau học hỏi, lan toả và chia sẻ những kinh nghiệm
              quý giá cho cộng đồng.
            </p>
            <a href="courses.html" className="btn btn--primary">
              Tham gia Khoá học
            </a>
            <a href="contact.html" className="btn btn--border --black">
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

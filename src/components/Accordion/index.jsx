import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Accordion = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState({});
  let slugSplit = slug?.split("-");
  const id = slugSplit[slugSplit.length - 1];
  useEffect(() => {
    if (slug) {
      fetch(`http://54.179.36.174:8080/api/v1/courses/${slug}`)
        .then((res) => res.json())
        .then((res) => {
          setCourse(res?.data);
        });
    }
  }, [slug]);
  console.log("content");
  const acc = course?.content || [];
  return (
    <>
      {" "}
      <div className="contentrow ctlession">
        <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
        <div className="accordion">
          {acc.map((item, index) => (
            <div className="accordion__content" key={index}>
              <div className="accordion__content-title">
                <h4>
                  <strong>{item.title}</strong>
                </h4>
              </div>
              <div className="accordion__content-text --transparent">
                {item.description.map((item1, index1) => (
                  <div className="item --lock" key={index1}>
                    <p>
                      <i>
                        <img
                          src="https://cfdcircle.vn/img/iconlock.svg"
                          alt="CFD Circle"
                        />
                      </i>
                      <span>{item1}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>HTML, SEO, BEM và thực hành code HTML</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Giới thiệu HTML</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Các thẻ HTML thông dụng</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Code HTML chuẩn SEO</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Phân tích bản thiết kế và hướng dẫn thực hành code HTML cho
                    dự án
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>CSS/CSS3 &amp; thực hành ứng dụng dự án</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>CSS phần 1, thực hành dự án Luxestate</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>CSS phần 2, thực hành dự án Luxestate</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Dàn layout với CSS Flexbox, thực hành dự án Luxestate
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>CSS3, thực hành dự án Luxestate</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Thực hành dự án Luxestate</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent"></div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hướng dẫn code &amp; tối ưu dự án Luxestate</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn code dự án Luxestate</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn tối ưu hình ảnh, HTML, CSS cho dự án</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Javascript nền tảng &amp; thực hành</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Tổng quan và khái niệm cơ bản Javascript.</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Làm việc với String và Loop</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Làm việc với Array &amp; Object</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thực hành bài tập luyện tư duy (phần 1)</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thực hành bài tập luyện tư duy (phần 2)</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thực hành bài tập luyện tư duy (phần 3)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Javascript ES6 &amp; thực hành</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Javascript ES6 là gì?</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Arrow function</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Template literals (template string)</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Destructuring, Rest</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Spread, Default parameter</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thực hành bài tập Javascript</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Báo cáo và đánh giá dự án Luxestate</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Báo cáo dự án Luxestate</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Đánh giá và góp ý dự án Luxestate</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>HTML nâng cao. Quy tắc BEM</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Các thẻ HTML nâng cao</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Quy tắc đặt tên class chuẩn BEM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Phân tích bản thiết kế và thực hành cắt hình, code HTML dự án
                  Wooder
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Phân tích bản thiết kế Wooder</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thực hành cắt hình, code HTML dự án Wooder</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>CSS nâng cao và chia layout với CSS Grid</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Các thuộc tính CSS nâng cao</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Ôn tập Flexbox</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Chia layout với CSS Grid</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>SCSS toàn diện</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Khái niệm SCSS</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Cài đặt trình biên dịch SCSS</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Xếp chồng – Nested Rule, Biến – variable, Kế thừa – Extends,
                    Import, Vòng lặp - Loop, Mệnh đề điều kiện IF
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Phân tách và cấu trúc file SCSS</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Responsive Website</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Phân biệt Responsive Website và Adaptive Website</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Breakpoints</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn code Responsive dự án Wooder</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Kiến thức tổng quan về Responsive Website</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Media Query</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Grunt và Cấu trúc dự án</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Khái niệm Grunt &amp; Cài đặt Grunt</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Cấu trúc file, thư mục dự án với SCSS và Grunt</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Thực hành code Responsive dự án Wooder</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Thực hành ứng dụng Grunt, SCSS vào dự án Wooder (Phần 2)
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Thực hành ứng dụng Grunt, SCSS vào dự án Wooder (Phần 1)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Javascript DOM, BOM, Javascript nâng cao và các thư viện JS
                  thông dụng
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Kiến thức Javascript DOM, BOM.</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Hướng dẫn ứng dụng các thư viện Javascript thông dụng vào dự
                    án
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Javascript nâng cao và thực hành bài tập</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Thực hành ứng dụng Javascript và thư viện vào dự án Wooder
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Thực hành các tính năng trên dự án bằng Javascript thuần
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thực hành ứng dụng thư viện Javascript trên dự án</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Báo cáo, đánh giá &amp; góp ý tối ưu dự án Wooder
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Báo cáo và đánh giá dự án</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Góp ý và tối ưu dự án</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Thực hành dự án Web Responsive</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Phân tích và triển khai dự án Web Responsive</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn hoàn hành dự án Web Responsive</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Thực hành dự án Web Responsive. Các kỹ thuật tối ưu tốc độ
                    website
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Báo cáo, đánh giá &amp; góp ý tối ưu Web Responsive
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Báo cáo và đánh giá dự án Web Responsive</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Góp ý tối ưu dự án Web Responsive</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Làm quen với các kiến thức React cơ bản</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Component, Props, State</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Style, Event</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>useEffect</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Xử lý form trong React</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thao tác cơ bản với Form</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Validate form</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Tối ưu Validate form</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Xây dựng Single Page Application trong React</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Giới thiệu và cài đặt thư viện react-router-dom@6</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Tìm hiểu qua các cách sử dụng react-router-dom phổ biến
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Xử lý layout</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Làm việc với API từ Backend</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Giới thiệu và làm việc với api từ Backend bằng fetch
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Cài đặt và setup axios</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Làm việc với RestFul API từ Backend</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Authentication với JWT</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Giới thiệu về JWT</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Làm chức năng login trong React với JWT</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành kiến thức React cơ bản</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Portal</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Cài đặt thư viện ngoài React</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>useId</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Thực hành dự án Đăng Ký Khóa Học (CFDCourses)</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Forgot và reset password</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Refresh token tự động</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Render trang chi tiết khóa học</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hoàn thành chức năng cá nhân</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Giới thiệu dự án</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Tối ưu và deploy dự án</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Lazy component</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>useMemo, useCallback, React.memo</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>useId, useTransition, useDeferredValue</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Deploy dự án lên Vercel</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Redux và những thư viện liên quan</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent"></div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Thực hành dự án E-commerce</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Setup dự án template</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Lấy thông tin sản phẩm</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Làm chức năng phân trang sản phẩm</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành trang sản phẩm</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Sort</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>minPrice, maxPrice</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Filter theo rating</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Tìm kiếm sản phẩm</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành trang cá nhân</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Đăng nhập / đăng ký</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thay đổi thông tin cá nhân</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Cập nhật avatar</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Sản phẩm yêu thích</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Quản lý sổ địa chỉ, sổ thanh toán</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành chức năng giỏ hàng</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thêm , xóa sản phẩm vào giỏ hàng</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Tăng / giảm số lượng sản phẩm trong giỏ hàng</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Xử lý popup thông báo khi thêm sản phẩm thành công
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành chức năng chi tiết sản phẩm</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Render thông tin cơ bản trang chi tiết sản phẩm</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Xử lý Image Modal</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Rút gọn nội dung với ShortContent</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành chức năng checkout</strong>
              </h4>
            </div>
            <div
              className="accordion__content-text --transparent"
              style={{ display: "none" }}
            >
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Xử lý form checkout</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Thêm / xóa promotion</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Xử lý đơn hàng thành công</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Hoàn thành chức năng Đặt hàng &amp; Đánh giá sản phẩm
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Xử lý trang xem sản phẩm đặt hàng</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Làm chức năng review sản phẩm khi nhận hàng thành công
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>Hoàn thành chức năng Translate</strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>
                    Tự làm chức năng Translate bằng thư viện tự xây dựng
                  </span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Error boundaries</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Slider</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Forgot và reset password</span>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">
              <h4>
                <strong>
                  Hướng dẫn làm CV, tìm việc và trả lời phỏng vấn ứng tuyển
                </strong>
              </h4>
            </div>
            <div className="accordion__content-text --transparent">
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn làm CV chuẩn IT</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn tìm việc</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Hướng dẫn trả lời phỏng vấn</span>
                </p>
              </div>
              <div className="item --lock">
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>Chia sẻ kinh nghiệm thực tế</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Accordion;

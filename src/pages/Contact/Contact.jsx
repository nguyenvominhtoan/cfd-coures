import React, { useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { validate } from "../../utils/validate";

const Contact = () => {
  const [form, setForm] = useState({});
  let [errors, setErrors] = useState({});
  const rules = {
    name: [{ required: true, message: "Vui lòng nhập" }],
    email: [{ required: true }, { regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }],
    phone: [{ required: true }, { regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/ }],
    topic: [{ required: true, message: "Vui lòng nhập" }],
  };
  const onSubmit = () => {
    // validate => error Object
    // let errorObj = {};
    // if (!!!form.name?.trim()) {
    //   errorObj.name = "Vui long nhap ho ten";
    // }
    // if (!!!form.email?.trim()) {
    //   errorObj.email = "Vui long nhap email";
    // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
    //   errorObj.email = "Vui long nhap dung dinh dang";
    // }
    // if (!!!form.phone?.trim()) {
    //   errorObj.phone = "Vui long nhap sdt";
    // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
    //   errorObj.phone = "Vui long nhap dung dinh dang";
    // }
    // if (!!!form.topic?.trim()) {
    //   errorObj.topic = "Vui long nhap ho ten";
    // }

    const errorObject = validate(rules, form);
    setErrors(errorObject);

    //check error => error ? fail : success
    if (Object.keys(errorObject)?.length === 0) {
      errors = {};
      alert("Submit success");
    } else {
      console.log("errors", errors);
    }
  };

  const register = (fieldName) => {
    return {
      value: form[fieldName],
      error: errors[fieldName],
      onChange: (ev) => {
        setForm({ ...form, [fieldName]: ev.target.value });
      },
    };
  };
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <div className="textbox">
          <h2 className="title --t2">Liên hệ &amp; Hỗ trợ</h2>
          <p className="desc">
            Bạn có bất cứ thắc mắc nào thì đừng ngần ngại liên hệ để được hỗ
            trợ?
            <br />
            Chúng tôi luôn ở đây
          </p>
        </div>
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <div className="sidebar">
              <div className="sidebar__address infor">
                <div className="infor__item">
                  <label className="label">CFD Circle</label>
                  <p className="title --t4">
                    666/46/29 Ba Tháng Hai, phường 14, quận 10, TPHCM
                  </p>
                </div>
                <div className="infor__item">
                  <label className="label">Email</label>
                  <p className="title --t4">info@cfdcircle.vn</p>
                </div>
                <div className="infor__item">
                  <label className="label">Số điện thoại</label>
                  <p className="title --t4">098 9596 913</p>
                </div>
              </div>
              <div className="sidebar__business">
                <p>
                  Đối với yêu cầu kinh doanh xin vui lòng gửi cho chúng tôi tại:
                </p>
                <a href="#">business@cfdcircle.vn</a>
              </div>
              <a href="#" className="sidebar__messenger btn btn--primary">
                Trò chuyện trực tuyến
              </a>
            </div>
            <div className="form">
              <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
              <div className="form-group">
                <Input
                  label="Ho va ten"
                  placeholder=""
                  required
                  {...register("name")}
                  // value={form.name}
                  // onChange={(ev) => {
                  //   setForm({ ...form, name: ev.target.value });
                  // }}
                  // error={errors.name}
                />
              </div>
              <div className="form-group">
                <label className="label">
                  Email <span>*</span>
                </label>
                <input
                  value={form.email}
                  onChange={(ev) => {
                    setForm({ ...form, email: ev.target.value });
                  }}
                  type="text"
                  className={`form__input ${!!errors.email ? "formerror" : ""}`}
                />
                <p className="error">{errors.email || ""}</p>
              </div>
              <div className="form-group">
                <label className="label">
                  Số điện thoại <span>*</span>
                </label>
                <input
                  value={form.phone}
                  onChange={(ev) => {
                    setForm({ ...form, phone: ev.target.value });
                  }}
                  type="text"
                  className={`form__input ${!!errors.phone ? "formerror" : ""}`}
                />
                <p className="error">{errors.phone || ""}</p>
              </div>
              <div className="form-group">
                {/* <label className="label">
                  Chủ đề cần hỗ trợ <span>*</span>
                </label>
                <select className="select form__input">
                  <option value="">--</option>
                  <option value="">Web Reponsive</option>
                  <option value="">ReactJS</option>
                </select> */}
                <Select
                  label={"Chủ đề cần hỗ trợ"}
                  required
                  options={[
                    {
                      value: "",
                      label: "--",
                    },
                    {
                      value: "newbie",
                      label: "Newbie",
                    },
                    {
                      value: "res",
                      label: "Responsive",
                    },
                    {
                      value: "react",
                      label: "ReactJs Master",
                    },
                  ]}
                  {...register("topic")}
                />
              </div>
              <div className="form-group">
                <label className="label">
                  Nội dung <span>*</span>
                </label>
                <textarea className="form__input" defaultValue={""} />
              </div>
              <div className="btncontrol">
                <button className="btn btn--primary" onClick={onSubmit}>
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import Input from "../../components/Input";
import { LOCAL_STORAGE } from "../../config/localStorage";
import { authService } from "../../services/authService";
import { validate } from "../../utils/validate";

const MyInfo = () => {
  const { profileInfo } = useAuthen();
  const [form, setForm] = useState({});
  const token = LOCAL_STORAGE.token;
  console.log(token);
  const [errors, setErrors] = useState({
    password: "****",
  });
  const rules = {
    firstName: [{ required: true, message: "Vui lòng nhập" }],
    email: [{ required: true }, { regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }],
    phone: [{ required: true }, { regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/ }],
    facebookURL: [{ required: true, message: "Vui lòng nhập" }],
    website: [{ required: true, message: "Vui lòng nhập" }],
    introduce: [{ required: true, message: "Vui lòng nhập" }],
  };
  const onSubmit = async (ev) => {
    ev.preventDefault();
    // call api again
    try {
      const errorObject = validate(rules, form);
      setErrors(errorObject);

      //check error => error ? fail : success
      if (Object.keys(errorObject)?.length === 0) {
        errors = {};
        alert("Submit success");
      } else {
        console.log("errors", errors);
      }
      const res = await authService.updateProfile(form, token);
      if (res.status) {
        message.success("Update Profile Succes");
      }
    } catch (error) {
      message.error("Update Profile Fail");
    }
  };
  useEffect(() => {
    if (profileInfo) {
      setForm({ ...form, ...profileInfo });
    }
  }, [profileInfo]);
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
    <div>
      {" "}
      <div className="tab__content-item" style={{ display: "block" }}>
        <form action="#" className="form" onSubmit={onSubmit}>
          <div className="form-container">
            <div className="form-group">
              <Input
                label="Họ và tên"
                placeholder="Vui lòng nhập tên"
                required
                {...register("firstName")}
              />
            </div>
            <div className="form-group">
              <Input
                label="Số điện thoại"
                placeholder="Vui lòng nhập số điện thoại"
                required
                {...register("phone")}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-group">
              <Input
                label="Email"
                placeholder="Vui lòng nhập email"
                required
                disabled
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <Input
                label="Mật khẩu"
                disabled
                required
                {...register("password")}
              />
            </div>
          </div>
          <div className="form-group">
            <Input
              label="Facebook"
              placeholder="Vui lòng nhập url"
              required
              {...register("facebookURL")}
            />
          </div>
          <div className="form-group">
            <Input
              label="Website"
              placeholder="Vui lòng nhập url"
              required
              {...register("website")}
            />
          </div>
          <div className="form-container textarea">
            <Input
              label="Giới thiệu bản thân"
              {...register("introduce")}
              renderInput={(inputProps) => <textarea {...inputProps} />}
            />
          </div>
          <p className="noti">Cập nhận thông tin thành công</p>
          <div className="form-group">
            <div className="btnsubmit">
              <button className="btn btn--primary">Lưu lại</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyInfo;

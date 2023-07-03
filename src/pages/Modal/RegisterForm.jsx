import React, { useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import Input from "../../components/Input";
import { validate } from "../../utils/validate";

const RegisterForm = ({ rederForm, setRenderForm }) => {
  const { onRegister } = useAuthen();
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const rules = {
    name: [{ required: true, message: "Vui lòng nhập" }],
    email: [
      { required: true },
      {
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Vui lòng điền đúng định dạng",
      },
    ],
    password: [{ required: true, message: "Vui lòng nhập" }],
  };
  const register = (fieldName) => {
    return {
      value: form[fieldName],
      error: error[fieldName],
      onChange: (ev) => setForm({ ...form, [fieldName]: ev.target.value }),
    };
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const errObj = validate(rules, form);
    setError(errObj);
    if (Object.keys(errObj)?.length === 0) {
      // handleSubmit?.(form);
      onRegister?.({
        firstName: form?.name || "",
        lastName: "",
        email: form?.email || "",
        password: form?.password || "",
      });
    } else {
      console.log("Validate Fail");
    }
  };
  return (
    <>
      <div className="modal__wrapper">
        <div
          className={`modal__wrapper-content mdregister ${
            rederForm === "register" ? "active" : ""
          }`}
        >
          <h3 className="title --t3">Đăng ky</h3>
          <form onSubmit={onSubmit} action="#" className="form">
            <div className="form-group">
              <Input
                // defaultvalue
                type="text"
                className="form__input formerror"
                placeholder="Họ và tên"
                {...register("name")}
              />
            </div>
            <div className="form-group">
              <Input
                // defaultvalue
                type="email"
                className="form__input"
                {...register("email")}
                placeholder="Địa chỉ email"
              />
            </div>
            <div className="form-group">
              <Input
                // defaultvalue
                type="password"
                className="form__input"
                placeholder="Mật khẩu"
                {...register("password")}
              />
            </div>
            <p className="form__argee">
              Với việc đăng ký, bạn đã đồng ý
              <a className="color--primary" href="#">
                Chính Sách Điều Khoản
              </a>
              {"{"}" "{"}"}
              của CFD
            </p>
            <button
              className="btn btn--primary form__btn-register"
              type="submit"
            >
              Đăng ký tài khoản
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

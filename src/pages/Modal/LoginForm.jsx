import React, { useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import Input from "../../components/Input";
import { validate } from "../../utils/validate";

const LoginForm = ({ rederForm, setRenderForm }) => {
  const { onLogin } = useAuthen();
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const rules = {
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
      onLogin?.(form);
    } else {
      console.log("Validate Fail");
    }
  };
  return (
    <div className="modal__wrapper">
      <div
        className={`modal__wrapper-content mdlogin ${
          rederForm === "login" ? "active" : ""
        }`}
      >
        <h3 className="title --t3">Đăng nhập</h3>
        <form onSubmit={onSubmit} action="#" className="form">
          <Input
            type="email"
            className="form__input"
            {...register("email")}
            placeholder="Địa chỉ email"
          />
          <Input
            type="password"
            className="form__input"
            {...register("password")}
            placeholder="Mật khẩu"
          />
          <div className="form__bottom">
            <p>
              Bạn chưa có tài khoản?
              <span
                className="color--primary btnmodal"
                data-modal="mdregister"
                onClick={() => setRenderForm("register")}
              >
                Đăng ký
              </span>
            </p>
            <a className="color--primary" href="#">
              Quên mật khẩu?
            </a>
          </div>
          <button className="btn btn--primary form__btn-register" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

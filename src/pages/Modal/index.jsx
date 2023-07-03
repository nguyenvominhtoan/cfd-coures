import React, { useState } from "react";
import { useAuthen } from "../../components/AuthenContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Modal = () => {
  const { isAuthenModalOpen, closeAuthenModal } = useAuthen();
  const [renderForm, setrenderForm] = useState("login");
  const onClose = () => {
    closeAuthenModal();
    setrenderForm("login");
  };
  console.log("isAuthenModalOpen", isAuthenModalOpen);
  return (
    <div className={`modal modallogin ${isAuthenModalOpen ? "open" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-close" onClick={onClose}>
          <img src="img/close_icon.svg" alt="CFD Register" />
        </div>
        <LoginForm
          // handleSubmit={onLogin}
          rederForm={renderForm}
          setRenderForm={setrenderForm}
        />
        <RegisterForm
          // handleSubmit={onRegister}
          rederForm={renderForm}
          setRenderForm={setrenderForm}
        />
      </div>
      <div className="modal__overlay" />
    </div>
  );
};

export default Modal;

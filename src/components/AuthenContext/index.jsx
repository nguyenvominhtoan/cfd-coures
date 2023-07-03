import { message } from "antd";
import React, { createContext, useContext, useState } from "react";
import { LOCAL_STORAGE } from "../../config/localStorage";
import { authService } from "../../services/authService";

const AuthenContext = createContext({});
export const AuthenProvider = ({ children }) => {
  const [isAuthenModalOpen, setisAuthenModalOpen] = useState(false);
  const openAuthenModal = () => {
    if (!!!localStorage.getItem(LOCAL_STORAGE.token)) {
      setisAuthenModalOpen(true);
    }
  };
  const closeAuthenModal = () => setisAuthenModalOpen(false);
  const onLogin = async (loginData) => {
    console.log("loginData", loginData);
    //call api
    try {
      const res = await authService.login(loginData);
      console.log("res", res);
      const { token, refreshToken } = res?.data?.data || {};
      localStorage.setItem(LOCAL_STORAGE.token, token);
      localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken);
      message.success("Dang nhap thanh cong");
      closeAuthenModal();
    } catch (error) {
      console.log("error", error);
      message.error("Dang ky that bai roi ku");
    }
  };
  const onRegister = async (registerData) => {
    //call api
    try {
      const res = await authService.register(registerData);
      console.log("res", res?.data?.data);
      if (res?.data?.data.id) {
        message.success("Dang ky thanh cong");
        onLogin({
          email: registerData.email,
          password: registerData.password,
        });
      }
    } catch (error) {
      console.log("error", error);
      message.error("Dang ky that bai roi ku");
    }
  };
  return (
    <AuthenContext.Provider
      value={{
        isAuthenModalOpen,
        openAuthenModal,
        closeAuthenModal,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
export const useAuthen = () => useContext(AuthenContext);

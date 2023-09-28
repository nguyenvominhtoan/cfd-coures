import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../../config/localStorage";
import { authService } from "../../services/authService";

const AuthenContext = createContext({});
export const AuthenProvider = ({ children }) => {
  const [isAuthenModalOpen, setisAuthenModalOpen] = useState(false);
  const [profileInfo, setprofileInfo] = useState({});
  useEffect(() => {
    const accesToken = localStorage.getItem(LOCAL_STORAGE.token);
    if (accesToken) {
      // call api get profile
      onGetProfile(accesToken);
    }
  }, []);

  const onGetProfile = async (token) => {
    const profileRes = await authService.getProfile(token);
    console.log("profileRes", profileRes?.data?.data);
    if (profileRes?.data?.data) {
      setprofileInfo(profileRes.data.data);
    }
  };
  const openAuthenModal = () => {
    if (!!!localStorage.getItem(LOCAL_STORAGE.token)) {
      setisAuthenModalOpen(true);
    }
  };
  const closeAuthenModal = () => setisAuthenModalOpen(false);
  const onLogin = async (loginData) => {
    console.log("loginData", loginData);
    //call api login
    try {
      const res = await authService.login(loginData);
      console.log("res", res);
      const { token, refreshToken } = res?.data?.data || {};
      localStorage.setItem(LOCAL_STORAGE.token, token);
      localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken);
      if (!!token) {
        //Get profile info
        const profileRes = await authService.getProfile(token);
        console.log("profileRes", profileRes?.data?.data);
        if (profileRes?.data?.data) {
          setprofileInfo(profileRes.data.data);
        }
        // Alert
        message.success("Login Success");
        // Close modal
        closeAuthenModal();
      }
    } catch (error) {
      console.log("error", error);
      message.error("Login Fail! Please check again");
    }
  };
  const onRegister = async (registerData) => {
    //call api register
    try {
      const res = await authService.register(registerData);
      console.log("res", res?.data?.data);
      if (res?.data?.data.id) {
        message.success("Register Success");
        onLogin({
          email: registerData.email,
          password: registerData.password,
        });
      }
    } catch (error) {
      console.log("error", error);
      message.error("Register Fail");
    }
  };
  const onLogOut = () => {
    localStorage.clear();
    //remove Item
    setprofileInfo({});
    message.success("Logout Success");
  };
  return (
    <AuthenContext.Provider
      value={{
        isAuthenModalOpen,
        openAuthenModal,
        closeAuthenModal,
        profileInfo,
        onLogin,
        onRegister,
        // onGetProfile,
        onLogOut,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
export const useAuthen = () => useContext(AuthenContext);

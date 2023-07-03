import React from "react";
import { Outlet } from "react-router-dom";
import { AuthenProvider } from "../components/AuthenContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Modal from "../pages/Modal";

const MainLayout = () => {
  return (
    <>
      <AuthenProvider>
        <Header />
        <Navbar />
        {/* Main */}
        <Outlet />
        <Footer />
        <Modal />
      </AuthenProvider>
    </>
  );
};

export default MainLayout;

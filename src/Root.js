import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./style.css";

const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scroll({
      top: 5,  
      // behavior:""
    });
    console.log("test")
}, [location.pathname])
return null
}

const Root = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Outlet/>
      {/* <Footer /> */}
    </div>
  );
};

export default Root
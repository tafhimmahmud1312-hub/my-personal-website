import React from "react";
import Header from "../header_and_nav/Header";
import { Outlet } from "react-router";
import Footer from "../header_and_nav/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

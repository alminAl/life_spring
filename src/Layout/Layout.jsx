import React from "react";
import NavBar from "../Components/DefaultPage/NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

import React from "react";
import LeftSidebar from "./LeftSidebar";

const Layout = ({ children, handleDragStart, handleDragEnd }) => {
  return (
    <div className="row h-100">
      <div className="col-3 bg-light ">
        <LeftSidebar
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
      </div>
      <div
        className="col-9"
        style={{ overflow: "hidden", overflowY: "auto", height: "100vh" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

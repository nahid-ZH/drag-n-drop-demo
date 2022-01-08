import React from "react";

const LeftSidebar = ({ handleDragStart, handleDragEnd }) => {
  const Item = ({ children, type }) => {
    return (
      <div
        className="border p-2 m-2 bg-white rounded text-center draggable"
        style={{ cursor: "grab" }}
        draggable={true}
        onDragStart={(e) => handleDragStart(e, type)}
        onDragEnd={(e) => handleDragEnd(e)}
      >
        {children}
      </div>
    );
  };
  return (
    <div>
      <Item type={"CAROUSEL"}>CAROUSEL</Item>
      <Item type={"PRODUCT"}>PRODUCT</Item>
    </div>
  );
};

export default LeftSidebar;

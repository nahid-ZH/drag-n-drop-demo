import React from "react";
import Icon from "./Icon";

const ComponentItem = ({
  children,
  id,
  handleDragStart,
  setComponentArr,
  dRef,
}) => {
  return (
    <div
      className="border p-2 m-2 bg-white rounded text-center draggable my-5 dropable"
      draggable={true}
      id={id}
      ref={dRef}
      style={{ background: "#dff9fb" }}
      onDragStart={(e) => handleDragStart(e)}
    >
      <div className="d-flex w-100">
        <div
          className="p-2 border d-flex rounded border-bottom-0"
          style={{ margin: "-48px auto 20px auto", background: "white" }}
        >
          <Icon
            className=" mx-3"
            type="delete"
            role="button"
            onClick={() => {
              setComponentArr((pState) => pState.filter((el) => el.id !== id));
            }}
          />
          <Icon className=" mx-3" type="drag" style={{ cursor: "move" }} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ComponentItem;

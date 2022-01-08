import React from "react";

const DropBox = ({ handleOnDrop, dRef }) => {
  return (
    <div
      className="rounded w-100 p-5 text-center dropbox"
      style={{ background: "#f8f9fa", border: "1px dashed gray" }}
      ref={dRef}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => handleOnDrop(e)}
    >
      Drop Here
    </div>
  );
};

export default DropBox;

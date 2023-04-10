import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    console.log("snaapa: ", snap.color);
    if (type === "filled") {
      return {
          color: "#fff",
          backgroundColor: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

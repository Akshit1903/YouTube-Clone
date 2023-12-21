import React from "react";

const ChipButton = ({ chipLabel }) => {
  return (
    <button className="bg-gray-100 rounded-lg p-2 m-2">{chipLabel}</button>
  );
};

export default ChipButton;

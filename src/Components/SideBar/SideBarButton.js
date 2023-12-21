import React from "react";

const SideBarButton = ({
  iconURL,
  title,
  isSelected,
  setSelectedSideBarButton,
}) => {
  return (
    <button
      className={
        "rounded-lg flex w-full items-center p-4 m-4 " +
        (isSelected && " bg-gray-200")
      }
      onClick={() => {
        setSelectedSideBarButton(title);
      }}
    >
      <img className="w-8 h-8" src={iconURL} alt={title} />
      <h6 className="px-4">{title}</h6>
    </button>
  );
};

export default SideBarButton;

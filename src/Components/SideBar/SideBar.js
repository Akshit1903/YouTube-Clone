import React, { useState } from "react";
import {
  HOME_ICON_IMAGE_URL,
  SHORTS_ICON_IMAGE_URL,
  SUSCRIPTIONS_ICON_IMAGE_URL,
} from "../../constants/images";
import SideBarButton from "./SideBarButton";
import { useSelector } from "react-redux";

const sideButtons = [
  { title: "Home", iconURL: HOME_ICON_IMAGE_URL },
  { title: "Shorts", iconURL: SHORTS_ICON_IMAGE_URL },
  { title: "Subscriptions", iconURL: SUSCRIPTIONS_ICON_IMAGE_URL },
];

const SideBar = () => {
  const [selectedSideBarButton, setSelectedSideBarButton] = useState("Home");
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  return (
    isSideBarOpen && (
      <div className="p-2 m-2">
        {sideButtons.map((sideButton, index) => (
          <SideBarButton
            {...sideButton}
            key={index}
            isSelected={selectedSideBarButton === sideButton.title}
            setSelectedSideBarButton={setSelectedSideBarButton}
          />
        ))}
      </div>
    )
  );
};

export default SideBar;

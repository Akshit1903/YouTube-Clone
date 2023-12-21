import React from "react";
import {
  HAMBURGER_MENU_ICON_URL,
  YOUTUBE_IMAGE_URL,
} from "../../constants/images";
import { useDispatch } from "react-redux";
import { toggleIsSideBarOpen } from "../../utils/slices/appSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          dispatch(toggleIsSideBarOpen());
        }}
      >
        <img
          className="w-10"
          src={HAMBURGER_MENU_ICON_URL}
          alt="hamburger-menu"
        />
      </button>
      <Link to="/">
        <img
          className="w-28 h-6 my-auto mx-2"
          src={YOUTUBE_IMAGE_URL}
          alt="youtube-logo"
        />
      </Link>
    </div>
  );
};

export default Home;

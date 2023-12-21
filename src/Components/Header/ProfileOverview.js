import React from "react";
import {
  CREATE_ICON_IMAGE_URL,
  DEFAULT_IMAGE_URL,
  NOTIFICATIONS_ICON_IMAGE_URL,
} from "../../constants/images";

const ProfileOverview = () => {
  return (
    <div className="flex justify-end">
      <button className="mx-3">
        <img className="w-7" src={CREATE_ICON_IMAGE_URL} alt="mic-button" />
      </button>
      <button className="mx-3">
        <img
          className="w-7"
          src={NOTIFICATIONS_ICON_IMAGE_URL}
          alt="notification-button"
        />
      </button>
      <button className="mx-3">
        <img className="w-7" src={DEFAULT_IMAGE_URL} alt="profile-button" />
      </button>
    </div>
  );
};

export default ProfileOverview;

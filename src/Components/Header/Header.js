import React from "react";
import Home from "./Home";
import Search from "./Search";
import ProfileOverview from "./ProfileOverview";

const Header = () => {
  return (
    <div className="p-3 grid grid-flow-col">
      <Home className="col-span-1" />
      <Search className="col-span-11" />
      <ProfileOverview className="col-span-1" />
    </div>
  );
};

export default Header;

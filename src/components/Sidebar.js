import React, { useContext } from "react";
import { SidebarContext } from "../utils/context/SidebarContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSideNavOpen } = useContext(SidebarContext);
  if (!isSideNavOpen) return null;
  return (
    <div className="min-w-16 p-5 shadow-lg col-span-1">
      <ul>
        <Link to="/">Home</Link>
      </ul>
    </div>
  );
};

export default Sidebar;

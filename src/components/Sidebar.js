import React, { useContext } from "react";
import { SidebarContext } from "../utils/context/SidebarContext";

const Sidebar = () => {
  const { isSideNavOpen } = useContext(SidebarContext);
  if (!isSideNavOpen) return null;
  return <div className="p-5 shadow-lg col-span-1">Sidebar</div>;
};

export default Sidebar;

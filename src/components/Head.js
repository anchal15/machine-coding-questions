import React, { useContext } from "react";
import { HAMBURGER_ICON } from "../utils/constant";
import { SidebarContext } from "../utils/context/SidebarContext";

const Head = () => {
  const { setSideNavBarValue } = useContext(SidebarContext);
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="col-span-1">
        <img className="h-8" alt="Hamburger icon" src={HAMBURGER_ICON} onClick={() => setSideNavBarValue()} />
      </div>
    </div>
  );
};

export default Head;

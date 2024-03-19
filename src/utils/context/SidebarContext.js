import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

const SidebarManager = ({ children }) => {
  const [isSideNavOpen, setSideNavBar] = useState(false);
  const setSideNavBarValue = () => {
    setSideNavBar((prev) => !prev);
  };

  return <SidebarContext.Provider value={{ isSideNavOpen, setSideNavBarValue }}>{children}</SidebarContext.Provider>;
};

export default SidebarManager;

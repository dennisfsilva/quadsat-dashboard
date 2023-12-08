import React, { createContext, useState, useMemo } from 'react';
import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import SidebarItem from './SidebarItem';
import SidebarMenu from './SidebarMenu';

// SidebarContext creation
const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  // State for controlling sidebar expansion and user menu visibility
  const [expanded, setExpanded] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle function for user menu visibility
  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  // Logo and user icon source paths
  const collapsedLogoSrc = require("../../assets/logo/Quadsat_element_yellow_400px.png");
  const expandedLogoSrc = require("../../assets/logo/Quadsat_yellow_400px.png");
  const userIconSrc = require("../../assets/icons/avatar.png");

  // Toggle function for sidebar expansion
  const toggleSidebar = () => setExpanded((prevExpanded) => !prevExpanded);

  // Memoized context value for optimization
  const contextValue = useMemo(() => ({ expanded }), [expanded]);

  // Dynamic container class name based on sidebar expansion state
  const containerClassName = `flex items-center justify-${expanded ? 'between' : 'center'} p-6 transition-all`;

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-quadsatPrimary border-r shadow-sm relative">
        {/* Logo and Sidebar Toggle Button */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={expanded ? expandedLogoSrc : collapsedLogoSrc}
            className={`overflow-hidden transition-all ${expanded ? "w-50 h-16" : "w-16 h-16"}`}
            alt="Logo"
            style={{ transition: 'width 0.3s, height 0.3s' }}
          />
          <button
            onClick={toggleSidebar}
            className="p-0 rounded bg-quadsatSecondary hover:bg-gray-100 transition-all absolute right-0 transform translate-x-1/2"
          >
            {expanded ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>

        {/* Sidebar Content */}
        <SidebarContext.Provider value={contextValue}>
          <ul className="flex-1 px-3 flex flex-col justify-center">
            {children}
          </ul>
        </SidebarContext.Provider>

        {/* User Avatar Section */}
        <div className={containerClassName}>
          <img src={userIconSrc} alt="User Icon" className="w-10 h-10 rounded" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">Dennis Silva</h4>
              <span className="text-xs text-white">dev.dennissilva@gmail.com</span>
            </div>
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
            >
              <MoreVertical size={20} />
            </button>
            {menuVisible && <SidebarMenu />} {/* Render the menu when it's visible */}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
export { SidebarItem, SidebarContext };

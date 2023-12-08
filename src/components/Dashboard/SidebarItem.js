import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SidebarContext } from './Sidebar';

const SidebarItem = ({ active, alert, iconActive, iconInactive, text }) => {
  // Get the expanded state from the SidebarContext
  const { expanded } = useContext(SidebarContext);
  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Dynamically get the icon based on active and hover states
  const getIcon = () => {
    const icon = active || isHovered ? iconActive : iconInactive;
    return React.cloneElement(icon, {
      width: '38',
      height: '38',
    });
  };

  return (
    <li
      className={`
        relative flex items-center py-2 px-4 my-4
        font-medium rounded cursor-pointer
        transition-colors group
        ${active
          ? 'bg-quadsatSecondary text-quadsatPrimary'
          : 'hover:bg-quadsatSecondary hover:text-quadsatPrimary text-white'
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'background-color 0.3s, color 0.3s' }}
    >
      <div className="flex items-center">
        <div className="mr-0">{getIcon()}</div>
        <span className="overflow-hidden">
          <div
            className={`transition-all ${expanded ? 'w-32 ml-2' : 'w-0'}`}
            style={{ transition: 'width 0.3s', whiteSpace: 'nowrap' }}
          >
            {text}
          </div>
        </span>
      </div>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-gray-400 ${expanded ? '' : 'top-2'}`}
        />
      )}

      {/* Display additional text for collapsed state */}
      {!expanded && (
        <div
          className={`
            absolute left-full rounded px-2 py-1 ml-6
            bg-gray-100 text-gray-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

SidebarItem.propTypes = {
  active: PropTypes.bool,
  alert: PropTypes.bool,
  iconActive: PropTypes.element,
  iconInactive: PropTypes.element,
  text: PropTypes.string.isRequired,
};

export default SidebarItem;

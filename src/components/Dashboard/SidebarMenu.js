import React from 'react';

const SidebarMenu = () => {
  // Function to handle menu item clicks
  const handleMenuItemClick = (action) => {
    // Implement the desired actions based on the selected menu item
    console.log(`Menu item clicked: ${action}`);
  };

  return (
    <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
      <div className="py-1">
        {/* Menu Item 1 */}
        <button
          className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          onClick={() => handleMenuItemClick('Option 1')}
        >
          Option 1
        </button>

        {/* Menu Item 2 */}
        <button
          className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          onClick={() => handleMenuItemClick('Option 2')}
        >
          Option 2
        </button>
        
      </div>
    </div>
  );
};

export default SidebarMenu;

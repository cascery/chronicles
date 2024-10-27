import React, { useState } from 'react';
import { FaStar, FaHome, FaUserPlus } from 'react-icons/fa';

const NavBar = () => {
  const [hoveredIcon, setHoveredIcon] = useState('');

  const navItems = [
    { name: 'Add', icon: <FaStar />, color: '#EDA8AD', path: '/MostM' },
    { name: 'Home', icon: <FaHome />, color: '#f67280', path: '/' },
    { name: 'Profile', icon: <FaUserPlus />, color: '#f67280', path: '/newartists' },
  ];

  return (
    <div>
      {/* Navbar for mobile: horizontal at the bottom */}
      <div className="md:w-2/4 flex justify-around bg-white m-2 fixed bottom-0 left-1/2 transform -translate-x-1/2 place-items-center p-3 w-[90%] rounded-3xl">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIcon(item.name)}
            onMouseLeave={() => setHoveredIcon('')}
          >
            {/* Icon with hover color change */}
            <div className={`text-[#41363E] text-2xl transition-all duration-300 ${hoveredIcon === item.name ? `text-[${item.color}]` : 'text-black'}`}>
              {item.icon}
            </div>
            {/* Optionally add labels for desktop view */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;

import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Dropdown, { DropdownItem } from './Dropdown';

interface NavItem {
  name: string;
  path: string;
  items: DropdownItem[];
  title: string;
  featured: {
    title: string;
    image: string;
    description: string;
  };
}

interface NavMenuProps {
  navItems: NavItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navItems }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when navigating to a new page
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle mouse enter on navigation items
  const handleMouseEnter = (name: string) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Set the active dropdown immediately
    setActiveDropdown(name);
  };

  // Handle mouse leave from the entire nav area
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Handle mouse enter on the dropdown to prevent it from closing
  const handleDropdownEnter = () => {
    // Clear any pending close timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle clicking on dropdown menu item
  const handleDropdownItemClick = (path: string, hash: string) => {
    // Check if it's a direct route for contact options
    if (hash.startsWith('/')) {
      navigate(hash);
    } else {
      navigate(`${path}${hash}`);
    }
    setActiveDropdown(null);
  };

  // Handle main navigation item click to ensure scroll to top
  const handleMainNavClick = () => {
    // Immediate scroll to top when clicking main nav items
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <nav 
      className="relative" 
      ref={navRef}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li 
            key={item.name} 
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.name)}
          >
            <Link 
              to={item.path}
              onClick={handleMainNavClick}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative nav-link text-lg"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link 
            to="/contactanos"
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
          >
            Contáctanos
          </Link>
        </li>
      </ul>

      {/* Dropdown container that will stay visible as long as mouse is over it or the nav */}
      {activeDropdown && (
        <div 
          className="dropdown-container"
          onMouseEnter={handleDropdownEnter}
        >
          <div className="dropdown-content">
            <div className="flex gap-10">
              <div className="flex flex-col">
                <ul className="space-y-3">
                  {(navItems.find(item => item.name === activeDropdown)?.items || []).map((subItem, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-2 hover:text-blue-700 cursor-pointer transition-colors"
                      onClick={() => handleDropdownItemClick(
                        navItems.find(item => item.name === activeDropdown)?.path || '/',
                        subItem.hash
                      )}
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs">
                        {index + 1}
                      </span>
                      <span className="text-base">{subItem.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="featured-content">
                <div className="w-full">
                  <img 
                    src={navItems.find(item => item.name === activeDropdown)?.featured.image}
                    alt={activeDropdown}
                    className="w-full h-38 object-cover rounded-lg shadow-md mb-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
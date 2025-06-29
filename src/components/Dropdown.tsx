import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownItemProps {
  hash: string;
  name: string;
  index: number;
  onClick: (hash: string) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ hash, name, index, onClick }) => {
  return (
    <li 
      className="flex items-center gap-3 hover:text-blue-700 cursor-pointer transition-colors"
      onClick={() => onClick(hash)}
    >
      <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm">
        {index + 1}
      </span>
      {name}
    </li>
  );
};

interface FeaturedContentProps {
  title: string;
  image: string;
  description: string;
  alt: string;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({ title, image, description, alt }) => {
  return (
    <div className="featured-content">
      <div className="w-full">
        <img 
          src={image}
          alt={alt}
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export interface DropdownItem {
  name: string;
  hash: string;
}

export interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (hash: string) => void;
  title: string;
  items: DropdownItem[];
  featured: {
    title: string;
    image: string;
    description: string;
  };
  triggerRef: React.RefObject<HTMLElement>;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  isOpen, 
  onClose, 
  onItemClick, 
  title, 
  items, 
  featured,
  triggerRef
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter on dropdown content
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle mouse leave on dropdown content with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 200); // 200ms delay before closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        triggerRef.current &&
        !dropdownRef.current.contains(event.target as Node) && 
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div 
      className="dropdown-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <div className="dropdown-content">
        <div className="flex gap-12">
          <div className="flex flex-col">
            <ul className="space-y-4">
              {items.map((item, index) => (
                <DropdownItem 
                  key={index}
                  index={index} 
                  name={item.name} 
                  hash={item.hash}
                  onClick={(hash) => {
                    onItemClick(hash);
                    onClose();
                  }}
                />
              ))}
            </ul>
          </div>
          <FeaturedContent 
            title={featured.title}
            image={featured.image}
            description={featured.description}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

export { DropdownItem }
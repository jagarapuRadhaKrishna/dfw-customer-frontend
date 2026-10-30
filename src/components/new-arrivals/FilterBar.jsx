'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function FilterBar() {
  const [activeFilters, setActiveFilters] = useState({
    material: null,
    brand: null,
    bedSize: null,
    storageType: null,
    seatingCapacity: null,
    sortBy: 'featured'
  });

  const filters = {
    material: ['Wood', 'Metal', 'Fabric', 'Leather', 'Engineered Wood'],
    brand: ['Divya Furniture World', 'Woodsworth', 'Bohemiana', 'CasaCraft', 'Others'],
    bedSize: ['Single', 'Queen', 'King', 'Super King'],
    storageType: ['With Storage', 'Without Storage', 'Hydraulic Storage'],
    seatingCapacity: ['2 Seater', '3 Seater', '4 Seater', '5+ Seater']
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'discount', label: 'Discount' }
  ];

  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        {/* All Filters Button */}
        <button className="all-filters-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 7h18M6 12h12M9 17h6"/>
          </svg>
          ALL FILTERS
        </button>

        {/* Filter Dropdowns */}
        <div className="filter-group">
          <FilterDropdown 
            label="PRIMARY MATERIAL" 
            options={filters.material}
            active={activeFilters.material}
          />
          
          <FilterDropdown 
            label="BRAND" 
            options={filters.brand}
            active={activeFilters.brand}
          />
          
          <FilterDropdown 
            label="BED SIZE" 
            options={filters.bedSize}
            active={activeFilters.bedSize}
          />
          
          <FilterDropdown 
            label="STORAGE TYPE" 
            options={filters.storageType}
            active={activeFilters.storageType}
          />
          
          <FilterDropdown 
            label="SEATING CAPACITY" 
            options={filters.seatingCapacity}
            active={activeFilters.seatingCapacity}
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="sort-by">
          <FilterDropdown 
            label="SORT BY" 
            options={sortOptions.map(opt => opt.label)}
            active={activeFilters.sortBy}
            alignRight
          />
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ label, options, active, alignRight }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Update menu position when opened
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuWidth = 280;
      
      // Calculate position below button
      let leftPos = rect.left;
      let rightPos = null;
      
      // If near right edge, align to right
      if (rect.left + menuWidth > window.innerWidth - 20) {
        leftPos = null;
        rightPos = window.innerWidth - rect.right;
      }
      
      setMenuPosition({
        top: rect.bottom + 8,
        left: leftPos,
        right: rightPos
      });

      // Recalculate on window resize
      const handleResize = () => {
        const newRect = buttonRef.current?.getBoundingClientRect();
        if (newRect) {
          let newLeftPos = newRect.left;
          let newRightPos = null;
          
          if (newRect.left + menuWidth > window.innerWidth - 20) {
            newLeftPos = null;
            newRightPos = window.innerWidth - newRect.right;
          }
          
          setMenuPosition({
            top: newRect.bottom + 8,
            left: newLeftPos,
            right: newRightPos
          });
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isOpen]);

  // Close dropdown when scrolling or clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Dropdown menu rendered via Portal to escape overflow contexts
  const dropdownMenu = isOpen && createPortal(
    <>
      <div 
        className="dropdown-overlay" 
        onClick={() => setIsOpen(false)}
      />
      <div 
        ref={menuRef}
        className={`dropdown-menu ${alignRight ? 'align-right' : ''}`}
        style={{
          top: `${menuPosition.top}px`,
          left: menuPosition.left !== null ? `${menuPosition.left}px` : 'auto',
          right: menuPosition.right !== null ? `${menuPosition.right}px` : 'auto'
        }}
      >
        {options.map((option, index) => (
          <label key={index} className="dropdown-item">
            <input type="checkbox" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </>,
    document.body
  );

  return (
    <>
      <div className="filter-dropdown">
        <button 
          ref={buttonRef}
          className="filter-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>{label}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="none" 
            viewBox="0 0 24 24"
            className={`dropdown-icon ${isOpen ? 'open' : ''}`}
            aria-hidden="true"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>
      {dropdownMenu}
    </>
  );
}

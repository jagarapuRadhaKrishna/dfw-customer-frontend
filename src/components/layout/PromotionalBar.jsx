'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { SERVICE_AVAILABILITY } from '@/lib/location-data';
import './PromotionalBar.css';

const PROMOTIONAL_MESSAGE = 'Additional up to ₹10,000 off. Use code EXTRA10K | Limited-time deal-';
const MESSAGE_DISPLAY_DURATION = 5000; // 5 seconds
const TOOLTIP_DISPLAY_DURATION = 2000; // 2 seconds
const DEBOUNCE_DELAY = 350; // 350ms

// Extended city data for suggestions
const CITY_DATA = [
  { city: 'Hyderabad', state: 'Telangana', pinCode: '500001' },
  { city: 'Bengaluru', state: 'Karnataka', pinCode: '560001' },
  { city: 'Chennai', state: 'Tamil Nadu', pinCode: '600001' },
  { city: 'Mumbai', state: 'Maharashtra', pinCode: '400001' },
  { city: 'Delhi', state: 'Delhi', pinCode: '110001' },
  { city: 'Kolkata', state: 'West Bengal', pinCode: '700001' },
  { city: 'Pune', state: 'Maharashtra', pinCode: '411001' },
  { city: 'Ahmedabad', state: 'Gujarat', pinCode: '380001' },
  { city: 'Jaipur', state: 'Rajasthan', pinCode: '302001' },
  { city: 'Lucknow', state: 'Uttar Pradesh', pinCode: '226001' },
  { city: 'Bhimavaram', state: 'Andhra Pradesh', pinCode: '534201' },
  { city: 'Palakollu', state: 'Andhra Pradesh', pinCode: '534260' },
  { city: 'Narasapur', state: 'Andhra Pradesh', pinCode: '534275' },
  { city: 'Visakhapatnam', state: 'Andhra Pradesh', pinCode: '530001' },
  { city: 'Vijayawada', state: 'Andhra Pradesh', pinCode: '520001' },
  { city: 'Guntur', state: 'Andhra Pradesh', pinCode: '522001' },
  { city: 'Nellore', state: 'Andhra Pradesh', pinCode: '524001' },
  { city: 'Tirupati', state: 'Andhra Pradesh', pinCode: '517501' },
  { city: 'Kakinada', state: 'Andhra Pradesh', pinCode: '533001' },
  { city: 'Rajahmundry', state: 'Andhra Pradesh', pinCode: '533101' },
  { city: 'Warangal', state: 'Telangana', pinCode: '506001' },
  { city: 'Nizamabad', state: 'Telangana', pinCode: '503001' },
  { city: 'Karimnagar', state: 'Telangana', pinCode: '505001' },
  { city: 'Ramagundam', state: 'Telangana', pinCode: '505211' },
  { city: 'Secunderabad', state: 'Telangana', pinCode: '500003' },
];

export default function PromotionalBar() {
  const [locationInput, setLocationInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [availabilityMessage, setAvailabilityMessage] = useState('');
  const [showAvailability, setShowAvailability] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const abortControllerRef = useRef(null);
  const messageTimerRef = useRef(null);
  const tooltipTimerRef = useRef(null);

  // Load saved location on mount
  useEffect(() => {
    try {
      const savedLocation = localStorage.getItem('selectedLocation');
      if (savedLocation) {
        const location = JSON.parse(savedLocation);
        setSelectedLocation(location);
        setLocationInput(`${location.city}, ${location.state}`);
      }
    } catch (e) {
      console.error('Error loading saved location:', e);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
        if (!locationInput.trim()) {
          setIsEditing(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [locationInput]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
      if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    };
  }, []);

  // Debounced search function
  const searchLocations = useCallback(async (query) => {
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Clear previous debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Don't search for empty input
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    // Minimum character requirements
    const isNumeric = /^\d+$/.test(query);
    if (isNumeric && query.length < 3) return;
    if (!isNumeric && query.length < 2) return;

    setIsLoading(true);

    // Set up debounce
    debounceTimerRef.current = setTimeout(async () => {
      abortControllerRef.current = new AbortController();

      try {
        // Simulate API call with local data
        await new Promise(resolve => setTimeout(resolve, 100));

        const searchTerm = query.toLowerCase();
        const matchedLocations = CITY_DATA.filter(location => {
          const cityMatch = location.city.toLowerCase().includes(searchTerm);
          const stateMatch = location.state.toLowerCase().includes(searchTerm);
          const pinMatch = location.pinCode && location.pinCode.includes(searchTerm);
          return cityMatch || stateMatch || pinMatch;
        }).slice(0, 8); // Limit to 8 suggestions

        setSuggestions(matchedLocations);
        setShowSuggestions(true);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error searching locations:', error);
        }
      } finally {
        setIsLoading(false);
      }
    }, DEBOUNCE_DELAY);
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);
    setSelectedIndex(-1);
    searchLocations(value);
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (location) => {
    setLocationInput(`${location.city}, ${location.state}`);
    setSelectedLocation(location);
    setShowSuggestions(false);
    setIsEditing(false);

    // Save to localStorage
    localStorage.setItem('selectedLocation', JSON.stringify(location));

    // Check serviceability
    checkServiceability(location);

    // Show tooltip after 2 seconds
    showDiscoveryTooltip();
  };

  // Check service availability
  const checkServiceability = (location) => {
    const availability = SERVICE_AVAILABILITY[location.city];

    if (!availability) {
      setAvailabilityMessage('Unable to verify your location. Please try again.');
    } else {
      // Determine the appropriate message based on available services
      const hasDelivery = availability.delivery;
      const hasRental = availability.rental;
      const hasHomeDemo = availability.homeDemo;
      const hasConsultation = availability.expertConsultation;

      // Count available services
      const availableServices = [hasDelivery, hasRental, hasHomeDemo, hasConsultation].filter(Boolean).length;

      if (availableServices === 0) {
        setAvailabilityMessage('Sorry! We don\'t currently operate in your location.');
      } else if (hasDelivery && hasRental && hasHomeDemo && hasConsultation) {
        // All services available
        setAvailabilityMessage(`✓ Great! We provide services in ${location.city}, ${location.state}.`);
      } else if (hasDelivery && hasRental && hasHomeDemo) {
        // Multiple services available
        setAvailabilityMessage('✓ Great! Shopping, rentals and furniture services are available in your location.');
      } else if (hasDelivery && hasRental) {
        setAvailabilityMessage('✓ Great! Shopping and rental services are available in your location.');
      } else if (hasDelivery) {
        setAvailabilityMessage('✓ Great! Furniture delivery is available in your location.');
      } else if (hasRental) {
        setAvailabilityMessage('✓ Good news! Furniture rental services are available in your location.');
      } else if (hasHomeDemo) {
        setAvailabilityMessage('✓ Repair and maintenance services are available in your location.');
      } else if (hasConsultation) {
        setAvailabilityMessage('✓ Explore verified furniture sellers available in your location.');
      } else {
        setAvailabilityMessage('✓ Services are available in your location with limited coverage.');
      }
    }

    setShowAvailability(true);

    // Clear previous timer
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current);
    }

    // Restore promotional message after 5 seconds
    messageTimerRef.current = setTimeout(() => {
      setShowAvailability(false);
    }, MESSAGE_DISPLAY_DURATION);
  };

  // Show discovery tooltip
  const showDiscoveryTooltip = () => {
    // Clear previous tooltip timer
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current);
    }

    setShowTooltip(true);

    // Hide tooltip after 2 seconds
    tooltipTimerRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, TOOLTIP_DISPLAY_DURATION);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionSelect(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

  // Handle edit icon click
  const handleEditClick = () => {
    setIsEditing(true);
    setLocationInput(selectedLocation ? `${selectedLocation.city}, ${selectedLocation.state}` : '');
    setShowSuggestions(false);
    setShowTooltip(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // Calculate dropdown position
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const updateDropdownPosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left,
      });
    }
  };

  useEffect(() => {
    if (showSuggestions) {
      updateDropdownPosition();
    }
  }, [showSuggestions]);

  // Generate stores page URL
  const getStoresUrl = () => {
    if (selectedLocation) {
      return `/stores?city=${encodeURIComponent(selectedLocation.city)}&state=${encodeURIComponent(selectedLocation.state)}`;
    }
    return '/stores';
  };

  return (
    <div className="promotional-bar">
      <div className="promotional-bar-container">
        {/* Left: Store Location */}
        <div className="store-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            className="store-icon"
          >
            <mask id="storefront_svg__a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
              <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
            </mask>
            <g mask="url(#storefront_svg__a)">
              <path
                fill="#304858"
                d="M5.073 20.75q-.758 0-1.283-.525a1.75 1.75 0 0 1-.525-1.283v-7.988a3.03 3.03 0 0 1-.906-1.288q-.303-.791-.013-1.708l1.012-3.304q.2-.63.679-1.017.478-.387 1.144-.387h13.65q.665 0 1.136.37.472.368.687 1.015l1.03 3.323q.291.917-.012 1.703a3.3 3.3 0 0 1-.907 1.312v7.97q0 .756-.524 1.282-.525.525-1.283.525zm9.143-10.5q.819 0 1.231-.501t.338-1.076l-.608-3.923h-2.411V8.7q0 .63.426 1.09.427.46 1.024.46m-4.5 0q.69 0 1.12-.46t.43-1.09V4.75H8.854l-.608 3.962q-.08.532.335 1.035t1.134.503m-4.45 0q.555 0 .955-.387a1.7 1.7 0 0 0 .494-.975l.589-4.138H5.181a.42.42 0 0 0-.26.072.43.43 0 0 0-.144.216l-.962 3.254q-.198.645.187 1.301.385.657 1.263.657m13.5 0q.81 0 1.242-.637.43-.639.207-1.32l-1.011-3.274a.38.38 0 0 0-.144-.207.47.47 0 0 0-.26-.062h-2.073l.588 4.138q.095.586.495.975.4.387.956.387m-13.693 9h13.885a.3.3 0 0 0 .22-.087.3.3 0 0 0 .087-.22V11.66q-.163.06-.273.075-.109.014-.227.014a2.7 2.7 0 0 1-1.187-.244q-.513-.245-.993-.783-.421.47-.996.748a3 3 3 0 0 1-1.312.279 2.8 2.8 0 0 1-1.2-.264 3.8 3.8 0 0 1-1.062-.763 3.3 3.3 0 0 1-1.05.762 2.9 2.9 0 0 1-1.188.265q-.676 0-1.27-.245a2.7 2.7 0 0 1-1.042-.782q-.63.63-1.162.829t-1.038.198q-.117 0-.242-.014a.9.9 0 0 1-.258-.075v7.281a.3.3 0 0 0 .087.221.3.3 0 0 0 .221.087"
              ></path>
            </g>
          </svg>

          {isEditing ? (
            <div className="location-input-wrapper" ref={dropdownRef}>
              <div className="location-capsule">
                <input
                  ref={inputRef}
                  type="text"
                  className="location-input"
                  placeholder="Enter PIN code or city"
                  value={locationInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                />
              </div>
              {showSuggestions && suggestions.length > 0 && (
                <ul
                  className="location-suggestions"
                  style={{
                    top: `${dropdownPosition.top}px`,
                    left: `${dropdownPosition.left}px`,
                  }}
                >
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={`${suggestion.city}-${index}`}
                      className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
                      onClick={() => handleSuggestionSelect(suggestion)}
                    >
                      <span className="suggestion-city">{suggestion.city}</span>
                      <span className="suggestion-state">{suggestion.state}</span>
                      {suggestion.pinCode && (
                        <span className="suggestion-pin">{suggestion.pinCode}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {isLoading && (
                <div
                  className="suggestions-loading"
                  style={{
                    top: `${dropdownPosition.top}px`,
                    left: `${dropdownPosition.left}px`,
                  }}
                >
                  <span className="loading-spinner"></span>
                </div>
              )}
              {showSuggestions && suggestions.length === 0 && !isLoading && locationInput.length >= 2 && (
                <div
                  className="suggestions-empty"
                  style={{
                    top: `${dropdownPosition.top}px`,
                    left: `${dropdownPosition.left}px`,
                  }}
                >
                  No locations found
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="location-display-wrapper">
                <div className="location-capsule">
                  <Link href={getStoresUrl()} className="location-link">
                    {selectedLocation ? `${selectedLocation.city}, ${selectedLocation.state}` : 'Enter PIN code or city'}
                  </Link>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="edit-icon"
                  onClick={handleEditClick}
                >
                  <path
                    fill="#304858"
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  ></path>
                </svg>
              </div>

              {/* Discovery Tooltip */}
              {showTooltip && selectedLocation && (
                <div className="discovery-tooltip">
                  <div className="tooltip-arrow"></div>
                  <div className="tooltip-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="tooltip-icon"
                    >
                      <path
                        fill="#304858"
                        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
                      ></path>
                    </svg>
                    <span className="tooltip-text">Click on the address link to explore our stores in your location.</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Center: Promotional Offer */}
        <div className="promotional-offer">
          {showAvailability ? (
            <span className="availability-message slide-up">
              {availabilityMessage}
            </span>
          ) : (
            <div className="offer-content slide-down">
              <span className="offer-text">
                {PROMOTIONAL_MESSAGE}
              </span>
              <Link href="/stores" className="shop-now-btn">
                Shop now!
              </Link>
            </div>
          )}
        </div>

        {/* Right: Navigation Links */}
        <div className="nav-links">
          <Link href="/gift-cards" className="nav-link">
            Gift Cards
          </Link>
          <Link href="/franchisee" className="nav-link">
            Become a Franchisee
          </Link>
          <Link href="/help" className="nav-link">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}

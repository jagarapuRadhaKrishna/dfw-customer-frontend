import React from 'react';
import Link from 'next/link';
import './PromotionalBar.css';

export default function PromotionalBar() {
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
                d="M5.073 20.75q-.758 0-1.283-.525a1.75 1.75 0 0 1-.525-1.283v-7.988a3.03 3.03 0 0 1-.906-1.288q-.303-.791-.013-1.708l1.012-3.304q.2-.63.679-1.017.478-.387 1.144-.387h13.65q.665 0 1.136.37.472.368.687 1.015l1.03 3.323q.291.917-.012 1.703a3.3 3.3 0 0 1-.907 1.312v7.97q0 .756-.524 1.282-.525.525-1.283.525zm9.143-10.5q.819 0 1.231-.501t.338-1.076l-.608-3.923h-2.411V8.7q0 .63.426 1.09.427.46 1.024.46m-4.5 0q.69 0 1.12-.46t.43-1.09V4.75H8.854l-.608 3.962q-.08.532.335 1.035t1.134.503m-4.45 0q.555 0 .955-.387a1.7 1.7 0 0 0 .494-.975l.589-4.138H5.181a.42.42 0 0 0-.26.072.43.43 0 0 0-.144.216l-.962 3.254q-.198.645.187 1.301.385.657 1.263.657m13.5 0q.81 0 1.242-.637.43-.639.207-1.32l-1.011-3.274a.38.38 0 0 0-.144-.207.47.47 0 0 0-.26-.062h-2.073l.588 4.138q.095.586.495.975.4.387.956.387m-13.693 9h13.885a.3.3 0 0 0 .22-.087.3.3 0 0 0 .087-.22V11.66q-.163.06-.273.075-.109.014-.227.014a2.7 2.7 0 0 1-1.187-.244q-.513-.245-.993-.783-.421.47-.996.748a3 3 0 0 1-1.312.279 2.8 2.8 0 0 1-1.2-.264 3.8 3.8 0 0 1-1.062-.763 3.3 3.3 0 0 1-1.05.762 2.9 2.9 0 0 1-1.188.265q-.676 0-1.27-.245a2.7 2.7 0 0 1-1.042-.782q-.63.63-1.162.829t-1.038.198q-.117 0-.242-.014a.9.9 0 0 1-.258-.075v7.281a.3.3 0 0 0 .087.221.3.3 0 0 0 .221.087"
              ></path>
            </g>
          </svg>
          <span className="store-label">Nearest Store -</span>
          <Link href="/stores" className="store-link">
            DIVYA FURNITURE WORLD
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="edit-icon"
          >
            <path
              fill="#304858"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            ></path>
          </svg>
        </div>

        {/* Center: Promotional Offer */}
        <div className="promotional-offer">
          <span className="offer-text">
            Additional up to ₹10,000 off. Use code <span className="code-highlight">EXTRA10K</span> | Limited-time deal-
          </span>
          <Link href="/stores" className="shop-now-btn">
            Shop now!
          </Link>
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

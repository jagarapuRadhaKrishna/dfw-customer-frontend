'use client';

import React from 'react';

export default function ErrorIllustration({ type }) {
  const illustrations = {
    connection: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="float">
          {/* Server */}
          <rect x="60" y="40" width="80" height="60" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
          <rect x="70" y="55" width="60" height="4" rx="2" fill="#cbd5e1"/>
          <rect x="70" y="65" width="40" height="4" rx="2" fill="#cbd5e1"/>
          <circle cx="120" cy="85" r="4" fill="#94a3b8"/>

          {/* Computer */}
          <rect x="40" y="120" width="120" height="40" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
          <rect x="50" y="128" width="100" height="24" rx="2" fill="#cbd5e1"/>
          <rect x="95" y="160" width="10" height="10" fill="#94a3b8"/>
          <rect x="85" y="170" width="30" height="4" rx="2" fill="#94a3b8"/>

          {/* Disconnected connection lines */}
          <line x1="100" y1="100" x2="100" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" className="connection-line"/>
          <circle cx="100" cy="110" r="4" fill="#ef4444" className="pulse"/>
        </g>
      </svg>
    ),

    server: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="float">
          {/* Server Rack */}
          <rect x="50" y="30" width="100" height="140" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>

          {/* Server Units */}
          <rect x="60" y="45" width="80" height="25" rx="4" fill="#cbd5e1"/>
          <circle cx="75" cy="57" r="3" fill="#f59e0b" className="pulse"/>
          <circle cx="85" cy="57" r="3" fill="#94a3b8"/>
          <rect x="95" y="53" width="35" height="8" rx="2" fill="#94a3b8"/>

          <rect x="60" y="80" width="80" height="25" rx="4" fill="#cbd5e1"/>
          <circle cx="75" cy="92" r="3" fill="#10b981"/>
          <circle cx="85" cy="92" r="3" fill="#94a3b8"/>
          <rect x="95" y="88" width="35" height="8" rx="2" fill="#94a3b8"/>

          <rect x="60" y="115" width="80" height="25" rx="4" fill="#cbd5e1"/>
          <circle cx="75" cy="127" r="3" fill="#ef4444" className="pulse"/>
          <circle cx="85" cy="127" r="3" fill="#94a3b8"/>
          <rect x="95" y="123" width="35" height="8" rx="2" fill="#94a3b8"/>

          {/* Warning Icon */}
          <circle cx="100" cy="165" r="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
          <path d="M100 158v8M100 170v2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>
    ),

    notFound: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="float">
          {/* Magnifying Glass */}
          <circle cx="85" cy="85" r="40" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3"/>
          <circle cx="85" cy="85" r="30" fill="#cbd5e1"/>
          <line x1="115" y1="115" x2="145" y2="145" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round"/>

          {/* Question Mark */}
          <text x="85" y="95" textAnchor="middle" fontSize="40" fill="#64748b" fontWeight="bold">?</text>

          {/* Small decorative elements */}
          <circle cx="45" cy="45" r="5" fill="#cbd5e1" opacity="0.5"/>
          <circle cx="155" cy="55" r="3" fill="#cbd5e1" opacity="0.5"/>
          <circle cx="55" cy="135" r="4" fill="#cbd5e1" opacity="0.5"/>
        </g>
      </svg>
    ),

    application: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="float">
          {/* Warning Triangle */}
          <path d="M100 30L170 150H30L100 30Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3"/>
          <path d="M100 70v40M100 120v10" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>

          {/* Cracked Code Lines */}
          <rect x="60" y="160" width="80" height="4" rx="2" fill="#e2e8f0"/>
          <rect x="70" y="168" width="60" height="4" rx="2" fill="#e2e8f0"/>
          <rect x="65" y="176" width="70" height="4" rx="2" fill="#e2e8f0"/>
        </g>
      </svg>
    ),

    offline: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="float">
          {/* WiFi Signal */}
          <path d="M100 140v20" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M100 120a20 20 0 0 1 20 20" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M100 100a40 40 0 0 1 40 40" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none"/>

          {/* X Mark */}
          <circle cx="100" cy="100" r="8" fill="#ef4444"/>
          <path d="M96 96l8 8M104 96l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>

          {/* Crossed Out */}
          <line x1="60" y1="60" x2="140" y2="140" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
        </g>
      </svg>
    ),

    accessDenied: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="float">
          {/* Lock */}
          <rect x="60" y="80" width="80" height="70" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3"/>
          <circle cx="100" cy="115" r="8" fill="#94a3b8"/>
          <rect x="96" y="123" width="8" height="15" rx="2" fill="#94a3b8"/>

          {/* Lock Shackle */}
          <path d="M75 80V55a25 25 0 0 1 50 0v25" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" fill="none"/>

          {/* X Mark */}
          <circle cx="100" cy="50" r="12" fill="#ef4444"/>
          <path d="M94 44l12 12M106 44l-12 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </g>
      </svg>
    ),
  };

  return (
    <div className="error-illustration">
      {illustrations[type] || illustrations.application}
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

export default function StoreDetails({
  name = 'Divya Furniture World',
  address = null,
  hours = null,
  email = null,
  phone = null,
  image = '/images/store/store-main-ambawadi.avif',
  directionsUrl = null
}) {
  return (
    <div className="mobile desktop tablet wrapper-class">
      <div className="obXZl">
        <div className="sF17s">
          <img src={image} alt={name || 'store-img'} />
        </div>
        <div className="VbuYj">
          <div className="ODjOK">
            <h1 className="abH4v">{name}</h1>
            {address && <div className="Sw3N_">{address}</div>}
            {hours && <div className="jIAuv">{hours}</div>}
            {email && <div className="xS7XS">Email: {email}</div>}
          </div>
          <div className="Prf9n">
            {phone && <a
              href={`tel:${phone}`}
              className="FBls_ YYygI"
              style={{ textDecoration: 'none' }}
              aria-label={`Call store at ${phone}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true">
                <path
                  fill="#EC7744"
                  d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
                />
              </svg>
              <span>{phone}</span>
            </a>}
            {directionsUrl && <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="zTzmw YYygI"
              style={{ textDecoration: 'none' }}
              aria-label="Get directions to store"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" aria-hidden="true">
                <mask id="get-direction_svg__a" width="24" height="25" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                  <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
                </mask>
                <g mask="url(#get-direction_svg__a)">
                  <path
                    fill="#fff"
                    d="m10.377 14.104-5.744-2.327a.8.8 0 0 1-.427-.352 1 1 0 0 1-.13-.485q0-.247.142-.486a.85.85 0 0 1 .44-.354l13.69-5.126a.78.78 0 0 1 .518-.044.96.96 0 0 1 .434.251.96.96 0 0 1 .25.434q.07.25-.044.518L14.36 19.817a.85.85 0 0 1-.35.434.9.9 0 0 1-.485.145 1 1 0 0 1-.487-.136.8.8 0 0 1-.353-.431zm3.115 3.735 4.166-11.016L6.623 10.97l4.9 1.97z"
                  />
                </g>
              </svg>
              <span>Get Directions</span>
            </a>}
            <Link href="/enquiry" className="FBls_ YYygI" style={{ textDecoration: 'none' }}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

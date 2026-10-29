import React from 'react';
import Link from 'next/link';

export default function StorePromotionalBanner({
  desktopImage = '/images/store/store-banner-desktop.avif',
  mobileImage = '/images/store/store-banner-mobile.avif',
  linkUrl = '/sections/stores'
}) {
  return (
    <>
      <div className=" desktop wrapper-class">
        <div className="zjPq8 ">
          <Link href={linkUrl}>
            <img src={desktopImage} alt="Check Out New Designs At Our Stores" />
          </Link>
        </div>
      </div>
      <div className="mobile tablet wrapper-class">
        <div className="zjPq8 ">
          <Link href={linkUrl}>
            <img src={mobileImage} alt="Check Out New Designs At Our Stores" />
          </Link>
        </div>
      </div>
    </>
  );
}

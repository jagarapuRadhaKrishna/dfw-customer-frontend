import React from 'react';
import Link from 'next/link';

export default function StoreBreadcrumb({ currentStore = 'Stores' }) {
  return (
    <div className="mobile desktop tablet wrapper-class">
      <div className="HJkeb">
        <div className="iEBWF">
          <nav aria-label="Breadcrumb">
            <ol className="aQm5U">
              <li>
                <Link className="O8rOO" href="/">
                  Home
                </Link>
              </li>
              <li>
                <span className="fBFV8">{currentStore}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="gBK8r">
        <div className="smvLk"></div>
      </div>
    </div>
  );
}

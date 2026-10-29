import React from 'react';

export default function NearbyStores({
  title = 'Other Verified Physical Locations',
  stores = []
}) {
  return (
    <div className="mobile desktop tablet wrapper-class">
      <div className="equ3E">
        <h2 className="z7mCx">{title}</h2>
        <div className="oev8E undefined">
          <div className="G5V3j undefined">
            {stores.length > 0 ? stores.map((store, index) => (
              <div key={store.name || index} className="Q844D">
                <img className="YlUTX" alt={store.name} src={store.image} />
                <div className="yUQZt">
                  <p className="E2f5h">{store.name}</p>
                  <p className="enyxH qGuen">{store.address}</p>
                  <p className="undefined qGuen">{store.hours}</p>
                </div>
              </div>
            )) : <p>No other verified physical locations are listed.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

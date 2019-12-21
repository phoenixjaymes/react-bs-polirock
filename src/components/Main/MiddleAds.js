import React from 'react';

import adTablet from '../../img/middle-ad.png';
import adMobile from '../../img/horizontal-ad-mobile-02.png';

const MiddleAds = props => {

  const width = window.innerWidth;
    // const height = window.innerHeight;
    let useAd = adTablet;

    if (width < 576 ) {
      useAd = adMobile;
    }

  return (
    <div className="text-center my-3 pb-3 border-bottom ads">
      <img src={useAd} alt="advertisement" />
    </div>
  );
}

export default MiddleAds;
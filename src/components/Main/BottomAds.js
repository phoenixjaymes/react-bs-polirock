import React from 'react';

import adTablet from '../../img/bottom-ad.png';
import adMobile from '../../img/horizontal-ad-mobile-01.png';

const BottomAds = props => {
    const width = window.innerWidth;
    let useAd = adTablet;

    if (width < 576 ) {
      useAd = adMobile;
    }

  return (
    <div className="text-center mt-3 ads">
      <img src={useAd} alt="advertisement" />
    </div>
  );
}

export default BottomAds;
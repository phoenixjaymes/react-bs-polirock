import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BandDetails from './BandDetails';

const BandsItem = ({ band, isIncludedBandDetails }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleClick = () => setIsInfoVisible(!isInfoVisible);

  return (
    <div className="mb-2 border-bottom">
      <div className="band">
        <div className="band__rank">
          <p>{band.rank}</p>
        </div>

        <div className="band__img">
          <img src={`http://phoenixjaymes.com/projects/polirock/bandfiles/${band.img}`} alt="Band" />
        </div>

        <ul className="band__data pl-2 pl-sm-3">
          <li>
            <strong>Band Name: </strong>
            {band.name}
          </li>
          <li>
            <strong>Political Song(s): </strong>
            {band.song}
          </li>
          <li>
            <strong>Votes: </strong>
            {band.votes}
          </li>
          <li>
            <strong>Party: </strong>
            {band.party}
          </li>

          { isIncludedBandDetails && (
            <li to="#">
              <span className="link-look" onClick={handleClick}>{isInfoVisible ? 'Less Info' : 'More Info'}</span>
            </li>
          )}
        </ul>
      </div>

      { isIncludedBandDetails && (
        <div className={isInfoVisible ? 'band-info-visible' : 'band-info-hidden'}>
          <BandDetails name={band.name} bid={band.id} details={band.details} />
        </div>
      )}
    </div>
  );
};

BandsItem.propTypes = {
  band: PropTypes.shape({
    details: PropTypes.object,
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    party: PropTypes.string,
    path: PropTypes.string,
    rank: PropTypes.string,
    song: PropTypes.string,
    votes: PropTypes.string,
  }),
  isIncludedBandDetails: PropTypes.bool,
};

BandsItem.defaultProps = {
  isIncludedBandDetails: true,
};

export default BandsItem;

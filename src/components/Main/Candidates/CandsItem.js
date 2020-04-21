import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CandDetails from './CandDetails';

const CandsItem = ({ cand, isIncludedCandDetails }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleClick = () => setIsInfoVisible(!isInfoVisible);

  return (
    <div className="mb-2 border-bottom">
      <div className="band">
        <div className="band__rank">
          <p>{cand.rank}</p>
        </div>

        <div className="band__img">
          <img src={`https://phoenixjaymes.com/projects/polirock/images/candidates/${cand.img}`} alt="Candidate" />
        </div>

        <ul className="band__data pl-2 pl-sm-3">
          <li>
            <strong>Candidates Name: </strong>
            {cand.name}
          </li>
          <li>
            <strong>Hometown: </strong>
            {cand.hometown}
          </li>
          <li>
            <strong>Votes: </strong>
            {cand.votes}
          </li>
          <li>
            <strong>Party: </strong>
            {cand.party}
          </li>

          {isIncludedCandDetails && (
            <li to="#">
              <span className="link-look" onClick={handleClick}>{isInfoVisible ? 'Less Info' : 'More Info'}</span>
            </li>
          )}
        </ul>
      </div>

      {isIncludedCandDetails && (
        <div className={isInfoVisible ? 'band-info-visible' : 'band-info-hidden'}>
          <CandDetails name={cand.name} cid={cand.id} details={cand.details} />
        </div>
      )}
    </div>
  );
};

CandsItem.defaultProps = {
  isIncludedCandDetails: true,
};

CandsItem.propTypes = {
  cand: PropTypes.shape({
    details: PropTypes.object,
    id: PropTypes.string,
    hometown: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    party: PropTypes.string,
    rank: PropTypes.string,
    votes: PropTypes.string,
  }),
  isIncludedCandDetails: PropTypes.bool,
};

export default CandsItem;

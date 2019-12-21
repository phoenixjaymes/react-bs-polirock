import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Poll from '../Poll';

const CandDetails = ({ name, details }) => (
  <div className="band-details border pt-3">
    <Container>
      <Row>
        <Col md={6}>
          <p>
            <strong>Snapshot:</strong>
            <br />
            {details.snapshot}
          </p>
          <p>
            <strong>Age:</strong>
            <br />
            {details.age}
          </p>
          <p>
            <strong>Campaign Song:</strong>
            <br />
            {details.song}
          </p>
          <p>
            <strong>Superstitions:</strong>
            <br />
            {details.superstitions}
          </p>
          <p>
            <strong>Official Status:</strong>
            <br />
            {details.status}
          </p>
          <p>
            <strong>Running as a:</strong>
            <br />
            {details.as}
          </p>
          <p>
            <strong>Number of Lies Told:</strong>
            <br />
            {details.lies}
          </p>
        </Col>
        <Col md={6}>
          <Poll heading={`${name} is/are:`} otherInput={details.voterPollOtherInput} comments={details.comments} />
        </Col>
      </Row>
    </Container>
  </div>
);

CandDetails.propTypes = {
  name: PropTypes.string,
  details: PropTypes.shape({
    age: PropTypes.string,
    as: PropTypes.string,
    comments: PropTypes.array,
    lies: PropTypes.string,
    snapshot: PropTypes.string,
    song: PropTypes.string,
    status: PropTypes.string,
    superstitions: PropTypes.string,
    voterPollOtherInput: PropTypes.object,
  }),
};

export default CandDetails;

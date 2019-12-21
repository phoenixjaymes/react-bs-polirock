import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Poll from '../Poll';

const BandDetails = ({ name, details }) => (
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
            <strong>Band Members:</strong>
            <br />
            {details.members}
          </p>
          <p>
            <strong>Genre:</strong>
            <br />
            {details.genre}
          </p>
          <p>
            <strong>City:</strong>
            <br />
            {details.city}
          </p>
          <p>
            <strong>State:</strong>
            <br />
            {details.state}
          </p>
          <p>
            <strong>Country:</strong>
            <br />
            {details.country}
          </p>
          <p>
            <strong>Label:</strong>
            <br />
            {details.label}
          </p>
          <p>
            <strong>Label Class:</strong>
            <br />
            {details.class}
          </p>
          <p>
            <strong>Web:</strong>
            <br />
            <Link to="/">www</Link>
          </p>
          <p>
            <strong>MySpace:</strong>
            <br />
            <Link to="/">www</Link>
          </p>
        </Col>
        <Col md={6}>
          <Poll heading={`${name} is/are:`} otherInput={details.voterPollOtherInput} comments={details.comments} />
        </Col>
      </Row>
    </Container>
  </div>
);


BandDetails.propTypes = {
  name: PropTypes.string,
  details: PropTypes.shape({
    albums: PropTypes.string,
    city: PropTypes.string,
    class: PropTypes.string,
    comments: PropTypes.array,
    country: PropTypes.string,
    genre: PropTypes.string,
    label: PropTypes.string,
    members: PropTypes.string,
    myspace: PropTypes.string,
    snapshot: PropTypes.string,
    state: PropTypes.string,
    voterPollOtherInput: PropTypes.object,
    web: PropTypes.string,
  }),
};

export default BandDetails;

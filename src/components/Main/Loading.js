import React from 'react';
import { Container } from 'react-bootstrap';

const Loading = props => {
  return (
    <Container as="main">
      <h2>Loading the page</h2>
      <p>Be patient it's coming.</p>
    </Container>
  );
}

export default Loading;
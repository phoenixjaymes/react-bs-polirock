import React from 'react';
import { Container } from 'react-bootstrap';

const LoadingError = props => {
  return (
    <Container as="main">
      <h2>Unable to Load Page</h2>
      <p>We're sorry! Please try again.</p>
      <p>PoliRock is a website devoted to bridging the gap between music and politics.<br />We believe in supporting free speech and expression through music.</p>
    </Container>
  );
}

export default LoadingError;
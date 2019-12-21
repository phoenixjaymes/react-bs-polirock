import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container
} from 'react-bootstrap';

import MiddleAds from './MiddleAds';

const Bands = () => {

  return (
    <Container as="main">
      <h1>404 Not Found</h1>
      <p>Buddy, you're a boy, make a big noise<br/>
        Playing in the street, gonna be a big man someday<br/>
        You got mud on your face, you big disgrace<br/>
        Kicking your can all over the place, singin'</p>
      <p>We will, we will rock you<br/>
        We will, we will rock you</p>
      <p><strong>But appenttly we won't find your page!</strong></p>
      <h2><strong><Link to="/">Home</Link></strong></h2>
      <MiddleAds />
      
    </Container>
  );

}

export default Bands;
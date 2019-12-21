import React from 'react';
import PropTypes from 'prop-types';

import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';

import SectionHeading from './SectionHeading';
import SideAds from './SideAds';

import Terms from '../../data/terms';

const Text = ({type}) => {
  let pageText = '';
  let heading = 'FAQ'

  if (type === 'faq') {
    pageText = Terms.data;
    heading = 'Frequently Asked Questions';
  } else if (type === 'terms') {
    pageText = Terms.data;
    heading = 'Terms of Use';
  } else if (type === 'privacy') {
    pageText = Terms.data;
    heading = 'Privacy Policy';
  } else if (type === 'about') {
    pageText = Terms.data;
    heading = 'About PoliRock';
  } else if (type === 'rules') {
    pageText = Terms.data;
    heading = 'Contest Rules';
  } else if (type === 'contact') {
    pageText = Terms.data;
    heading = 'Contact Us';
  }

  return (
    <Container>
      <Row>
        <Col>
          <SectionHeading heading={heading} />
          {pageText}
        </Col>
        <Col md={4}>
          <SideAds />
        </Col>
      </Row>
    </Container>
  );
}

Text.propTypes = {
  type: PropTypes.string.isRequired
}


export default Text;
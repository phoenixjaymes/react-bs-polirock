import React from 'react';
import PropTypes from 'prop-types';

import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';

import SectionBordered from '../SectionBordered';
import SectionHeading from '../SectionHeading';
import BandSignUp from './BandSignUp';
import UserSignUp from './UserSignUp';
import LoginForm from './LoginForm';
import SideAds from '../SideAds';
import BottomAds from '../BottomAds';

const FormContainer = ({type}) => {
  let form = <LoginForm />;
  let heading = 'Log In'

  if (type === 'band-signup') {
    form = <BandSignUp />;
    heading = 'Sign Up Now';
  } else if (type === 'user-signup') {
    form = <UserSignUp />;
    heading = 'Sign Up Now';
  } else if (type === 'login') {
    form = <LoginForm />;
    heading = 'Login';
  }

  const adToShow = window.innerWidth < 768 ? <BottomAds /> : <SideAds />;

  return (
    <Container as="main">
      <Row>
        <Col>
          <SectionBordered color="blue">
            <SectionHeading color="blue" heading={heading} />
            {form}
          </SectionBordered>
        </Col>
        <Col md={4}>
          {adToShow}
        </Col>
      </Row>
    </Container>
  );
}

FormContainer.propTypes = {
  type: PropTypes.string.isRequired
}


export default FormContainer;
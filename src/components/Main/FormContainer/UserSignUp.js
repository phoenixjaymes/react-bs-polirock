import React from 'react';
// import { Link } from 'react-router-dom';

import { 
  Form,
  Row,
  Col,
  Button 
} from 'react-bootstrap';

const Login = props => {
  return (
    <Form className="px-2 pb-2">
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Confirm Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          City
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="City" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
        <Form.Label column sm={2}>State</Form.Label>
        
        <Col sm={10}>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Country
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="City" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign Up Now</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Login;
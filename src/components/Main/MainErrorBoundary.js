import React, { Component } from 'react';

import {
  Container,
  Jumbotron
} from 'react-bootstrap';

export default class MainErrorBoundary extends Component {

  state = {
    hasError: false
  }

componentDidCatch() {
  this.setState({ hasError: true });
}

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Jumbotron>
            <h2>Wow, we're so sorry</h2>
            <p>
              There was a problem with this page. A message has been sent to the site administrator and will be back up and running as soon as possible.
            </p>
          </Jumbotron>
        </Container>
      );
    } 
    return this.props.children;
  }
}
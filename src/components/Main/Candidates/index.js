import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from 'react-bootstrap';

import CandsPagination from './CandsPagination';
import CandsContainer from './CandsContainer';
import MiddleAds from '../MiddleAds';
import Loading from '../Loading';
import LoadingError from '../LoadingError';

class Candidates extends Component {
  state = {
    loading: true,
    error: false,
    candsData: {},
  }

  componentDidMount() {
    const path = 'http://phoenixjaymes.com/data/polirock/get-candidates.php';
    fetch(path)
      .then(reponse => reponse.json())
      .then((responseData) => {
        this.setState({
          candsData: responseData.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
        console.log('Error fetching and parsing data', error);
      });
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />;

  renderCandidates = () => {
    const { heading } = this.props;
    const { candsData } = this.state;
    return (
      <Container as="main">
        <CandsPagination heading={heading} />
        <CandsContainer data={candsData.slice(0, 5)} />
        <MiddleAds />
        <CandsContainer data={candsData.slice(5)} />
        <CandsPagination heading={heading} />
      </Container>
    );
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError();
    }

    return this.renderCandidates();
  }
}

Candidates.propTypes = {
  heading: PropTypes.string,
};

export default Candidates;

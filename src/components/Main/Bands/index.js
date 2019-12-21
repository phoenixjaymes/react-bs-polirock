import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from 'react-bootstrap';

import BandsPagination from './BandsPagination';
import BandsContainer from './BandsContainer';
import MiddleAds from '../MiddleAds';
import Loading from '../Loading';
import LoadingError from '../LoadingError';

class Bands extends Component {
  state = {
    loading: true,
    error: false,
    bandsData: {},
  }

  componentDidMount() {
    const { labelClass, party } = this.props;
    console.log(labelClass, party);
    let path;
    if (labelClass !== undefined) {
      path = `http://phoenixjaymes.com/data/polirock/get-bands.php?lc=${labelClass}`;
    } else if (party !== undefined) {
      path = `http://phoenixjaymes.com/data/polirock/get-bands.php?party=${party}`;
    } else {
      path = 'http://phoenixjaymes.com/data/polirock/get-bands.php?lc=1';
    }

    fetch(path)
      .then(reponse => reponse.json())
      .then((responseData) => {
        this.setState({
          bandsData: responseData.data,
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

  renderBands = () => {
    const { heading } = this.props;
    const { bandsData } = this.state;
    return (
      <Container as="main">
        <BandsPagination heading={heading} />
        <BandsContainer data={bandsData.slice(0, 5)} />
        <MiddleAds />
        <BandsContainer data={bandsData.slice(5)} />
        <BandsPagination heading={heading} />
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

    return this.renderBands();
  }
}

Bands.propTypes = {
  heading: PropTypes.string,
  labelClass: PropTypes.string,
  party: PropTypes.string,
};

export default Bands;

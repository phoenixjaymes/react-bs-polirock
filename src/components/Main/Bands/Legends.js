import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from 'react-bootstrap';

import BandsPagination from './BandsPagination';
import BandsContainer from './BandsContainer';
import BottomAds from '../BottomAds';
import Loading from '../Loading';
import LoadingError from '../LoadingError';

class Legends extends Component {
  state = {
    loading: true,
    error: false,
    bandsData: {},
  }

  componentDidMount() {
    const { labelClass } = this.props;
    fetch(`https://phoenixjaymes.com/data/polirock/get-bands.php?lc=${labelClass}`)
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
        <BandsContainer data={bandsData} />
        <BottomAds />
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

Legends.propTypes = {
  heading: PropTypes.string,
  labelClass: PropTypes.string,
};

export default Legends;

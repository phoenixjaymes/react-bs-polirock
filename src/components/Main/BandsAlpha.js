import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import SectionHeading from './SectionHeading';
import BandsAlphaItem from './BandsAlphaItem';
import BottomAds from './BottomAds';
import Loading from './Loading';
import LoadingError from './LoadingError';

class BandsAlpha extends Component {

  state = {
    loading: true,
    error: false,
    bandsData: {}
  }

  componentDidMount() {
    fetch(`http://phoenixjaymes.com/data/polirock/get-bandsaz.php`)
      .then( reponse => reponse.json() )
      .then( responseData => {
        
        this.setState({
          bandsData: responseData.data,
          loading: false
       });

      })
      .catch(error => {
        this.setState({ 
          error: true,
          loading: false
       });
        console.log('Error fetching and parsing data', error);
      });
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />;

  renderBands = () => {
    const major = this.state.bandsData.major.map( band => <BandsAlphaItem key={band.id} bid={band.id} name={band.name} /> );
    const indie = this.state.bandsData.indie.map( band => <BandsAlphaItem key={band.id} bid={band.id} name={band.name} /> );
    const unsigned = this.state.bandsData.unsigned.map( band => <BandsAlphaItem key={band.id} bid={band.id} name={band.name} /> );

    return (
      <Container as="main">
        <Row>
          <Col>
            <SectionHeading color="blue" heading="Major" />
            <ul>
              {major}
            </ul>
          </Col>
          <Col>
            <SectionHeading color="blue" heading="Indie" />
            <ul>
              {indie}
            </ul>
          </Col>
          <Col>
            <SectionHeading color="blue" heading="Unsigned" />
            <ul>
              {unsigned}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <BottomAds />
          </Col>
          </Row>
      </Container>      
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.error) {
      return this.renderError();
    } else {
      return this.renderBands();
    }
  }


}

export default BandsAlpha;
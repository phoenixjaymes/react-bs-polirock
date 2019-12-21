import React, { Component } from 'react';

import {
  Container
} from 'react-bootstrap';

import BandsItem from './Bands/BandsItem';
import BandsDetails from './Bands/BandDetails';

// import BandsDetailedSingle from '../../data/bandsDetailedSingle';

class BandProfile extends Component {

  state = {
    loading: true,
    error: false,
    bandData: {}
  }

  componentDidMount() {
    fetch(`http://phoenixjaymes.com/data/polirock/get-band-profile.php?bid=${this.props.match.params.bid}`)
      .then( reponse => reponse.json() )
      .then( responseData => {
        
        this.setState({
          bandData: responseData.data,
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



  renderLoading = () => {
    return <Container><div>Loading...</div></Container>;
  }

  renderError = () => {
    return <Container><div>I'm sorry! Please try again.</div></Container>;
  }

  renderBandProfile = () => {
    return (
      <Container>
        <BandsItem band={this.state.bandData} isIncludedBandDetails={false} />
        <BandsDetails name={this.state.bandData.name} details={this.state.bandData.details} />
      </Container>
    );
  }


  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.error) {
      return this.renderError();
    } else {
      return this.renderBandProfile();
    }
  }

}

export default BandProfile;
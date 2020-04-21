import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import ContestCountdown from './ContestCountdown';
import TopNominees from './TopNominees';
import Poll from './Poll';
import PoliBlog from './PoliBlog';
import EnterToWin from './EnterToWin';
import WinFreeStuff from './WinFreeStuff';
import BottomAds from './BottomAds';
import SideAds from './SideAds';
import Loading from './Loading';
import LoadingError from './LoadingError';

class Home extends Component {
  state = {
    loading: true,
    error: false,
    homeData: {}
  }

  componentDidMount() {
    fetch('https://phoenixjaymes.com/data/polirock/get-home.php')
      .then(reponse => reponse.json())
      .then(responseData => {

        this.setState({
          homeData: responseData.data,
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

  renderHome = () => {

    return (
      <Container as="main">
        <Row>
          <Col md={6} lg={5}>
            <ContestCountdown daysUntil={this.state.homeData.daysUntil} />
            <TopNominees topNominees={this.state.homeData.topNominees} />
            <Poll
              heading="PoliRock Voters Are:"
              otherInput={this.state.homeData.voterPollOtherInput}
              comments={this.state.homeData.voterPollComments}
            />
          </Col>
          <Col md={6} lg={5}>
            <PoliBlog />
            <EnterToWin data={this.state.homeData.contestText} />
            <WinFreeStuff data={this.state.homeData.winContestText} />
          </Col>
          <Col lg={2} className="d-none d-lg-block" >
            <SideAds />
          </Col>
        </Row>

        <BottomAds />
      </Container>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.error) {
      return this.renderError();
    } else {
      return this.renderHome();
    }
  }

}

export default Home;
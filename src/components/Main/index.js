import React from 'react';
import {
  Route,
Switch
} from 'react-router-dom';

import MainErrorBoundary from './MainErrorBoundary';
import Home from './Home';
import Bands from './Bands';
import Legends from './Bands/Legends';
import BandsAlpha from './BandsAlpha';
import BandProfile from './BandProfile';
import Candidates from './Candidates';
import FormContainer from './FormContainer';
import NotFound from './NotFound';
import Text from './Text';

const Main = props => {
  return (
    <MainErrorBoundary>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/major-label' render={ () => <Bands heading='Major Label Bands' labelClass={1} />} />
        <Route path='/indie' render={ () => <Bands heading='Indie Bands' labelClass={2} />} />
        <Route path='/unsigned' render={ () => <Bands heading='Unsigned Bands' labelClass={3} />} />

        <Route path='/dem-bands' render={ () => <Bands heading='Democratic Bands' party="dems" />} />
        <Route path='/rep-bands' render={ () => <Bands heading='Republican Bands' party="reps" />} />
        <Route path='/ind-bands' render={ () => <Bands heading='Independent Bands' party="inds" />} />

        <Route path='/bandsaz' component={BandsAlpha} />
        <Route path='/band-profile-page/:bid' component={BandProfile} />
        <Route path='/legends' render={ () => <Legends heading='Legends / Winners' labelClass={4} />} />
        <Route path='/bsignup' render={ () => <FormContainer type='band-signup' />} />
        <Route path='/usignup' render={ () => <FormContainer type='user-signup' />} />
        <Route path='/login' render={ () => <FormContainer type='login' />} />

        <Route path='/faq' render={ () => <Text type='faq' />} />
        <Route path='/terms' render={ () => <Text type='terms' />} />
        <Route path='/privacy' render={ () => <Text type='privacy' />} />
        <Route path='/about' render={ () => <Text type='about' />} />
        <Route path='/rules' render={ () => <Text type='rules' />} />
        <Route path='/candidates' render={ () => <Candidates heading='Candidates' />} />
        <Route path='/contact' render={ () => <Text type='contact' />} />
        <Route component={NotFound} />
      </Switch>
    </MainErrorBoundary>
  );
}

export default Main;
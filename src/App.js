import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import styled from 'styled-components';

import LoginView from './views/LoginView';
import ParkListView from './views/ParkListView';
import ParkDetailView from './views/ParkDetailView';
import ReportingView from './views/ReportingView';
import ForecastView from './views/ForecastView';

import FullscreenBackground from './components/FullscreenBackground';
import TopBar from './components/TopBar';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const RouteWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 50px;
`;


class App extends Component {

  render() {
    return (
      <Router>
        <AppWrapper>
          <FullscreenBackground />
          <TopBar />
          <RouteWrapper>
            <Route exact path="/" component={LoginView}/>
            <Route exact path="/parks" component={ParkListView}/>
            <Route exact path="/parks/:parkSlug/dashboard" component={ParkDetailView}/>
            <Route exact path="/parks/:parkSlug/reporting" component={ReportingView}/>
            <Route exact path="/parks/:parkSlug/forecast" component={ForecastView}/>
          </RouteWrapper>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import styled from 'styled-components';

import LoginView from './views/LoginView';
import ParkListView from './views/ParkListView';

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
            <Route path="/parks" component={ParkListView}/>
          </RouteWrapper>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;

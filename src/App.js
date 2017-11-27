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
  widht: 100vw;
`;

const ViewWrapper = styled.div`
  flex: 1;
`;


class App extends Component {

  state = {
    blurRadius: 20
  }

  render() {
    return (
      <Router>
        <AppWrapper>
          <FullscreenBackground blurRadius={this.state.blurRadius} />
          <TopBar showBar={this.state.showAppBar} />
          <div>
            <ul>
              <li><Link to="/">Login</Link></li>
              <li><Link to="/parks">Parks</Link></li>
            </ul>
          </div>
          <ViewWrapper>
            <Route exact path="/" component={LoginView}/>
            <Route path="/parks" component={ParkListView}/>
          </ViewWrapper>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;

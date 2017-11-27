import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import LoginView from './views/LoginView';
import ParkListView from './views/ParkListView';
import FullscreenBackground from './components/FullscreenBackground';


class App extends Component {

  state = {
    showAppBar: false,
    blurRadius: 20
  }

  render() {
    return (
      <Router>
        <div>
          <FullscreenBackground blurRadius={this.state.blurRadius} />
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/parks">Parks</Link></li>
          </ul>

          <Route exact path="/" component={LoginView}/>
          <Route path="/parks" component={ParkListView}/>
        </div>
      </Router>
    );
  }
}

export default App;

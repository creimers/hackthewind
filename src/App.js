import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import LoginView from './views/LoginView';
import ParkListView from './views/ParkListView';

import FullscreenBackground from './components/FullscreenBackground';
import TopBar from './components/TopBar';


class App extends Component {

  state = {
    showAppBar: false,
    blurRadius: 20
  }

  componentDidMount() {
    setTimeout(() => this.setState({showAppBar: true}), 2000);
    setTimeout(() => this.setState({blurRadius: 40}), 3000);
  }

  render() {
    return (
      <Router>
        <div>
          <FullscreenBackground blurRadius={this.state.blurRadius} />
          <TopBar showBar={this.state.showAppBar} />
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

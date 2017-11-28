import React from 'react';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PowerSettingsNewIcon from 'material-ui-icons/PowerSettingsNew';
import ListIcon from 'material-ui-icons/List';
import AccessTimeIcon from 'material-ui-icons/AccessTime';
import DashboardIcon from 'material-ui-icons/Dashboard';
import TimelineIcon from 'material-ui-icons/Timeline';
import Toolbar from 'material-ui/Toolbar';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import { showLoginCard } from './../../ducks/app';


const height = 64;

const Wrapper = styled.div`
  height: ${height}px;
  z-index: 100;
  width: 100vw;
`;

const Inner = styled.div`
  height: ${height}px;
  transition: margin-top .5s;
  margin-top: ${props => props.show? 0 : height * -1.5}px;
`;

const InnerToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;


class TopBar extends React.Component {
  
  routeTo = route => () => {
    const { history } = this.props;
    history.push(route)
  }

  logout = () => {
    this.props.showLoginCard();
    const { history } = this.props;
    history.push('/');
  }
  
  showToolbar = () => {
    const { location } = this.props;
    return location.pathname !== '/';
  }

  renderDashboardIcons = () => {
    const { location } = this.props;
    if (location.pathname.split('/').length === 3) {
      return (
        <div>
          <IconButton color="primary" onClick={this.routeTo('/parks')}>
            <AccessTimeIcon />
          </IconButton>
          <IconButton color="primary" onClick={this.routeTo('/parks')}>
            <TimelineIcon />
          </IconButton>
          <IconButton color="primary" onClick={this.routeTo('/parks')}>
            <DashboardIcon />
          </IconButton>
          <IconButton color="primary" onClick={this.routeTo('/parks')}>
            <ListIcon />
          </IconButton>
        </div>
      )
    }
  }

  render() {
    const showToolbar = this.showToolbar();

    return (
      <Wrapper>
        <Inner show={showToolbar}>
          <AppBar position="static" color="default">
            <Toolbar>
              <InnerToolbar>
                {this.renderDashboardIcons()}
                <IconButton color="primary" onClick={this.logout}>
                  <PowerSettingsNewIcon />
                </IconButton>
              </InnerToolbar>
            </Toolbar>
          </AppBar>
        </Inner>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoginCard: () => dispatch(showLoginCard()),
  };
};
const connected = connect(mapStateToProps, mapDispatchToProps)(TopBar);
export default withRouter(connected);

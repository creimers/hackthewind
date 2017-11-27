import React from 'react';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PowerSettingsNewIcon from 'material-ui-icons/PowerSettingsNew';
import Toolbar from 'material-ui/Toolbar';
import { withRouter } from 'react-router'


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

  logout = () => {
    const { history } = this.props;
    history.push('/');
  }
  
  showToolbar = () => {
    const { location } = this.props;
    return location.pathname !== '/';
  }

  render() {
    const showToolbar = this.showToolbar();

    return (
      <Wrapper>
        <Inner show={showToolbar}>
          <AppBar position="static">
            <Toolbar>
              <InnerToolbar>
                <IconButton color="accent" onClick={this.logout}>
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

// TODO: PropTypes
export default withRouter(TopBar);

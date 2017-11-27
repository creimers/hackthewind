import React from 'react';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
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


class TopBar extends React.Component {
  
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
            </Toolbar>
          </AppBar>
        </Inner>
      </Wrapper>
    )
  }
}

// TODO: PropTypes
export default withRouter(TopBar);

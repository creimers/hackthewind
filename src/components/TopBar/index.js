import React from 'react';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';


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
  render() {

    return (
      <Wrapper>
        <Inner show={this.props.showBar}>
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
export default TopBar;

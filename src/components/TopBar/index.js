import React from 'react';
import styled from 'styled-components';


const height = 64;

const Wrapper = styled.div`
  height: ${height}px;
  z-index: 100;
  width: 100vw;
`;

const Inner = styled.div`
  height: ${height}px;
  transition: margin-top .5s;
  margin-top: ${props => props.show? 0 : height * -1}px;
  background-color: blue;
`;


class TopBar extends React.Component {
  render() {

    return (
      <Wrapper>
        <Inner show={this.props.showBar}>
        </Inner>
      </Wrapper>
    )
  }
}

// TODO: PropTypes
export default TopBar;

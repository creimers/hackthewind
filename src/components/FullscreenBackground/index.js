import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import bgImage from './bg.jpg';


const BackgroundOuter = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundInner = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImage});
  background-size: cover;
  transform: scale(1.1);
  transition: 1s filter linear;
  filter: blur(${props => props.blurRadius}px);
`;


class FullscreenBackground extends React.Component {
  render() {
    return (
      <BackgroundOuter>
        <BackgroundInner blurRadius={this.props.blurRadius || 0}/>
      </BackgroundOuter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blurRadius: state.app.backgroundBlurRadius
  };
};

export default connect(mapStateToProps)(FullscreenBackground);

import React from 'react';
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


class FullscreenBackground extends React.Component {
  render() {

    const BackgroundInner = styled.div`
      height: 100vh;
      width: 100vw;
      background-image: url(${bgImage});
      background-size: cover;
      transform: scale(1.1);
      transition: filter 1s;
      filter: blur(${this.props.blurRadius || 0}px);
    `;

    return (
      <BackgroundOuter>
        <BackgroundInner />
      </BackgroundOuter>
    )
  }
}

// TODO: PropTypes

export default FullscreenBackground;

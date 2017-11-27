import React from 'react';
import styled from 'styled-components';

import svg from './logo.svg';


const LogoWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;


class Logo extends React.Component {
  render() {
    return (
      <LogoWrapper>
        <img src={svg} alt="vento logo" style={{width: this.props.width}}/>
      </LogoWrapper>
    )
  }
}

export default Logo

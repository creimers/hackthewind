import React from 'react';
import styled from 'styled-components';

import { colorTeal } from './../../../utils/theme'

const Power = styled.div`
  color: ${colorTeal};
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 40px;
`;

const defaultPower = 100.01

class PowerWidget extends React.Component {

  state = {
    power: defaultPower
  }

  componentDidMount() {
    setInterval(() => this.randomizePower(), 2000)
  }

  randomizePower = () => {
    const { power } = this.state
    const randomBoolean = Math.random() >= 0.5;
    const randomFactor = (Math.random() / 100)
    const newPower = randomBoolean ? defaultPower * (1 + randomFactor) : defaultPower * (1 - randomFactor)
    this.setState({power: newPower.toFixed(2)})
  }

  render() {
    return (
      <Power>{this.state.power} MW</Power>
    )
  }
}

export default PowerWidget;

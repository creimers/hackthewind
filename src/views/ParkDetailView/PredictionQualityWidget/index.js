import React from 'react';
import styled from 'styled-components';

import { colorTeal } from './../../../utils/theme'

const defaultQuality = 91.2

const Quality = styled.div`
  color: ${colorTeal};
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 40px;
`;


class PredictionQuality extends React.Component {

  state = {
    quality: defaultQuality
  }

  componentDidMount() {
    setInterval(() => this.randomizeQuality(), 2000)
  }

  randomizeQuality = () => {
    const { quality } = this.state
    const randomBoolean = Math.random() >= 0.5;
    const randomFactor = (Math.random() / 10)
    const newPower = randomBoolean ? defaultQuality * (1 + randomFactor) : defaultQuality * (1 - randomFactor)
    this.setState({quality: newPower.toFixed(2)})
  }

  render() {
    return (
      <Quality>{this.state.quality} %</Quality>
    )
  }
}

export default PredictionQuality;

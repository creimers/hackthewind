import React from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';

import { colorTeal } from './../../../utils/theme'
import { colorRed } from './../../../utils/theme'

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
    const randomBoolean = Math.random() >= 0.5;
    const randomFactor = (Math.random() / 10)
    let newQuality = randomBoolean ? defaultQuality * (1 + randomFactor) : defaultQuality * (1 - randomFactor)
    newQuality = newQuality.toFixed(2)
    this.setState({quality: newQuality, previousQuality: this.state.quality})
  }

  renderIndicator = () => {
    if (this.state.quality >= this.state.previousQuality) {
      return <ArrowDropUpIcon style={{color: colorTeal}}/>
    } else {
      return <ArrowDropDownIcon style={{color: colorRed}}/>
    }
  }

  render() {
    return (
      <Quality>
        {this.renderIndicator()}
        <span>{this.state.quality} %</span>
      </Quality>
    )
  }
}

export default PredictionQuality;

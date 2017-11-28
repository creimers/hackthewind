import React from 'react';
import styled from 'styled-components';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';

import { colorTeal } from './../../../utils/theme'
import { colorRed } from './../../../utils/theme'

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
    previousPower: defaultPower,
    power: defaultPower,
    tendency: 'up'
  }

  componentDidMount() {
    setInterval(() => this.randomizePower(), 2000)
  }

  randomizePower = () => {
    const randomBoolean = Math.random() >= 0.5;
    const randomFactor = (Math.random() / 100)
    let newPower = randomBoolean ? defaultPower * (1 + randomFactor) : defaultPower * (1 - randomFactor)
    newPower = newPower.toFixed(2)
    this.setState({power: newPower, previousPower: this.state.power})
  }

  renderIndicator = () => {
    if (this.state.power >= this.state.previousPower) {
      return <ArrowDropUpIcon style={{color: colorTeal}}/>
    } else {
      return <ArrowDropDownIcon style={{color: colorRed}}/>
    }
  }

  render() {
    return (
      <Power>
        {this.renderIndicator()}
        <span>{this.state.power} MW</span>
      </Power>
    )
  }
}

export default PowerWidget;

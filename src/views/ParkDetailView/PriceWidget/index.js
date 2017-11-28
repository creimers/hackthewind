import React from 'react';
import styled from 'styled-components';

import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';

import { colorTeal } from './../../../utils/theme'
import { colorRed } from './../../../utils/theme'

const defaultPrice = 27.41

const Price = styled.div`
  color: ${colorTeal};
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 40px;
`;


class PredictionPrice extends React.Component {

  state = {
    price: defaultPrice
  }

  componentDidMount() {
    setInterval(() => this.randomizePrice(), 4500)
  }

  randomizePrice = () => {
    const { price } = this.state
    const randomBoolean = Math.random() >= 0.5;
    const randomFactor = (Math.random() / 100)
    let newPrice = randomBoolean ? defaultPrice * (1 + randomFactor) : defaultPrice * (1 - randomFactor)
    newPrice = newPrice.toFixed(2)
    this.setState({price: newPrice, previousPrice: this.state.price})
  }

  renderIndicator = () => {
    if (this.state.quality >= this.state.previousPrice) {
      return <ArrowDropUpIcon style={{color: colorTeal}}/>
    } else {
      return <ArrowDropDownIcon style={{color: colorRed}}/>
    }
  }

  render() {
    return (
      <Price>
        {this.renderIndicator()}
        <span>{this.state.price} EUR/MW</span>
      </Price>
    )
  }
}

export default PredictionPrice;

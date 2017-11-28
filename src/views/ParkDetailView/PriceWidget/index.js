import React from 'react';
import styled from 'styled-components';

import { colorTeal } from './../../../utils/theme'

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
    const newPrice = randomBoolean ? defaultPrice * (1 + randomFactor) : defaultPrice * (1 - randomFactor)
    this.setState({price: newPrice.toFixed(2)})
  }

  render() {
    return (
      <Price>{this.state.price} EUR/MW</Price>
    )
  }
}

export default PredictionPrice;

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
  align-items: flex-start;
  justify-content: center;
  display: flex;
  font-size: 30px;
  flex-direction: column;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


class TurbineCountWidget extends React.Component {

  state = {
    idle: 1,
    active: 61,
    maintanence: 0
  }

  componentDidMount() {
    setTimeout(() => this.setState({idle: 0, active: 62}), 5000)
  }

  render() {
    return (
      <Price>
        <Indicator>
          <div>Active:</div> <div>{this.state.active}</div>
        </Indicator>
        <Indicator>
          <div>Idle:</div> <div>{this.state.idle}</div>
        </Indicator>
        <Indicator>
          <div>Maintanence:</div> <div>{this.state.maintanence}</div>
        </Indicator>
      </Price>
    )
  }
}

export default TurbineCountWidget;

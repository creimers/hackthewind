import React from 'react'

import styled from 'styled-components';
import { colorTeal } from './../../../utils/theme'

const StorageWrapper = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 40px;
  color: ${colorTeal};
`;

const Battery = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const BatteryBody = styled.div`
  width: 200px;
  height: 100%;
  border: 4px solid ${colorTeal};
  border-radius: 4px;
  position: relative;
`;

const BatteryPin = styled.div`
  width: 10px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: ${colorTeal};
  height: 35px;
`;

const BatteryFill = styled.div`
  height: 100%;
  width: 81%;
  background: ${colorTeal};
  opacity: 0.5;
`;

const BatteryPercentage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

class StorageWidget extends React.Component {
  render () {
    return (
      <StorageWrapper>
        <Battery>
          <BatteryBody>
            <BatteryFill />
            <BatteryPercentage>81%</BatteryPercentage>
          </BatteryBody>
          <BatteryPin />
        </Battery>
      </StorageWrapper>
    )
  }
}

export default StorageWidget

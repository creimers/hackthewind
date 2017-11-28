import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import Dimensions from 'react-dimensions'
import pink from 'material-ui/colors/pink';

const generateFakeData = () => {
  const hours = 24
  const hourArray = [...Array(hours).keys()]
  return hourArray.map((hour) => {
    return {
      name: hour === 0 ? '0' : `+${hour}`,
      power: Math.random() * 10
    } 
  })
}

const fakePowerData = generateFakeData()


class Chart extends React.Component {
  render() {
    return (
      <LineChart width={this.props.containerWidth} height={300} data={fakePowerData}
        margin={{top: 25, right: 35, left: 0, bottom: 5}} style={{color: 'white'}}>
        <XAxis dataKey="name" stroke="white"/>
        <YAxis stroke="white"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" name="Power [MW]"dataKey="power" stroke={pink['500']}/>
      </LineChart>
    )
  }
}

export default Dimensions()(Chart)

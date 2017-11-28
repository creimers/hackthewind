import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Dimensions from 'react-dimensions'

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

const data = [
      {name: '0', uv: 4000, pv: 2400, amt: 2400},
      {name: '+1', uv: 3000, pv: 1398, amt: 2210},
      {name: '+2', uv: 2000, pv: 9800, amt: 2290},
      {name: '+3', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

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
        <Line type="monotone" name="Power [MW]"dataKey="power" stroke="#8884d8" />
      </LineChart>
    )
  }
}

export default Dimensions()(Chart)

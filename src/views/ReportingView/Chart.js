import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import Dimensions from 'react-dimensions'
import pink from 'material-ui/colors/pink';


class Chart extends React.Component {
  render() {
    return (
      <LineChart width={this.props.containerWidth} height={300} data={this.props.data}
        margin={{top: 25, right: 35, left: 0, bottom: 5}} style={{color: 'white'}}>
        <XAxis dataKey="date" stroke="white"/>
        <YAxis stroke="white"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" name="Power [MW]" dataKey="power" stroke={pink['500']} />
      </LineChart>
    )
  }
}

export default Dimensions()(Chart)

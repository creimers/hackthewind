import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import Dimensions from 'react-dimensions'
import pink from 'material-ui/colors/pink';
import cyan from 'material-ui/colors/cyan';

class Chart extends React.Component {

  render() {
    return (
      <LineChart width={this.props.containerWidth} height={300} data={this.props.powerData}
        margin={{top: 25, right: 35, left: 0, bottom: 5}} style={{color: 'white'}}>
        <XAxis dataKey="name" stroke="white"/>
        <YAxis yAxisId="left" stroke="white"/>
        <YAxis yAxisId="right" orientation="right" stroke="white"/>
        <Tooltip/>
        <Legend />
        <Line yAxisId="left" type="monotone" name="Power [MW]"dataKey="power" stroke={pink['500']}/>
        <Line yAxisId="right" type="monotone" name="Price [EUR/MW]" dataKey="price" stroke={cyan['500']} />
      </LineChart>
    )
  }
}

export default Dimensions()(Chart)


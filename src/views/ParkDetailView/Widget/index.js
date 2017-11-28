import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import styled from 'styled-components'

import { colorTeal } from './../../../utils/theme'

const CardTitle = styled.div`
  color: ${colorTeal};
`;

const cardStyle = {
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

class Widget extends React.Component {
  render() {
    return (
      <Card style={cardStyle}>
        <CardContent style={contentStyle}>
          <CardTitle>{this.props.title || 'widget'}</CardTitle>
          {this.props.children}
        </CardContent>
      </Card>
    )
  }
}

export default Widget

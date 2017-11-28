import React from 'react';
import Card, { CardContent } from 'material-ui/Card';

const cardStyle = {
  minHeight: '300px'
}

class Widget extends React.Component {
  render() {
    return (
      <Card style={cardStyle}>
        <CardContent>
          {this.props.children}
        </CardContent>
      </Card>
    )
  }
}

export default Widget

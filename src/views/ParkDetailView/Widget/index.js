import React from 'react';
import Card, { CardContent } from 'material-ui/Card';


class Widget extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          {this.props.children}
        </CardContent>
      </Card>
    )
  }
}

export default Widget

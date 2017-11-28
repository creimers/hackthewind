import React from 'react';
import Card, { CardContent } from 'material-ui/Card';

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';


class ReportingView extends React.Component {
  render() {
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Reporting</h1>
          <Card>
            <CardContent>
              <p>party</p>
            </CardContent>
          </Card>
        </SlideUp>  
      </ViewWrapper>
    )
  }
}

export default ReportingView

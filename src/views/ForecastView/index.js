import React from 'react';
import Card, { CardContent } from 'material-ui/Card';

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';

import Chart from './Chart'

class ForecastView extends React.Component {
  render() {
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Forecast Park Level</h1>
          <Card>
            <CardContent>
              <Chart />
            </CardContent>
          </Card>
        </SlideUp>  
      </ViewWrapper>
    )
  }
}

export default ForecastView

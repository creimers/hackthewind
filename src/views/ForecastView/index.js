import React from 'react';
import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';


class ForecastView extends React.Component {
  render() {
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Forecast</h1>
        </SlideUp>  
      </ViewWrapper>
    )
  }
}

export default ForecastView

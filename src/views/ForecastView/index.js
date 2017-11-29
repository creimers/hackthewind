import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import { getParkName } from './../../utils/helpers';

import Chart from './Chart'

const generateFakeData = () => {
  const hours = 24
  const hourArray = [...Array(hours).keys()]
  return hourArray.map((hour) => {
    return {
      name: hour === 0 ? '0' : `+${hour}`,
      power: parseFloat((Math.random() * 10).toFixed(2)),
      price: parseFloat((Math.random() * 25).toFixed(2))
    } 
  })
}

const fakePowerData = generateFakeData()


class ForecastView extends React.Component {

  render() {
    const {match} = this.props;
    const parkName = getParkName(this.props.parks, match.params.parkSlug)
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Forecast {parkName}</h1>
          <Card>
            <CardContent>
              <Chart
                powerData={fakePowerData}
              />
            </CardContent>
          </Card>
        </SlideUp>  
      </ViewWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.parks.parks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastView)

export default withRouter(connected)

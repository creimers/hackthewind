import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import moment from 'moment'

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import { getParkName } from './../../utils/helpers';
import { fetchPriceData } from './../../ducks/price'

import Chart from './Chart'

const today = moment()
const yesterday = moment().subtract(1, 'd')

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

const fakePowerData = generateFakeData()


class ForecastView extends React.Component {

  componentDidMount() {
    this.props.fetchPriceData(today.format('YYYY-MM-DD'))
    this.props.fetchPriceData(yesterday.format('YYYY-MM-DD'))
  }

  render() {
    const {match} = this.props;
    const parkName = getParkName(this.props.parks, match.params.parkSlug)
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Power Forecast {parkName}</h1>
          <Card>
            <CardContent>
              <Chart
                powerData={fakePowerData}
                priceToday={this.props.priceDataToday}
                priceYesterday={this.props.priceDataYesterday}
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
    priceDataToday: state.price.pricesPerDate[today.format('YYYY-MM-DD')],
    priceDataYesterday: state.price.pricesPerDate[yesterday.format('YYYY-MM-DD')]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPriceData: (dateString) => dispatch(fetchPriceData(dateString))
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastView)

export default withRouter(connected)

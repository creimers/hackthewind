import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { DatePicker } from 'material-ui-pickers'
import styled from 'styled-components'
import moment from 'moment'

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import { getParkName } from './../../utils/helpers';

import Chart from './Chart'

const generatePowerData = (fromDate, toDate) => {
  fromDate = moment(fromDate)
  toDate = moment(toDate)
  const days = toDate.diff(fromDate, 'days')
  const daysArray = [...Array(days).keys()]
  return daysArray.map((day, index) => {
    return {
      date: moment(fromDate).add(index, 'd').format('YYYY.MM.DD'),
      power: Math.random() * 10
    } 
  })
}

const today = new Date()

const PickerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const PickerWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  > span {  margin-right: 20px; }
`;


class ReportingView extends React.Component {
  state = {
    toDate: today,
    fromDate: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
  }

  handleFromDateChange = date => {
    this.setState({ fromDate: date })
  }

  handleToDateChange = date => {
    this.setState({ toDate: date })
  }

  render() {
    const {match} = this.props
    const parkName = getParkName(this.props.parks, match.params.parkSlug)
    const { fromDate, toDate } = this.state
    const powerData = generatePowerData(fromDate, toDate)
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Reporting {parkName}</h1>
          <Card>
            <CardContent>
              <PickerRow>
                <PickerWrapper>
                  <span>From</span>
                  <DatePicker
                    value={fromDate}
                    onChange={this.handleFromDateChange}
                  />
                </PickerWrapper>
                <PickerWrapper>
                  <span>To</span>
                  <DatePicker
                    value={toDate}
                    onChange={this.handleToDateChange}
                    maxDate={today}
                  />
                </PickerWrapper>
              </PickerRow>
              <Chart data={powerData}/>
            </CardContent>
          </Card>
        </SlideUp>  
      </ViewWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.parks.parks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportingView)

export default withRouter(connected)

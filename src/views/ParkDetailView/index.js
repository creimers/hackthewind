import React from 'react';
import { withRouter } from 'react-router'
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';

import { getParkName } from './../../utils/helpers';
import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';

import Widget from './Widget'

import PowerWidget from './PowerWidget'
import PredictionQualityWidget from './PredictionQualityWidget'
import PriceWidget from './PriceWidget'
import StorageWidget from './StorageWidget'
import TurbineCountWidget from './TurbineCountWidget'


class ParkDetailView extends React.Component {
  render() {
    const {match} = this.props;
    const parkName = getParkName(this.props.parks, match.params.parkSlug)
    return (
      <SlideUp>
        <ViewWrapper>
          <h1>Live Dashboard {parkName}</h1>
          <Grid container>

            <Grid item xs={12} sm={6}>
              <Widget title="Turbines">
                <TurbineCountWidget />
              </Widget>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Widget title="Power">
                <PowerWidget />
              </Widget>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Widget title="Prediction Quality">
                <PredictionQualityWidget />
              </Widget>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Widget title="Price">
                <PriceWidget />
              </Widget>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Widget title="Storage">
                <StorageWidget />
              </Widget>
            </Grid>


          </Grid>
        </ViewWrapper>
      </SlideUp>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.parks.parks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkDetailView);

export default withRouter(connected);

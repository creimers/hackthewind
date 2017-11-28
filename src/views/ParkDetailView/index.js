import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import Widget from './Widget'

import PowerWidget from './PowerWidget'
import PredictionQualityWidget from './PredictionQualityWidget'


class ParkDetailView extends React.Component {
  render() {
    const {match} = this.props;
    const park = match.params.parkSlug
    return (
      <SlideUp>
        <ViewWrapper>
          <Grid container>

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
                <p>affe</p>
              </Widget>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Widget title="Storage">
                <p>affe</p>
              </Widget>
            </Grid>

          </Grid>
        </ViewWrapper>
      </SlideUp>
    )
  }
}

export default withRouter(ParkDetailView);

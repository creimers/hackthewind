import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import Widget from './Widget'


const DashboardWrapper = styled.div`
  display: block;
`


class ParkDetailView extends React.Component {
  render() {
    const {match} = this.props;
    const park = match.params.parkSlug
    return (
      <DashboardWrapper>
        <Grid container>

          <Grid item xs={12} sm={6}>
            <Widget>
              <p>affe</p>
            </Widget>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Widget>
              <p>affe</p>
            </Widget>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Widget>
              <p>affe</p>
            </Widget>
          </Grid>

        </Grid>
      </DashboardWrapper>
    )
  }
}

export default withRouter(ParkDetailView);

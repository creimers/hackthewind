import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import { getParkName } from './../../utils/helpers';


class ReportingView extends React.Component {
  render() {
    const {match} = this.props;
    const parkName = getParkName(this.props.parks, match.params.parkSlug)
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Reporting {parkName}</h1>
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

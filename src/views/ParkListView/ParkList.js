import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardContent } from 'material-ui/Card';
import { darkBg } from './../../utils/theme'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ParkList extends React.Component {

  goToParkDetail = slug => () => {
       const { history } = this.props;
       history.push(`/parks/${slug}/dashboard`);
  }

  renderParkList = () => {
    return (
      <List>
        {
          this.props.parks.map((park, index)=> {
            return (
              <ListItem key={index} button onClick={this.goToParkDetail(park.slug)}>
                <ListItemText primary={park.name} />
              </ListItem>
            )
          })
        }
      </List>
    )
  }


  render() {
    return (
      <Card>
        <CardContent>
          {this.renderParkList()}
        </CardContent>
      </Card>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isFetching: state.parks.isFetching,
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
)(ParkList);

export default withRouter(connected);

import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { darkBg } from './../../utils/theme'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';

const duration = 1000;

const baseStyles = {
  transition: `all ${duration}ms`,
  opacity: 0,
  backgroundColor: darkBg,
  transform: 'translateY(100px)',
  marginTop: '75px'
}

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(100px)' },
  entered: { opacity: 1, transform: 'translateY(0px)' },
};


class ParkList extends React.Component {

  state = {
    showList: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({showList: true}), 100)
  }

  goToParkDetail = slug => () => {
       const { history } = this.props;
       history.push(`/parks/${slug}`);
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
      <Transition in={this.state.showList} timeout={500}>
        {(state) => (
          <div style={{...baseStyles, ...transitionStyles[state]}}>
            {this.renderParkList()}
          </div>
          )
        }
      </Transition>
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

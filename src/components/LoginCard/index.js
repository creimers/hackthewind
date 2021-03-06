import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';
import TextField from 'material-ui/TextField';
import Transition from 'react-transition-group/Transition';

import Logo from './../Logo';

import {
  logInRequest,
  logInSuccess
} from './../../ducks/app';

const duration = 1000;

const cardStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const contentStyles = {
  flex: 1
}

const actionStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
};


const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};


class LoginCard extends React.Component {

  state = {
    username: 'info@vento.io',
    password: 'asdflkjasdf'
  }

  login = () => {
     const { history } = this.props;

     this.props.logInRequest();

     setTimeout(() => {
       this.props.logInSuccess();
       history.push('/parks');
     }, 1000)
  }

  renderProgress = () => {
    if (this.props.isLoggingIn) {
      return (
          <CircularProgress size={25} style={{marginRight: '15px'}}/>
      )
    }
  }

  render() {
    return (
      <Transition in={this.props.showLoginCard} timeout={500}>
        {(state) => (
            <Card style={{...cardStyles, ...transitionStyles[state]}}>
              <CardContent style={contentStyles}>
                <Logo width={"250px"} />
                <div>
                  <TextField
                    autoFocus={true}
                    label="Email"
                    margin="normal"
                    fullWidth
                    value={this.state.username}
                  />
                </div>
                <div>
                  <TextField
                    label="Password"
                    margin="normal"
                    type="password"
                    fullWidth
                    value={this.state.password}
                  />
                </div>
              </CardContent>
              <CardActions style={actionStyles}>
                {this.renderProgress()}
                <Button raised color="primary" onClick={this.login}>login</Button>
              </CardActions>
            </Card>
          )
        }
      </Transition>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.app.isLoggingIn,
    showLoginCard: state.app.showLoginCard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInRequest: () => dispatch(logInRequest()),
    logInSuccess: () => dispatch(logInSuccess())
  };
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCard);

export default withRouter(connected);

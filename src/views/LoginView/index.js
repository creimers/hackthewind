import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';

import { backgroundBlurRadius } from './../../utils/constants';
import LoginCard from './../../components/LoginCard';

import { setBackgroundBlur, showLoginCard } from '../../ducks/app';


const ViewWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


class LoginView extends React.Component {

  onClick = () => {
    this.props.setBackgroundBlur(backgroundBlurRadius);
    this.props.showLoginCard();
  }


  render() {
    return (
      <ViewWrapper onClick={this.onClick}>
        <Grid style={{display: 'flex', justifyContent: 'center'}}container>
          <Grid item xs={12} sm={6} md={3}>
            <LoginCard />
          </Grid>
        </Grid>
      </ViewWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBackgroundBlur: (blurRadius) => dispatch(setBackgroundBlur(blurRadius)),
    showLoginCard: () => dispatch(showLoginCard()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

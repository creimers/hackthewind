import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setBackgroundBlur } from '../../ducks/app';


const ViewWrapper = styled.div`
  flex: 1;
  display: flex;
`;


class LoginView extends React.Component {

  onClick = () => {
    this.props.setBackgroundBlur(50);
  }

  render() {
    return (
      <ViewWrapper onClick={this.onClick}>
        <h1>Login</h1>
      </ViewWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBackgroundBlur: (blurRadius) => dispatch(setBackgroundBlur(blurRadius))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

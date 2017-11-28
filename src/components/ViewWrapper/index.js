import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

class ViewWrapper extends React.Component {
  render() {
    return(
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default ViewWrapper

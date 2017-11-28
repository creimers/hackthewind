import React from 'react';
import styled from 'styled-components';

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import ParkList from './ParkList';

const ListWrapper = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
`;

class ParkListView extends React.Component {
  render() {
    return (
      <ViewWrapper>
        <SlideUp>
          <h1>Park List</h1>
          <ParkList />
        </SlideUp>
      </ViewWrapper>
    )
  }
}

export default ParkListView;

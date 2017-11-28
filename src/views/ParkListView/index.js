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
      <SlideUp>
        <ViewWrapper>
          <h1>Park List</h1>
          <ParkList />
        </ViewWrapper>
      </SlideUp>
    )
  }
}

export default ParkListView;

import React from 'react';

import ViewWrapper from './../../components/ViewWrapper';
import SlideUp from './../../components/SlideUp';
import ParkList from './ParkList';


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

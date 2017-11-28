import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import styled from 'styled-components';

import ParkList from './ParkList';

const ListWrapper = styled.div`
  width: 750px;
  margin: 0 auto;
`;

class ParkListView extends React.Component {
  render() {
    return (
      <ListWrapper>
        <ParkList />
      </ListWrapper>
    )
  }
}

export default ParkListView;

import React from 'react'

import styled from 'styled-components';
import { colorTeal } from './../../../utils/theme'
import ReactMapboxGl, {  Marker } from "react-mapbox-gl";

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoib2RDSi1CYyJ9.2_wYiAfgmf9aUn0t-OPY8Q'

const center = [6.663336, 53.724068]

const MapWrapper = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 40px;
  color: ${colorTeal};
`;

const Map = ReactMapboxGl({
  accessToken: token,
  interactive: false
});

const MapMarker = (props) => {

  const size = 20
  let markerStyle = {
    height: `${size}px`,
    width: `${size}px`,
    borderRadius: '100%',
    background: colorTeal
  }
  const marker = <div style={markerStyle}></div>

  return marker
}


class StorageWidget extends React.Component {
  render () {
    return (
      <MapWrapper>
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          containerStyle={{height: '100%', width: '100%', paddingTop: '15px'}}
          center={center}
          zoom={[6]}
        >
          <Marker
            coordinates={center}
          >
            <MapMarker />
          </Marker>
        </Map>
      </MapWrapper>
    )
  }
}

export default StorageWidget

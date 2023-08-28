import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import Marker from 'google-map-react';

const Map = () => {
  const selectedPlace = useSelector(state => state.selectedPlace);

  const renderMarkers = () => {
    if (selectedPlace) {
      return (
        <Marker
          lat={selectedPlace.lat}
          lng={selectedPlace.lng}
          text={selectedPlace.name}
        />
      );
    }
    return null;
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={4}
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
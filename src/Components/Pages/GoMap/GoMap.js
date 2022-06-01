import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius:"10px"
  };
  
  const place = {
    lat:24.391743,
    lng:89.994827
  };


  const GoMap = () => {
    
    
   

    return (
        <div>
       <LoadScript
      googleMapsApiKey='AIzaSyBpDB007t8GiKYfBPM8P8cQ_jipIf9ec-Q'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={place}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript>

        </div>
    );
};

export default GoMap;
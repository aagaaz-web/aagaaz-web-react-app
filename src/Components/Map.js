import React, {Component} from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import './Map.css';

function Map() {

    // let {latitude, longitude} = this.props;

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 28.675821 , lng: 77.113194 }} />
    )
}
        
  
const MapWrapped = withScriptjs(withGoogleMap(Map));
const API_KEY = 'AIzaSyB4sZDt2p9BU5En-4Osl1rFtvE-qlZ8kwI';

export default function App() {
    return (
        <div style={{ width: "50vw" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY
                }`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
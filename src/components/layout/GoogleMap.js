import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="map_marker">{text}</div>;

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: 33.942791,
      lng: -118.410042
    },
    zoom: 11
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlZQJXVvR26wkXhgi02j3VnPL3DpyfdKI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={33.942786}
          lng={-118.410000}
          text= "Map Point"
          // icon={{
          //   url: "https://i.postimg.cc/30jd33nS/Pin.png",
          //   scaledSize: new window.google.maps.Size(100, 100),
          // }}
        />
      </GoogleMapReact>
    </div>
  );
}
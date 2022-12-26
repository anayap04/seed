import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Root } from "./styles";
import { isMobile } from "react-device-detect";

const style = {
  width: isMobile ? '100vw' : "50vw",
  height:  isMobile ? '50vh' : "60vh",
  display: 'flex',
  paddingLeft: -30,
  marginTop: 30,
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapLocation = () => {

  return (
    <Root isMobile={isMobile}>
      <Map
        zoom={17}
        google={window.google}
        initialCenter={{
          lat: 11.013457337338147,
          lng: -74.82629669925919,
        }}
        style={style}
      >

<AnyReactComponent
          lat={11.013457337338147}
          lng={-74.82629669925919}
          text={'Kreyser Avrora'}
        />
      </Map>
    </Root>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0ckqwEtFJWHW59tekpJZBdi5DvmxmALI",
})(MapLocation);

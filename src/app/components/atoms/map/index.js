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
          lat: 11.003586810685562,
          lng: -74.82489794514642,
        }}
        style={style}
      >

<AnyReactComponent
          lat={11.003586810685562}
          lng={-74.82489794514642}
          text={'Oficinas'}
        />
      </Map>
    </Root>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0ckqwEtFJWHW59tekpJZBdi5DvmxmALI",
})(MapLocation);

import { useState } from "react";
import "./App.css";
import Form from "./Mobile/Form";
import Display from "./Mobile/Display";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function App() {
  // Setting the state
  const [ipAddress, setIpAddress] = useState("192.212.174.101");
  const [location, setLocation] = useState("Brooklyn, NY 10001");
  const [timezone, setTimezone] = useState("UTC -05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");

  const fetchIP = async function () {
    const res = await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_xG9ahXGQa1iurx7LCCfn1uTH5EBBl&ipAddress=102.215.59.255"
    );
    const data = await res.json();
    // console.log(data);
    setIpAddress(data.ip);
    setLocation(data.location.region);
    setTimezone(data.location.timezone);
    setIsp(data.isp);
  };

  fetchIP();
  const position = [7.34872, 3.87929];
  return (
    <div className="">
      <Form />
      <Display
        ip={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default App;

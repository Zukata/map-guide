import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


const mapCenter = [51.5098192, -0.1345484];
const zoomLevel = 18;
const map = props =>(
  <div id className="map">
<Map
    center={mapCenter}
    zoom={zoomLevel}
>
  <TileLayer
    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker
    position={mapCenter}
    >
        <Popup
          width={1000}
          height={1000}
        >
          <p><b>Tu sei qui</b>
          <a class="btn" href = "#"><i class="fas fa-microphone"></i>
          </a></p>
          <p>Clicca sul microfono per creare una clip.</p>
  {/* creare un nuovo elemento per il popup dell'editor */}
        </Popup>
    </Marker>
</Map>
</div>
);
export default map;
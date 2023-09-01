import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import Leaflet from 'leaflet';
import icon from '../assets/plane-icon.png'
import { useState } from 'react';
import SideDetails from './SideDetails';

const MapView = () => {

  const state = useSelector(state => state.reducer)
  const [showDetails, setShowDetails] = useState(false);
  const [detailID, setDetailID] = useState(null);

  const planeIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45]
  })

  const handleClick = (id) => {
    setDetailID(id);
    setShowDetails(true);
  }

  return (
    <div>
      <h2>{state.flights.length} Uçak Bulundu</h2>
      <MapContainer
        center={[39.1417632, 34.1284977]}
        zoom={6.5}
        scrollWheelZoom={false}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {state.flights.map((flight) => (
          <Marker key={flight.id} position={[flight.lat, flight.lng]} icon={planeIcon}>
            <Popup>
              <div className='popup'>
                <span>Kod: {flight.code}</span>
                <button onClick={() => handleClick(flight.id)}>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>

      {showDetails && <SideDetails detailID={detailID} setShowDetails={setShowDetails} />}
    </div>
  )
}

export default MapView
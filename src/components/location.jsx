import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Location = () => {

    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");

    useEffect(() => {
        pos();
    });

    function pos() {
        setLat(24.93841);
        setLon(67.11870);
    }

    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <div style={{ marginTop: "2%" }} >
            <h2 style={{ marginLeft: "2%" }}>Real Time Location</h2>
            <div>
                <MapContainer center={[24.8607, 67.0011]} zoom={11} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[lat, lon]}>
                            <Popup>{lat} <br /> {lon}</Popup>
                            <Circle center={[lat, lon]} color="green" radius={200} />
                    </Marker>
                </MapContainer>
            </div>
        </div>

    );
}

export default Location;

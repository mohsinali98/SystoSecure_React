import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

class Location extends Component {
    state = {
        lat: 0,
        lon: 0
    }

    componentDidMount() {
        this.setState({ lat: 24.94562, lon: 67.11543 });
    }

    render() {
        const geofence = [[24.94575, 67.11432], [24.94614, 67.11529], [24.94511, 67.11597], [24.94466, 67.11494]];

        const DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });

        L.Marker.prototype.options.icon = DefaultIcon;

        return (
            <div style={{ marginTop: "2%" }} >
                <h2 style={{ marginLeft: "2%" }}>Real Time Location</h2>
                <div>
                    <MapContainer center={[24.8607, 67.0011]} zoom={12} scrollWheelZoom={true}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Rectangle bounds={geofence} />
                        <Marker position={[this.state.lat, this.state.lon]}>
                            <Popup>{this.state.lat} <br /> {this.state.lon}</Popup>
                            <Circle center={[this.state.lat, this.state.lon]} color={((this.state.lat >= 24.94510 && this.state.lat <= 24.94614) && (this.state.lon >= 67.11432 && this.state.lon <= 67.11597)) ? "green" : "red"} radius={200} />
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        );
    }
}

export default Location;

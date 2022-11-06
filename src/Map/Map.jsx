import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
    return (<>
        <MapContainer center={[-6.9344694, 107.6049539]} zoom={8} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-6.9344694, 107.6049539]}>
                <Popup>
                    Bandung City
                </Popup>
            </Marker>
        </MapContainer>
    </>);
}

export default Map;
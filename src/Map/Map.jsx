import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

const Map = () => {
    const [Locations, setLocations] = useState([])
    const URL = ' http://localhost:8080/locations'

    // get data from db.json
    useEffect(() => {
        fetch(URL)
            .then((res) => { return res.json() })
            .then((data) => setLocations(data))
    }, [URL])


    console.log(Locations)

    return (<>
        <MapContainer center={[-6.9344694, 107.6049539]} zoom={8} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=xKjHHzEmeDPYX4Nedo645lZtmcXsBskq2ndG9vWBoxpowINReXwYha36yLLOtcza"
            />
            {Locations && Locations.map((location) => (
                <div className="marker" id={location.id}>
                    <Marker position={[location.gps.latitude, location.gps.longitude]}>
                        <Popup>
                            {location.name}
                        </Popup>
                    </Marker>
                </div>
            ))}
        </MapContainer>
    </>);
}

export default Map;
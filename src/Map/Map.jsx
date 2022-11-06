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


    const LocationFiltered = Locations.filter(data=>data.address.country === "USA")
    console.log(LocationFiltered)

    return (<>
        <MapContainer center={[39.326253, -101.725171]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=xKjHHzEmeDPYX4Nedo645lZtmcXsBskq2ndG9vWBoxpowINReXwYha36yLLOtcza"
            />
            {LocationFiltered && LocationFiltered.map((location) => (
                <div className="marker" id={location.id}>
                    <Marker position={[location.gps.latitude, location.gps.longitude]}>
                        <Popup>
                            <div className="popup">
                                <h2>Name: {location.name}</h2>
                                <p>Status: {location.status}</p>
                                <p>Number of charging station: {location.stallCount}</p>
                            </div>
                        </Popup>
                    </Marker>
                </div>
            ))}
        </MapContainer>
    </>);
}

export default Map;
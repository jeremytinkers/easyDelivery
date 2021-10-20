import React from "react";
import config from "../../config";
import data from "../../data";

import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { useParams } from "react-router";

function Map() {

    const { id } = useParams(); // gaining access to params.id from Route

    //A 2d array that stores the start, end and rider coordinates respectively
    var coordinateSet = [[], [], []];

    //Find the respective orderId from data.curOrders.
    const orderCoords = data.curOrders.find((o) => o.orderId == id);

    //Push start lat and lng coordinates
    coordinateSet[0].push(Number(orderCoords.startCoordLat));
    coordinateSet[0].push(Number(orderCoords.startCoordLng));

    //Push end lat and lng coordinates
    coordinateSet[1].push(Number(orderCoords.endCoordLat));
    coordinateSet[1].push(Number(orderCoords.endCoordLng));

    //Push rider lat and lng coordinates
    coordinateSet[2].push(Number(orderCoords.riderCoordLat));
    coordinateSet[2].push(Number(orderCoords.riderCoordLng));

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        >
            {coordinateSet.map(curCoord => (
                <Marker
                    position={{
                        lat: curCoord[0],
                        lng: curCoord[1]
                    }}
                />
            ))}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapScreen() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.MY_GOOGLE_MAP_API_TOKEN
                    }`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
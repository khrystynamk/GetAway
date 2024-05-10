import "./widgetstyles.css"
import { useRef, useEffect, useState } from "react";
import map_location_marker from '../../img/map_location_marker.png';

const latlng = {lat: -34.397, lng: 150.644};
export default function JourneyWidget({ onClose }) {
    const ref = useRef();
    const [map, setMap] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [infoWindow, setInfoWindow] = useState(null);
    const [marker, setMarker] = useState(null);
  
    useEffect(() => {
      setMap(new window.google.maps.Map(ref.current, {
        center: latlng,
        zoom: 8,
        mapId: 'wowMap'
      }))
      setMapLoaded(true);
    }, []);
  
    useEffect(() => {
        if (mapLoaded) {
            setInfoWindow(new google.maps.InfoWindow({
                // change address according to the destination
                content: '<div style="color: #141414;"><strong>Australia, Sydney</div></strong><div style="color: rgba(20, 20, 20, 0.74);">Sample Address</div>'
            }))
        }
    }, [mapLoaded]);
  
    useEffect(() => {
        if (mapLoaded && !marker) {
            const markerImg = document.createElement("img");
            markerImg.src = map_location_marker;

            setMarker(new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: latlng,
                content: markerImg
            }))

            if (marker) {
                marker.addListener("click", () => {
                    infoWindow.open({
                    anchor: marker,
                    map,
                    });
                });
            }
        }
    }, [mapLoaded, marker]);

    return (
        <div className="modal-container">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="container">
                    <div className="first-row-container">
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="smallblock-container">
                            <div className="small-block"></div>
                            <div className="small-block"></div>
                        </div>
                    </div>
                    <div className="second-row-container">
                        <div className="block to-do-block"></div>
                        <div className="big-block">
                            <div ref={ref} id="map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
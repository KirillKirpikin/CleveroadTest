import React, { useCallback, useRef } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import styles from './styles.module.scss';
import MapSkeleton from '../Skeleton/MapSkeleton';
const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
    width: '100%',
    height: '600px'
};

const defaultOptions = {
    panControl:true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons:false,
    keyboardShortcuts:false,
    fullscreenControl: false
}



const Map = ({coordinates}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })
    


    const center = {
        lat: +coordinates.latitude,
        lng: +coordinates.longitude
    };


    const mapRef = useRef(undefined)

    const onLoad = useCallback(function callback(map) {     

        mapRef.current=map
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])


    return isLoaded ? (
        <div className={styles.map}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
                >
                <MarkerF  position={center} />
            </GoogleMap>
        </div>
        
    ) :  <MapSkeleton/>
};

export default Map;
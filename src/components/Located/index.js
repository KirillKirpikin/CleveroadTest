import React from 'react';
import styles from './styles.module.scss'
const Located = ({coordinates, loading}) => {
    return (
        <div className={styles.located}>
            <p>ISS is now located at:</p>
            <p> longitude:{loading ? coordinates.longitude : "Loading..."}, latitude:{coordinates.latitude} </p>
        </div>
    );
};

export default Located;
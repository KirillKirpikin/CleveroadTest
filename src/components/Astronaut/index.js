import React from 'react';
import styles from './styles.module.scss';
const Astronaut = ({name}) => {
    return (
        <li className={styles.user}>
            <div>
                <img src="user.svg" alt="#" />
            </div>            
            <p>{name}</p>
        </li>
    );
};

export default Astronaut;
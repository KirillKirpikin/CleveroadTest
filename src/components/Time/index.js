import React from 'react';
import { format } from 'date-fns';
import styles from './styles.module.scss'
const Time = ({time}) => {

    const t= new Date(time * 1000);
    const hour = format(t, " HH:mm");
    const day = format(t, "EEEE, dd MMM yyy")
    

    return (
        <div className={styles.container}>
           <p>Current UTC time:{ hour }</p>
           <p>{ day }</p>
        </div>
    );
};

export default Time;
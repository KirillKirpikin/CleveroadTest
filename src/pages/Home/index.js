import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/contentWrapper';
import styles from './styles.module.scss';
import Located from '../../components/Located';
import Map from '../../components/Map';
import Time from '../../components/Time';
import Crew from '../../components/Crew';
const Home = () => {
    const defaultCoordinates ={
        latitude: 0,
        longitude: 0   
    }
    const [coordinates, setСoordinates] = useState(defaultCoordinates);
    const [time, setTime] = useState(null)  
    const [loading, setLoading] = useState('false')
    useEffect(()=>{
        const id = setInterval(()=>{
        fetch('http://api.open-notify.org/iss-now.json')
            .then((res)=>{
                return res.json();
            }).then((arr)=>{                
                setСoordinates(arr.iss_position)
                setTime(arr.timestamp)
                setLoading('true')

                
            })
            .catch((err)=>console.log(err))
        },5000);

        return ()=>{
            clearInterval(id)
        }
   
    }, [])
        
   
            

    return (
        <ContentWrapper className={styles.home}>
            <div className={styles.top}>
                <Located coordinates={coordinates} loading={loading}/>
                <Time className={styles.time} time={time}/>
            </div>
            <div className={styles.body}>
                <Map coordinates={coordinates}/>
                <Crew/>
            </div>
            
           
            
        </ContentWrapper>
    );
};

export default Home;
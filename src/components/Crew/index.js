import React, { useEffect, useState } from 'react';
import Astronaut from '../Astronaut';
import styles from './styles.module.scss';
import UserSkeleton from '../Skeleton/UserSkeleton';
const Crew = () => {
    const [crew, setCrew] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const id = setInterval(()=>{
        fetch('http://api.open-notify.org/astros.json')
            .then((res)=>{
                return res.json();
            }).then((arr)=>{                        
                setCrew(arr.people.filter((item)=> item.craft === 'ISS'))   
                setIsLoading(false) 
            })
            .catch((err)=>console.log(err))
        },5000);

        return ()=>{
            clearInterval(id)
        }
   
    }, [])   

    

    return (
        <div className={styles.body}>
            <ul className={styles.list}>
                {
                    isLoading ? [...new Array(5)].map((_, index)=> <UserSkeleton key={index}/>) : crew.map((item)=> <Astronaut key={item.name} name={item.name}/>)
                }
            </ul>
            <div className={styles.total}> Total amount: {crew.length} people on ISS</div>           
            
        </div>
    );
};

export default Crew;
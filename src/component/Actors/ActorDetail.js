import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../../ApiKey';
import { useParams } from 'react-router-dom';
import ActorMovies from './ActorMovies';

const ActorDetail = () => {


    

    const [actorDetail, setActorDetail]=useState([])
    const getActorDetail=async(id,apikey)=>{
        const url=await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${apikey}&language=en-US`)
        setActorDetail(url.data)

    }
const {actorId}=useParams()
// console.log(actorId);
console.log(actorDetail);


useEffect(()=>{
    getActorDetail(actorId,APIKEY)
},[])

    return (
        <div id='actor-detail'>
            <div className='container'>
                <div className='actor-detail'>
                    <img width={300} src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${actorDetail.profile_path}`}></img>
                    <div className='actor-desc'>
                        <h2>{actorDetail.name}</h2>
                        <h3>{actorDetail.birthday}</h3>
                        <h3>Биография</h3>
                        <p>{actorDetail.biography}</p>
                        <ActorMovies actorId={actorId}/>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ActorDetail;
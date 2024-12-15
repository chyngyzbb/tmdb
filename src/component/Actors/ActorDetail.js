import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../../ApiKey';
import { useParams } from 'react-router-dom';
import ActorMovies from './ActorMovies';
import { LanguageContext } from '../../context';

const ActorDetail = () => {


    
    const {language}=useContext(LanguageContext)
    const [actorDetail, setActorDetail]=useState([])
    const getActorDetail=async(id,apikey)=>{
        const url=await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${apikey}&language=${language}`)
        setActorDetail(url.data)

    }
const {actorId}=useParams()
// console.log(actorId);
console.log(actorDetail);


useEffect(()=>{
    getActorDetail(actorId,APIKEY)
},[language])



const [view,setView]=useState(300)
const {name,birthday,biography}=actorDetail
const getView=(text)=>{
    view===300?setView(text.length):setView(300)}

    return (
        <div id='actor-detail'>
            <div className='container'>
                <div className='actor-detail'>
                    <img width={300} src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${actorDetail.profile_path}`}></img>
                    <div className='actor-desc'>
                        <h2>{name}</h2>
                        <h3>{birthday}</h3>
                        <h3>Биография</h3>
                        <p>{biography && biography.slice(0,view)}</p>
                        {
                            biography && biography.length>300 ? <span onClick={()=>{
                                getView(biography)
                            }} className='view'>{view===300?'view more':'close'}</span> : ''
                        }
                        

                    </div>
                </div>
                <ActorMovies actorId={actorId}/>
            </div>
            

        </div>
    );
};

export default ActorDetail;
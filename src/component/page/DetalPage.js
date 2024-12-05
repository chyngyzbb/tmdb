import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIKEY } from '../../ApiKey';
import Actors from '../Actors/Actors';
import Video from '../video/Video';

const DetalPage = () => {


    const [detal,setDetal]=useState({})

        const {movie_id}=useParams()

    const getDetal=async(id,apikey)=>{
    try{
       
        const res=await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`)
        const {data}=await res
        setDetal(data)
    
    }catch(e){
        console.log(e);
    }   
    }
     
// console.log(movie_id);

    const {title,runtime,poster_path,vote_average,backdrop_path,overview,popularity}=detal

    useEffect(()=>{
        getDetal(movie_id,APIKEY)
    },[])

    return (
        <>
        <div id='detal'
        style={{
            background:`url("https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")no-repeat left /cover`
        }}>
        
           <div className='container'>
            
                <div className='detal'>
                    <img
                    style={{width:'350px',
                        borderRadius:'10px',
                        boxShadow: '    0 10px 17px black'
                    }}
                     src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}></img>
                     <div className='detal-desc'>
                        <h1>{title}</h1>
                        <h4>{popularity}</h4>
                        <p>{overview}</p>
                        <h3>{Math.floor(runtime/60)} h {runtime%50} min</h3>
                        <div className='detal-vote'>{Math.round(vote_average*10)}%</div>
                     </div>
                </div>
           
           </div>
        </div>
        <Actors movieId={movie_id}/>
        <Video movieId={movie_id}/>
        </>
    );
};

export default DetalPage;
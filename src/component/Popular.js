import React, { useEffect, useState } from 'react';
import {APIKEY} from '../ApiKey'
import axios from 'axios';
import MoviesCard from './page/MoviesCard';



const Popular = () => {


    const [popular,setPopular]=useState([])


    const getPopular=async()=>{
        try{
             const res=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
            const {data} = await res;
            setPopular(data.results)
        }catch(e){
            console.log();
            
        }
       
    }

    console.log(popular);
    

    useEffect(()=>{
        getPopular()
    },[])
    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                    {popular.map(el=>(
                        <MoviesCard key={el.id} el={el}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popular;
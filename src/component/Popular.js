import React, { useContext, useEffect, useState } from 'react';
import {APIKEY} from '../ApiKey'
import axios from 'axios';
import MoviesCard from './page/MoviesCard';
import { LanguageContext } from '../context';



const Popular = () => {


    const [popular,setPopular]=useState([])
    const {language}=useContext(LanguageContext)

    const getPopular=async()=>{
       
             const res=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=1`)
            const {data} = await res;
            setPopular(data.results)
      
       
    }

    console.log(popular);
    

    useEffect(()=>{
        getPopular()
    },[language])
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
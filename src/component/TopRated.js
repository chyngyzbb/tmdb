import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import MoviesCard from './page/MoviesCard';
import { LanguageContext } from '../context';

const TopRated = () => {

    const [toprated, setToprated]=useState([])
    const {language}=useContext(LanguageContext)
    const getToprated=async()=>{
        const res=await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
            const {data}=await res
            setToprated(data.results)

}       

    console.log(toprated);



    useEffect(()=>{
        getToprated()
    },[language])

    return (
        <div id='movies'>
           <div className='container'>
                <div className='movies'>
                    {toprated.map(el=>(
                        <MoviesCard key={el.id} el={el}/>
                    ))}
                </div>
           </div>
        </div>
    );
};

export default TopRated;
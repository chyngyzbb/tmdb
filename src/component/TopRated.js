import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import MoviesCard from './page/MoviesCard';

const TopRated = () => {

    const [toprated, setToprated]=useState([])

    const getToprated=async()=>{
        const res=await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
            const {data}=await res
            setToprated(data.results)

}       

    console.log(toprated);



    useEffect(()=>{
        getToprated()
    },[])

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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../../ApiKey';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const ActorMovies = ({actorId}) => {


    const [movies,setMovies]=useState([])
    const getActorMovies=async(id,apikey)=>{
        const url=await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apikey}&language=en-US`)
        setMovies(url.data.cast)
    }

    console.log(movies);
    useEffect(()=>{
        getActorMovies(actorId,APIKEY)
    },[])
    


    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div>
              <Slider {...settings}>
              {movies.filter(el=>el.poster_path).map(el=>(
                
                <div className='actor-movies-desc'>
                    <Link to={`/movies/detal-page/${el.id}`}>
                        <img width={120} src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}></img>
                    
                    </Link>
                    <h4>{el.title}</h4>
                </div>
              ))}
              </Slider>
            </div>
    );
};

export default ActorMovies;
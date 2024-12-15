import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../../ApiKey';
import Slider from "react-slick";
import person from '../../img/person3.jpg'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context';

const Actors = ({movieId}) => {

    const [actors,setActors]=useState([])

    const {language}=useContext(LanguageContext)
    const getActors=async(id,apikey)=>{
        try{
            const url=await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=${language}`)
        const {data}=await url
        setActors(data.cast)
        }catch(e){
            console.log();
        }
    }



    useEffect(()=>{
        getActors(movieId,APIKEY)
    },[language])

    console.log(actors);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };


    return (
        <div id='actors'>
            <div className='container'>
                <div className='actors'>
                <Slider {...settings}>
                {
                    actors.map(el=>(
                                <Link to={`/actor/detal-page/${el.id}`}>
                                <div>
                                {el.profile_path ? <img 
                                    width={150}
                                    height={200}
                                    src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`}></img>
                                : <img width={150} height={200} src={person}></img>}
                                <h4>{el.name}</h4>
                               </div> 
                                </Link>
                               
                    ))
                } </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;
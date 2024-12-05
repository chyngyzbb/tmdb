import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../../ApiKey';
import Slider from 'react-slick';

const Video = ({movieId}) => {

const [video, setVideo]=useState([])

const getVideo=async(id,apikey)=>{
    const url=await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`)
        const {data}=await url
        setVideo(data.results)

       
    }
//  console.log(video);
useEffect(()=>{
    getVideo(movieId,APIKEY)
},[])

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1
  };


    return (
        <div id='video'>
            <div className='container'>
                <Slider {...settings}>
                {
                    video.map(el=>(
                        <div>
                            <iframe width="300" height="215"
                         src={`https://www.youtube.com/embed/${el.key}`} 
                         title="YouTube video player" frameborder="0" 
                            allowfullscreen></iframe>
                        </div>

                    ))
                }
                </Slider>
            </div>
        </div>
    );
};

export default Video;
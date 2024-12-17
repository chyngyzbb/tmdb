import React, { useContext, useEffect, useState } from 'react';
import {APIKEY} from '../ApiKey'
import axios from 'axios';
import MoviesCard from './page/MoviesCard';
import { LanguageContext } from '../context';



const Popular = () => {


    const [popular,setPopular]=useState([])
    const {language}=useContext(LanguageContext)
    const [page,setPage]=useState(1)
    const [loader,setLoader]=useState(false)

        
    const getPopular=async()=>{
       setLoader(true)
             const res=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
            const {data} = await res;
           
            window.scroll(1,1)
      
       setTimeout(()=>{
         setPopular(data.results)
        setLoader(false)
       },2000)
    }
    
   
    console.log(popular);
  
    const arrayPages=[1,2,3,4,5,6,7,8,9,10]

    useEffect(()=>{
        getPopular()
    },[language,page])
    return (
        <div id='movies'>
            {loader ? <h1 className='loader'>Loader...</h1>
            :
            <div className='container'>
                <div className='movies'>
                    {popular.map(el=>(
                        <MoviesCard key={el.id} el={el}/>
                    ))}
                </div>
                <div className='page-btn'>
                {
                    arrayPages.map(el=>(  
                        <button style={{
                            background:el===page?'red':'',
                            border:el===page?'solid 3px red':'' 
                        }}
                        onClick={()=>setPage(el)
                            
                        }>{el}</button>
                    ))
                }
                </div>
            </div>
            
            }</div>
    );
};

export default Popular;
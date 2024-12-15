import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIKEY } from '../ApiKey';
import { useParams } from 'react-router-dom';
import MoviesCard from '../component/page/MoviesCard';
import { LanguageContext } from '../context';

const SearchResalt = () => {
    
    const {language}=useContext(LanguageContext)
    const [pages,setPages]=useState()
    const [result,setResult]=useState([])
    const getSearchResult=async(key, name,pagen)=>{
        const res=await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=${language}&page=${pagen}`)
            setResult(res.data.results)
            setPages(res.data.total_pages)
            window.scroll(0,0)
          
            
    }

    const {movieName}=useParams()
    const [page,setPage]=useState(1)
    console.log(result);
    
    useEffect(()=>{
        getSearchResult(APIKEY,movieName,page)
    },[movieName,page,language])

    useEffect(()=>{
        setPage(1)
    },[movieName])
  

  
console.log(pages);




    return (
        <div id='movies'>
            <div className='container'>
                <div className='movies'>
                    {
                        result.map(el=>(
                            <MoviesCard el={el} key={el.id}/>
                        ))
                    }
                </div>
                <div className='movie_page'>
                    <button style={{
                        visibility:page===1?'hidden':'visible'
                    }}
                     onClick={()=>setPage(page-1)}>prev</button>
                     <h2>{page} / {pages}</h2>
                    <button style={{
                        visibility:page===pages?'hidden':'visible'
                    }}
                     onClick={()=>setPage(page+1)}>next</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResalt;
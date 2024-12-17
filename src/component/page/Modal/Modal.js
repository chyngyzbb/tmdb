import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../../context';

const Modal = ({detal}) => {



    const {click,setClick}=useContext(LanguageContext)
    // const [modal,setModal]=useState(false)
    const {title,runtime,poster_path,vote_average,backdrop_path,overview,popularity}=detal
    return (
        <div >
            <div className='modal-big'
                onClick={()=>setClick(!click)} 
                 hidden={click}>
                
            <div 
                className='modal'>
            <img 
                    style={{width:'300px',
                        cursor:'pointer',
                        borderRadius:'10px',
                        boxShadow: '    0 10px 17px black'
                    }}
                     src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}></img>
                     <div className='detal-desc'>
                        <h1>{title}</h1>
                        <h4>{popularity}</h4>
                        <p>{overview}</p>
                        <h3>{Math.floor(runtime/60)} h {runtime%50} min</h3>
                        <div className='vote'
                            style={{background:`conic-gradient(yellow ${Math.round(vote_average*10)*3.59}deg, grey 0deg)`}}>
                        <div className='detal-vote'>{Math.round(vote_average*10)}%</div>
                        </div>
                     </div>
        </div>
        </div>
        </div>
    );
};

export default Modal;
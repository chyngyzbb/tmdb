import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({el}) => {
    return (
        <div  className='movies-card'>
                            <Link to={`/movies/detal-page/${el.id}`}><img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`}></img></Link>
                            <div className='movies-info'>
                                <h4>{el.title}</h4>
                                <h4>{el.vote_average}</h4>
                            </div>
        </div>
    );
};

export default MoviesCard;
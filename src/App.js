import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Recipes from './component/Recipes';
import Home from './component/Home';
import Popular from './component/Popular';
import TopRated from './component/TopRated';
import DetalPage from './component/page/DetalPage';
import ActorDetail from './component/Actors/ActorDetail';
import { useContext, useState } from 'react';
import { LanguageContext } from './context';
import SearchResalt from './SearchResult/SearchResalt';

function App(){

  const {mode}=useContext(LanguageContext)

  return(
    <div style={{
      background: mode ? 'black' : '',
      color:mode?'white':'black'
    }} >
      <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/toprated' element={<TopRated/>}/>
            <Route path='/movies/detal-page/:movie_id' element={<DetalPage/>}/>
            <Route path='/actor/detal-page/:actorId' element={<ActorDetail/>}/>
            <Route path='/movies/search-resalt/:movieName' element={<SearchResalt/>}/>
          </Routes>
     
    </div>
  )
}







export default App;

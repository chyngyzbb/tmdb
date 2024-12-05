import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Recipes from './component/Recipes';
import Home from './component/Home';
import Popular from './component/Popular';
import TopRated from './component/TopRated';
import DetalPage from './component/page/DetalPage';
import ActorDetail from './component/Actors/ActorDetail';

function App(){


  return(
    <div >
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/toprated' element={<TopRated/>}/>
            <Route path='/movies/detal-page/:movie_id' element={<DetalPage/>}/>
            <Route path='/actor/detal-page/:actorId' element={<ActorDetail/>}/>
          </Routes>
     
    </div>
  )
}







export default App;

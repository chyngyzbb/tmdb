import { useContext, useState } from 'react';
import LOGO from '../img/log.webp'
import { Link,NavLink,useNavigate } from "react-router-dom";
import { LanguageContext } from '../context';




function Header(){

    const navigate=useNavigate()
    const {mode,setMode}=useContext(LanguageContext)
    const getBgr=()=>{
         setMode(!mode)
         localStorage.setItem('mode',JSON.stringify(!mode))
    }

    const [value,setValue]=useState('')

    const handleChange=(e)=>setValue(e.target.value)
    
    const searchToResault=()=>{
        navigate(`/movies/search-resalt/${value}`)
        setValue('')
    }

    const {language,setLanguage}=useContext(LanguageContext)
    return(
        <div id="header">
            <div className="container">
                <div className="header">
                    <Link to={"/"}><img style={{width:"100px"}} src={LOGO} alt="img" /></Link>
                    <div className="nav">
                      <NavLink to={"/"}>Home</NavLink>
                      <NavLink to={"/recipes"}>Recipes</NavLink>
                      <NavLink to={"/popular"}>Popular</NavLink>
                      <NavLink to={"/toprated"}>Top Rated</NavLink>
                    </div>

                    <div className='search'>
                        <input value={value} onChange={handleChange} type="text" />
                        <button onClick={searchToResault}>search</button>
                    </div>

                    <div className="header-end">
                        <select onChange={(e)=>setLanguage(e.target.value)} name='' id=''>
                            <option value='en-US'>english</option>
                            <option value='tr-TR'>turkce</option>
                            <option value='ru-RU'>russian</option>
                            <option value='fr-FR'>france</option>
                        </select>
                        <div onClick={getBgr} className="mode">{mode ? 'ligth': 'mode'}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;
import React from "react"
import LOGO from '../img/log.webp'
import { Link,NavLink,useNavigate } from "react-router-dom";




function Header(){

    const navigate=useNavigate()
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
                    <div className="header-end">
                        <button onClick={()=>navigate("/")}>Sign in</button>
                        <button>Request demo</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;
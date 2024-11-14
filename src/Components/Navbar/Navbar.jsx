import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell  } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

export default function Navbar() {
    const [active, setActive] = useState();

    const [faIcon, setFaIcon] = useState([
      {id:0, icon:faUser},
      {id:1, icon:faShoppingCart},
      {id:2, icon:faBell},
    ])
    return (
       <div>
         <nav className="Movie-Navbar">

            <div className="Title">
              <h1 className="PageTitle">Cinema<span className="Part2">Gate</span></h1>
            </div>

            <ul>
                <li>
                   <NavLink to="/discover" className={({isActive}) => (isActive ? "active" : "nav-class")}>Discover</NavLink>
                   <NavLink to="/movies"  className={({isActive}) => (isActive ? "active" : "nav-class")}>Movies</NavLink>
                   <NavLink to="/Trending" className={({isActive}) => (isActive) ? "active" : "nav-class"}>Trending</NavLink>
                   <NavLink to="/favourites" className={({isActive}) => (isActive ? "active" : "nav-class")}>Favourites</NavLink>
                </li>
            </ul>

            <div className="InputSearch">
              <input type="search" placeholder="Type Movie..."/>
            </div>

            <div className="Fauser">
               {faIcon.map((item) =>(
                <div key={item.id} onClick={() => setActive(item.id)} className="Split">
                <FontAwesomeIcon icon={item.icon}
                className={item.id === active ? "ShoppingCart" : "Fauser"}
                 />
                </div>
               ))}
            </div>

        </nav>  
       </div>
    );
}

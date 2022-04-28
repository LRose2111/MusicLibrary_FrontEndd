import React from "react";
import './NavBar.css';
import {FaReact} from 'react-icons/fa';


const NavBar = () => {
    return (  
    <div className ="nav-background">
        <nav>
            <li className = "navbar-list"><a href="https://reactjs.org/" target="_blank"><FaReact color = 'darkolivegreen' size = '2.5rem'/></a></li>
        </nav>
        <div>
            <h1 className = 'musiclib-logo'>Music<small className= 'text-muted'>Library</small></h1>
        </div>
        <div>
            <a href="FRM ABVE RADIO" target="_blank"><img src ="\images\FRM_ABVE-no background.png" className = "navbar-image" alt = "FRM ABVE Logo"/></a>
        </div>
    </div>
    );
}
 
export default NavBar;
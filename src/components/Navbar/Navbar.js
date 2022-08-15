import { useContext, useState } from "react"
import OptBar from "./OptBar";
import {Link} from "react-router-dom";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../Theme";

import "./Navbar.css";

export default function Navbar() {
    const {theme} = useContext(ThemeContext);
    const [click, setClick] = useState(false);
    const optsNavbar = [ 
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Skills',
            path: '/Skills'
        },
        {
            id: 3,
            name: 'Projects',
            path: '/Projects'
        },
        {
            id: 4,
            name: 'Contact Me',
            path: '/Contact'
        }];
    
        function handleClick() {
            setClick(!click);
        }

    return(
        <>
            <div className="navbarContainer">
                <Link to="/" className={`${theme} navbarLogo`}> &lt; Fernando Villalobos /&gt;</Link>
                <OptBar optsArr={optsNavbar}/>
                <div className="barsIconContainer">
                    <button className={`${theme} barsIcon`} onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
            { click ? <OptBar optsArr={optsNavbar} optClass={click} handleClick={handleClick}/>: false}
        </>
    )
}
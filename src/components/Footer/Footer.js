
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopyright,
    faSun,
    faMoon
} from "@fortawesome/free-solid-svg-icons"

import "./Footer.css";

export default function Footer() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    function handleChange(e) {
        if(theme === "light-theme") {
            e.target.checked = false;
        }

        if(theme === "dark-theme") {
            e.target.checked = true;
        }
        console.log(e.target.checked);
    }
    return(
        <div className="mainFooterContainer">
            <div className={`${theme} footerSubcontainer`}>
                <div className={`${theme} switchContainer`}>
                    <input className="iptCheckbox" type="checkbox" id="switch" onChange={handleChange} onClick={() => toggleTheme()}></input>
                    <label htmlFor="switch">
                        <FontAwesomeIcon icon={faMoon} className="toggleIcon faSunIcon"/>
                        <FontAwesomeIcon icon={faSun} className="toggleIcon faMoonIcon"/>
                        <span className="ball"></span>
                    </label>
                </div>
                <span>Toggle Theme</span>
                <p><FontAwesomeIcon icon={faCopyright}/> Fernando Villalobos</p>
            </div>
        </div>
    )
}
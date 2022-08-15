import { useContext } from "react";
import {Link} from "react-router-dom";
import { ThemeContext } from "../../Theme";

import "./OptBar.css";

export default function OptBar({optsArr, optClass, handleClick}) {
    const {theme} = useContext(ThemeContext);

    return(
        <>
            <div className={optClass ? "optsContainerPhone": "optsContainer"}>
                {
                    optsArr.map(item => <Link  key={item.id} to={item.path} className={`${theme} opt`} onClick={handleClick}>{item.name}</Link>)
                }
            </div>    
        </>
    )
}
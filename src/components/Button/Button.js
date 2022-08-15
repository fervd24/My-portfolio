import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import "./Button.css";

export default function Button({textBtn, path}) {
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${theme} btnContainer`}>
            <a 
                href={path} 
                target="_blank" 
                rel="noreferrer" 
                className="btn"
            >{textBtn}</a>     
        </div>
    )
}
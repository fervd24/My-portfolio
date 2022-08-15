
import Button from "../Button/Button";
import developer from "../../assets/developer.png"
import { useContext } from "react";
import { ThemeContext } from "../../Theme";

import "./Header.css";


export default function Header() {
    const { theme } = useContext(ThemeContext);

    return(
        <header className={`${theme} whoamiContainer`}>
                <div className="whoamiSubcontainer">
                    <div className={`${theme} whoamiText`}>
                        <h2>Fernando Villalobos</h2>
                        <p>
                            An aspiring developer who loves to take
                            on new challenging projects and put to the test 
                            his analytical and technological capacities.
                        </p>
                        <div className="btnsContainer">
                            <Button textBtn="Follow me on github" path={'https://github.com/fervd24'}/>
                            <Button textBtn="CV" path={'https://www.google.com/'}/>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src={developer} alt="dev"/>
                    </div>
                </div>
            </header>
    )
}
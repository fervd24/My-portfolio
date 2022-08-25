
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
                        <div>
                            <h2>Hi everyone, I'm Fernando</h2>
                            <p>
                                An aspiring web developer who loves to take
                                on new challenging projects and put to the test 
                                his analytical and technological capacities.
                            </p>
                            <div className="btnsContainer">
                                <Button textBtn="Follow me on Github" path={'https://github.com/fervd24'}/>
                                <Button textBtn="See my resume" path={'https://drive.google.com/file/d/1sd1jN49Td6RKV9wE8Et3kZ6n7MYXbmXC/view?usp=sharing'}/>
                            </div>

                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src={developer} alt="dev"/>
                    </div>
                </div>
            </header>
    )
}
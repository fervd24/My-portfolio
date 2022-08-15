
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import coding from "../../assets/itcoding.png";
import cardsData from "./cardsData";
import ProjCards from "./ProjCards";

import "./Projects.css";


export default function Projects() {
    const {theme} = useContext(ThemeContext);

    return(
        <div className="projContainer">
            <div className="projSubcontainer">
                <div className="projTextContainer">
                    <div className={`${theme} projTextSubcontainer`}>
                        <h2>PROJECTS</h2>
                        <p>
                            My projects are mainly made up with frontend technologies
                            like html, css and javascript as well as framework like react.
                            Also some of the projects are made up with some backend technologies
                            how has it been NodeJs and his framework Express.
                        </p>
                    </div>
                </div>
                <div className="projImgContainer">
                    <div className="projImgSubcontainer">
                        <img src={coding} alt="coding"/>
                    </div>
                </div>
            </div>
            <ProjCards cards={cardsData}/>
        </div>
    )
}
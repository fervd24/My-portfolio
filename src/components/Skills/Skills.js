
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import data from "./skillsData";
import skills from "../../assets/sklls.png"

import "./Skills.css";

export default function Skills() {
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${theme} skillsContainer`}>
            <div className="skillsImgContainer">
                <img src={skills} alt="skills"/>
            </div>
            <div className="statisticsContainer">
                <div className="skillBarsContainer">
                    <h2>Language/Framework</h2>
                    {data.languages.map(item => <div key={item.id} className={`${theme} lgFwContainer`}>
                        <div className={`${theme} titleSkillBar`}>{item.name}</div>
                        <h2><div className={`${item.nameClass} bar`}></div> </h2>
                    </div>)}
                </div>
                <div className="aptsContainer">
                    <h2>Aptitudes</h2>
                    {data.aptitudes.map(item => <div key={item.id} className={`${theme} aptsSubcontainer`}>
                        <div className={`${theme} titleAptBar`}>{item.name}</div>
                        <h2><div className={`${item.nameClass} aptBar`}></div> </h2>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Theme";
import data from "./skillsData";
import skills from "../../assets/sklls.png"

import "./Skills.css";
import Aos from "aos";

export default function Skills() {
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        Aos.init();
      },[]);

    return(
        <div className={`${theme} skillsContainer`}>
            <div className="skillsImgContainer" data-aos="zoom-in" data-aos-duration="1500">
                <img src={skills} alt="skills"/>
            </div>
            <div className="statisticsContainer" >
                <div className="skillBarsContainer" data-aos="flip-left" data-aos-duration="1500">
                    <h2>Language/Framework</h2>
                    {
                    data.languages.map(item => <div key={item.id} className={`${theme} lgFwContainer`}>
                        <div className={`${theme} titleSkillBar`}>{item.name}</div>
                        <h2><div className={`${item.nameClass} bar`}></div> </h2>
                    </div>)
                    }
                </div>
                <div className="aptsContainer" data-aos="flip-right" data-aos-duration="2500">
                    <h2>Proficiency</h2>
                    {data.aptitudes.map(item => <div key={item.id} className={`${theme} aptsSubcontainer`}>
                        <div className={`${theme} titleAptBar`}>{item.name}</div>
                        <h2><div className={`${item.nameClass} aptBar`}></div> </h2>
                    </div>)}
                </div>
            </div>
        </div>
    );
}
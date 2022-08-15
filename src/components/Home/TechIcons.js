import {
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faNodeJs,
    faNpm
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./TechIcons.css"

export default function TechIcons() {
    return(
        <div className="techiconsContainer">
            <FontAwesomeIcon icon={faHtml5} className="techIcon htmlIcon"/>
            <FontAwesomeIcon icon={faCss3} className="techIcon cssIcon"/>
            <FontAwesomeIcon icon={faJs} className="techIcon jsIcon"/>
            <FontAwesomeIcon icon={faReact} className="techIcon reactIcon"/>
            <FontAwesomeIcon icon={faNodeJs} className="techIcon nodejsIcon"/>
            <FontAwesomeIcon icon={faNpm} className="techIcon npmIcon"/>
        </div>
    )
}
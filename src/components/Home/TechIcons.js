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
            <FontAwesomeIcon icon={faHtml5} className="techIcon htmlIcon" title="HTML 5"/>
            <FontAwesomeIcon icon={faCss3} className="techIcon cssIcon" title="CSS"/>
            <FontAwesomeIcon icon={faJs} className="techIcon jsIcon" title="JavaScript"/>
            <FontAwesomeIcon icon={faReact} className="techIcon reactIcon" title="React"/>
            <FontAwesomeIcon icon={faNodeJs} className="techIcon nodejsIcon" title="Node.js"/>
            <FontAwesomeIcon icon={faNpm} className="techIcon npmIcon" title="npm"/>
        </div>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconsData from "./iconsData";

import "./SocNetIcons.css";

export default function SocNetIcons() {
    return(
        <div className="socNetIconsContainer">
            {iconsData.map(icon => {
                return (
                    <a key={icon.id} href={icon.ref} target="_blank" rel="noreferrer" title={icon.title}>
                        <div className={`${icon.className} iconContainer`}>
                            <FontAwesomeIcon icon={icon.name} className="icon"/>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
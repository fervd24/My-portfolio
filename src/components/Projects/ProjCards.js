import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjCards.css";

export default function ProjCards({cards}) {
    return(
        <div className="projCardsContainer">
            <div className="projCardsSubcontainer" 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                {cards.map(item => {
                        return(
                            <a href={item.link} target="_blank" rel="noreferrer" key={item.id} className="cardContainer">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="projIconsContainer">
                                    {item.imgs.map(icon => <FontAwesomeIcon icon={icon.iconName} className={`${icon.className} projIcon`}/>)}
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    )
}
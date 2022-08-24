import { useContext } from "react";
import TechIcons from "./TechIcons";
import vader from "../../assets/Miproyecto.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { ThemeContext } from "../../Theme";

import "./Body.css";

export default function Body() {
    const {theme} = useContext(ThemeContext);

    const skillsList =[
        {
            id: 1,
            do: 'Build responsive and interactive Frontend interfaces for web using React'
        },
        {
            id: 2,
            do: 'Create tools that improve site interaction regardless of the browser'
        },
        {
            id: 3,
            do: 'Build REST APIs with NodeJs and Express.'
        },
    ];
    
    return(
        <body>
            <div className="whatidoContainer">
                <div className="imgContainer2">
                    <img src={vader} alt="vader"/>
                </div>
                <div className={`${theme} whatidoText`}>
                    <h2>What I do</h2>
                    <h3>Web development</h3>
                    <TechIcons/>
                    <div className="todoListContainer">
                        {
                            skillsList.map(todo => <li key={todo.id} className={`${theme} todoTask`}>
                                <FontAwesomeIcon icon={faCheck} className="checkIcon"/> 
                                <div>
                                    {todo.do}
                                </div>
                            </li>)

                        }
                    </div>
                </div>
            </div>
        </body>
    )
}
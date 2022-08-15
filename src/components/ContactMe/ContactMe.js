import ContactForm from "./ContactForm";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import meet from "../../assets/meet.png";

import "./ContactMe.css";

export default function ContactMe() {
    const {theme} = useContext(ThemeContext);
    return(
        <div className="contactMeContainer">
            <div className={`${theme} contactMeSubcontainer2`}>
                <h3>Hi ! , send me a message</h3>
                <p>I reply within 2 days.</p>
                <div className="contactImgContainer">
                    <img src={meet} alt="meet"/>
                </div>
            </div>
            <div className={`${theme} contactMeSubcontainer1`}>
                <h2>Contact Me</h2>
                <ContactForm/>
            </div>
        </div>
    )
}
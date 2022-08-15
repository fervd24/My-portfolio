import { useContext } from "react";
import { contactmeApiCall } from "../../api/contactmeApiCall";
import { contactmeValidations } from "../../helpers/contactmeValidations";
import { useForm } from "../../hooks/useForm";
import { ThemeContext } from "../../Theme";
import SocNetIcons from "../SocialNetworksIcons/SocNetIcons";

import "./ContactForm.css";

const initialForm = {
    name: '',
    email: '',
    msg: ''
}
export default function ContactForm() {
    const {theme} = useContext(ThemeContext);

    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, contactmeValidations, contactmeApiCall);
   
    return(
        <div className="contactMainContainer">
            {response ?
            <div className="msgSubContainer">
                <h1 className="messageSubmited">Message Succesfully Sent !</h1>
                <button onClick={() => window.location.reload(false)}>Back</button>
            </div>: 
            <form className="contactFormContainer" onSubmit={handleSubmit}>
                <div className="iptContainer">
                    <p htmlFor="name">Name</p>
                    <input 
                        name="name"
                        type="text"
                        value={form.name}
                        className={`${theme} ipt`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="iptContainer">
                    <p htmlFor="email">Email</p>
                    <input 
                        name="email"
                        type="text"
                        value={form.email}
                        className={`${theme} ipt`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="iptTxtContainer">
                    <p htmlFor="message">Message</p>
                    <textarea
                        name="message"
                        value={form.message}
                        className={`${theme} iptTextarea`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && <span>{errors.message}</span>}
                </div>
                <button type="submit" disabled={!form.name} className="iptSubmit">Submit</button>
                <div className={`${theme} loadingMsgContainer`}>
                    {loading && <p>Sending...</p>}
                </div>
                <div className="contactIconsContainer">
                    <SocNetIcons/>
                </div>
            </form>
            }
        </div>
    )
}
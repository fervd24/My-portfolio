import axios from "axios";

export const contactmeApiCall = async(form, setLoading, setResponse) => {

    try {
    
        await axios("https://phonebook-app-project.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            data: form
        });
    
        setLoading(false);
        setResponse(true);
 
         
    } catch (error) {
        setLoading(false);
        alert(error);
    }
}
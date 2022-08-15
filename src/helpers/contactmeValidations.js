
export const contactmeValidations = (form) => {

    let errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!form.name) {
        errors.name = "Please enter a name.";
    }else if(!nameRegex.test(form.name)) {
        errors.name = "The name only can contain letters";
    }

    if(!form.email){
        errors.email = "Please enter an email.";
    }else if(!regexEmail.test(form.email)) {
        errors.email = "The email doesn't have a correct format."
    }

    if(!form.message) {
        errors.message = "Please enter a message.";
    }else if(form.message.length > 200){
        errors.message = "The message can contain maximum 200 characters."
    }

    return errors;
}
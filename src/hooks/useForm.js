import { useState } from 'react'

export const useForm = (initialForm, formValidations, apiCall) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(formValidations(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(formValidations(form));

        if(Object.keys(errors).length === 0) {
            setLoading(true);
            setTimeout(() => {
                apiCall(form, setLoading, setResponse);

            }, 4000)

        }
    }

    return {
        form, 
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}

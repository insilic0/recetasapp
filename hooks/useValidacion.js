import React, {useState, useEffect} from 'react';

const useValidacion = (initialState, toValidate, toExecuteFunction) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(()=>{
        if(submitForm){
            const checkErrors = Object.keys(errors).length === 0;

            if(checkErrors){
                toExecuteFunction();
            }

            setSubmitForm(false);
        }
    }, [errors]);

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const validationErrors = toValidate(values);
        setErrors(validationErrors);
        setSubmitForm(true);
    }

    const handleBlur = () =>{
        const validationErrors = toValidate(values);
        setErrors(validationErrors);
    }

    return {
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidacion;

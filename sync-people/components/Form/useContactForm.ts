import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({initialValues,fields, onSubmit}:any) => {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const formRendered = useRef(true);

    useEffect(() => {
        if (formRendered.current) {
            setValues(initialValues);
            setErrors({});
            setTouched({});
        }
        formRendered.current = false;
    }, [initialValues]);

    const handleChange = (event:any, validations:any) => {
        const { target } = event;
        const { name, value } = target;

        event.persist();

        if (touched && validations) {
            validations.forEach((validation:any) => setErrors({...errors, [name]: validation(value)}));
        }
        setValues({ ...values, [name]: value });
    };

    const handleBlur = (event:any) => {
        const { target } = event;
        const { name } = target;

        setTouched({ ...touched, [name]: true });
    };

    const handleSubmit = (event:any) => {
        if (event) event.preventDefault();
        let newErrors:any = {};

        fields.forEach((field:any) => {
            if (field.validations) {
                field.validations.forEach((validation:any) => newErrors[field.name] = validation(values[field.name]));
                setErrors({...errors, ...newErrors});
            }
        });
        Object.keys(newErrors).forEach(key => {
            if (newErrors[key] === undefined) {
                delete newErrors[key];
            }
        });

        if (Object.keys(newErrors).length === 0) {
            onSubmit(event.target);
        }
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setErrors,
        setValues,
        setTouched,
    };
};

export default useCustomForm;
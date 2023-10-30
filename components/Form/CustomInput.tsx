import React from 'react';

type InputTypes = {
    fieldName: any,
    fieldType: any,
    label: any,
    handleChange: any,
    value: any,
    validations: any,
    errors: any,
    size: any,
    placeholder: any,
};


const CustomInput = (
    {
        fieldName,
        fieldType,
        label,
        handleChange,
        value,
        validations,
        errors,
        size,
        placeholder
    }:InputTypes) => {
    return (
        <section className={'flex flex-col'}>
            <label className={'contact-label'}>{label}</label>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                className={errors && errors[fieldName] ? `input error` : `input`}
                onChange={(event) => handleChange(event, validations)}
                value={value}
                placeholder={placeholder}
            />
            <span className={'error-message text-red-600'}>{errors ? errors[fieldName] : null}</span>
        </section>
    )
};

export default CustomInput

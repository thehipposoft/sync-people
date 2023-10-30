import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';
import styles from './form.module.scss';

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    customClass,
    emailServiceURL,
    submitButtonLabel
}:any) => {
    const [messageSent, setMessageSent] = useState('');
    const [isAPILoading, setIsAPILoading] = useState(false);
    const [messageDescription, setMessageDescription] = useState('');
    const initialValues = {
        name: '',
        customerEmail: '',
        phone: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
        setValues,
    } = useContactForm({
        initialValues,
        fields,
        /*
        onSubmit: () => {
            setIsAPILoading(true);
            axios.post(
                emailServiceURL,
                {
                    message: values.message,
                    name: values.name,
                    phone: values.phone,
                    customerEmail: values.customerEmail,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, *//*',
                    },
                }
            )
                .then(function (response) {
                    setValues(initialValues);
                    setMessageSent('succeed');
                    setIsAPILoading(false);
                })
                .catch(function (error) {
                    setMessageDescription(error.toString());
                    setMessageSent('error');
                    setIsAPILoading(false);
                });
        }
        */
        
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-4 font-semibold'}>Thanks!</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Algo salió mal</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    return (
        <form 
            className={'mx-auto mt-10 bg-white p-4 w-[700px] grid grid-cols-2'}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field:any)=> {
                    const { name, type, label, multiple, validations, selectOptions, size, placeholder } = field;

                    switch (type) {
                        case 'text':
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    size={size}
                                    placeholder={placeholder}
                                />
                            );
                        case 'textArea':
                            return (
                                <section className={'item'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={8}
                                        cols={40}
                                        className={'input_box'}
                                        placeholder={placeholder}
                                        onChange={(e) => handleChange(e, [])}
                                    />
                                </section>
                            );
                        case 'select':
                            return (
                                <section className='flex flex-col' key={name}>
                                    <label className='contact-label'>{label}</label>
                                    <select key={name} className='bg-[#565b5f1e] w-[300px] rounded-md h-[40px] p-[5px] my-[5px]' multiple={multiple} name={name} id={name} value={values[name]}>
                                        {
                                            selectOptions.map((option:any, index:any) => <option value={option.value} key={index}>{option.label}</option>)
                                        }
                                    </select>
                                </section>
                            );
                        case 'date':
                            return (
                                <section className='flex flex-col'>
                                    <label className='contact-label'>{label}</label>
                                    <input type="date" className='input' name={name} id={name} value={values[name]}></input>
                                </section>
                            );
                        default:
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    size={size}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    placeholder={placeholder}
                                />
                            )
                    }
                })
            }
            {renderSentMessage()}
            <section className={`${styles.item} text-center flex justify-end`}>
                <input
                    type={'submit'}
                    value={submitButtonLabel ? submitButtonLabel : 'SEND'}
                    className={`contact-input-button py-2 px-7 text-white cursor-pointer relative bottom-6 ${isAPILoading ? 'opacity-50' : ''}`}
                    disabled={isAPILoading}
                />
            </section>
        </form>
    )
};

MyCustomForm.propTypes = {
    fields: PropTypes.array,
    onSuccessMessage: PropTypes.string,
    onErrorMessage: PropTypes.string,
    customClass: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    emailServiceURL: PropTypes.string,
    placeholder: PropTypes.string,
};

MyCustomForm.defaultProps = {
    fields: [{
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'Name'
    }],
    onSuccessMessage: 'Success!',
    onErrorMessage: 'Something went wrong.'
};

export default MyCustomForm

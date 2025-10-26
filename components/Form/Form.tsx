"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Script from 'next/script';

const initialValues = {
    name: '',
    lastName: '',
    customerEmail: '',
    message: '',
};

type FieldsType = {
    name: 'lastName' | 'name' | 'customerEmail' | 'message' ;
    type: 'text' | 'textArea' | 'email' ;
    label: string;
    placeholder: string;
    required?: boolean;
}

type MyCustomFormProps = {
    fields: FieldsType[];
    onSuccessMessage: string;
    onErrorMessage: string;
    emailServiceURL: string;
    submitButtonLabel: string;
};

type FormValues = {
    name: string;
    lastName: string;
    customerEmail: string;
    message: string;
};

declare global {
    const grecaptcha: {
        enterprise: {
            ready: (cb: () => void) => void;
            execute: (
                siteKey: string,
                options: { action: string }
        ) => Promise<string>;
        };
    };
}

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel
}:MyCustomFormProps) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const [values, setValues] = useState<FormValues>({
        name: '',
        lastName: '',
        customerEmail: '',
        message: '',
    });
    const [googleToken, setGoogleToken] = useState<string>('');
    const [captchaError, setCaptchaError] = useState<string>('');

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'text-4xl text-[#8D78E0]'}>Thanks! </h2>
                <p className='pt-2'>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event: any) => {
        if (event) event.preventDefault();

        if (!googleToken) {
            setCaptchaError('Please, verify the captcha');
            return;
        }

        setIsAPILoading(true);

        // Create FormData for Contact Form 7
        const formData = new FormData();
        formData.append('your-name', values.name);
        formData.append('your-last-name', values.lastName);
        formData.append('your-email', values.customerEmail);
        formData.append('your-message', values.message);
        formData.append('g-recaptcha-response', googleToken);

        axios.post(
            emailServiceURL, // This should be your CF7 form endpoint
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
            .then(function (response) {
                // Check CF7 response structure
                if (response.data && response.data.status === 'mail_sent') {
                    setValues(initialValues);
                    setMessageSent('succeed');
                    setGoogleToken(''); // Reset captcha
                    setCaptchaError('');
                } else {
                    setMessageDescription(response.data?.message || 'Submission failed');
                    setMessageSent('error');
                }
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(error.response?.data?.message || error.toString());
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    const executeRecaptcha = () => {
        if (typeof grecaptcha !== "undefined") {
            grecaptcha.enterprise.ready(async () => {
                try {
                    const token = await grecaptcha.enterprise.execute(
                        "6LeeA-YrAAAAAGpbSzd7rGRYTKb2JxWVZOUpsOk6",
                        { action: "submit" }
                    );
                    const tokenInput = document.getElementById("recaptcha-token") as HTMLInputElement;
                    if (tokenInput) tokenInput.value = token;
                    setGoogleToken(token);
                } catch (e) {
                    console.error("Recaptcha error", e);
                }
            });
        }
    };

    return (
        <>
            <Script
                src="https://www.google.com/recaptcha/enterprise.js?render=6LeeA-YrAAAAAGpbSzd7rGRYTKb2JxWVZOUpsOk6"
                strategy="afterInteractive"
                onLoad={executeRecaptcha}
            />
            <form
                className={`flex flex-wrap justify-between md:mt-6 mt-12 mx-auto md:w-[550px] w-[85vw]`}
                onSubmit={handleSubmit}
            >
                {
                    fields.map((field, index)=> {
                        const { name, type, label, placeholder } = field;

                        switch (type) {
                            case 'textArea':
                                return (
                                    <section className={'mb-4 w-full'} key={name}>
                                        <label className={'contact-label'}>{label}</label>
                                        <textarea
                                            name={name}
                                            id={name}
                                            value={values[name]}
                                            rows={6}
                                            cols={40}
                                            className='resize-none py-3 px-8 lg:w-full md:max-w-[550px] w-full placeholder-[#8D78E0]'
                                            placeholder={placeholder}
                                            onChange={handleChange}
                                            required={field.required}
                                        />
                                    </section>
                                );
                            case 'email':
                                return (
                                    <section className='mb-4 w-full' key={index}>
                                        <label className={'contact-label'}>{label}</label>
                                        <input
                                            type={type}
                                            name={name}
                                            id={name}
                                            className={'py-3 px-8 lg:w-full md:max-w-[550px] w-full  placeholder-[#8D78E0] rounded-[2em]'}
                                            onChange={handleChange}
                                            value={values[name]}
                                            placeholder={placeholder}
                                            required={field.required}
                                        />
                                    </section>
                                );
                            default:
                                return (
                                    <section className='mb-4 md:w-[49%] w-full' key={index}>
                                        <label className={'contact-label'}>{label}</label>
                                        <input
                                            type={type}
                                            name={name}
                                            id={name}
                                            className={'py-3 px-8 lg:w-full lg:max-w-[500px] w-full md:max-w-[525px] placeholder-[#8D78E0] rounded-[2em]'}
                                            onChange={handleChange}
                                            value={values[name]}
                                            placeholder={placeholder}
                                            required={field.required}
                                        />
                                    </section>
                                )
                        }
                    })
                }
                {renderSentMessage()}
                {
                    captchaError && <div className={`w-full text-center mb-6 !text-red-500 border border-red-600 rounded-lg p-3 bg-red-200 font-bold`}>
                        <p>{captchaError}</p>
                    </div>
                }
                <button
                    disabled={isAPILoading}
                    value={submitButtonLabel ? submitButtonLabel : 'Send'}
                    type="submit"
                    className={` ${isAPILoading ? 'opacity-50' : ''} purple-b rounded-3xl px-8 py-2 text-white text-lg font-semibold w-fit`}
                >
                    {submitButtonLabel}
                </button>
            </form>
        </>
    )
};

export default MyCustomForm

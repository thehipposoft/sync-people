'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';
import { createTalentNew } from "@/lib/api";
import Modal from '@/components/Modal';

const SignUpMenu = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isApiLoading, setIsApiLoading] = useState<boolean>(false);
    const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');
        setIsApiLoading(true);
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const username = email.split('@')[0];

        const data = {
            first_name: formData.get('first-name') as string,
            last_name: formData.get('last-name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            lookingFor: 'job',
            username: username,
        };

        const apiResponse = await createTalentNew(data);

        if (apiResponse.status === 200) {
            setIsApiLoading(false);
            setErrorMessage('');
            //TODO: Clean fields
            //TODO: Redirect to login page or display pop-up message about successful registration
            //TODO: Implement email verification
            setOpenSuccessModal(true);
        } else {
            setIsApiLoading(false);
            setErrorMessage(apiResponse.details ? apiResponse.details : apiResponse.message);
        }
    };

    return (
        <div className='flex items-center justify-center h-screen px-4 w-full'>
            <div className='bg-white rounded-2xl border p-8 shadow-xl'>
                <h1 className='text-5xl text-center'>Sign up</h1>
                <form onSubmit={handleSubmit} className='md:pt-6 pt-4'>
                    <section className='flex gap-4 flex-col md:flex-row'>
                        <div className='lg:w-1/2 flex flex-col gap-1'>
                            <label
                                htmlFor="first-name"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                required
                            />
                        </div>
                        <div className='lg:w-1/2 flex flex-col gap-1'>
                            <label
                                htmlFor="last-name"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                            />
                        </div>
                    </section>
                    <section className='flex flex-col'>
                        <label
                            htmlFor="email"
                            className='pb-1'
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label
                            htmlFor="password"
                            className='pb-1'
                        >
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={viewPassword ? 'text' : 'password'}
                                name="password"
                            />
                            <div
                                className='absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer opacity-50'
                                onClick={() => setViewPassword(!viewPassword)}>
                                {
                                    viewPassword ? (
                                        <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_iconCarrier">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z" fill="#0F0F0F"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z" fill="#0F0F0F"></path>
                                            </g>
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" width={18} height={18} xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M4.4955 7.44088C3.54724 8.11787 2.77843 8.84176 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C13.2958 19 14.4799 18.8108 15.5523 18.4977L13.8895 16.8349C13.2936 16.9409 12.6638 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366C4.23754 10.2097 4.99526 9.50784 5.93214 8.87753L4.4955 7.44088Z" fill="#0F0F0F"></path>
                                                <path d="M8.53299 11.4784C8.50756 11.6486 8.49439 11.8227 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5C12.1716 15.5 12.3458 15.4868 12.516 15.4614L8.53299 11.4784Z" fill="#0F0F0F"></path>
                                                <path d="M15.4661 12.4471L11.5473 8.52829C11.6937 8.50962 11.8429 8.5 11.9944 8.5C13.9274 8.5 15.4944 10.067 15.4944 12C15.4944 12.1515 15.4848 12.3007 15.4661 12.4471Z" fill="#0F0F0F"></path>
                                                <path d="M18.1118 15.0928C19.0284 14.4702 19.7715 13.7805 20.3413 13.1634C20.9657 12.4872 20.9657 11.5128 20.3413 10.8366C18.8117 9.18002 16.0331 7 12 7C11.3594 7 10.7505 7.05499 10.1732 7.15415L8.50483 5.48582C9.5621 5.1826 10.7272 5 12 5C16.8112 5 20.0833 7.60905 21.8107 9.47978C23.1426 10.9222 23.1426 13.0778 21.8107 14.5202C21.2305 15.1486 20.476 15.8603 19.5474 16.5284L18.1118 15.0928Z" fill="#0F0F0F"></path>
                                                <path d="M2.00789 3.42207C1.61736 3.03155 1.61736 2.39838 2.00789 2.00786C2.39841 1.61733 3.03158 1.61733 3.4221 2.00786L22.0004 20.5862C22.391 20.9767 22.391 21.6099 22.0004 22.0004C21.6099 22.3909 20.9767 22.3909 20.5862 22.0004L2.00789 3.42207Z" fill="#0F0F0F"></path>
                                            </g>
                                        </svg>
                                    )
                                }
                            </div>
                        </div>
                    </section>
                    <section className='flex gap-2'>
                        <input
                            type='checkbox'
                            name='terms'
                            id='terms'
                            required
                        />
                        <label htmlFor="terms">
                            By signing up, I agree with the <Link href={ROUTES.TERMS} className='text-secondary'>Terms of Use</Link> & <Link href={ROUTES.PRIVACY_POLICY} className='text-secondary'>Privacy Policy</Link>
                        </label>
                    </section>
                    {
                        errorMessage && <p className="text-red-500 mt-3 bg-red-200 border border-red-500 p-4 rounded-md mb-3">
                            {errorMessage}
                        </p>
                    }
                    <button
                        type="submit"
                        value="Sign up"
                        className='primary-btn mx-0 w-full lg:w-auto'
                        disabled={isApiLoading}
                    >
                        Sign up
                    </button>
                </form>
                <p className='text-center pt-6'>
                    Already have an account? <Link href={ROUTES.LOGIN} className='font-semibold text-secondary hover:underline'>Login</Link>
                </p>
            </div>
            <Modal
                isOpen={true}
            >
                <h1 className='text-4xl text-center'>
                    Almost done!
                </h1>
                <p className='my-4'>
                    We have sent you an email to verify your account.
                </p>
                <p className='mb-4'>
                    Please check in your spam folder if you don't see it in your inbox.
                </p>
                <Link href={ROUTES.LOGIN} className='primary-btn lg:w-fit w-full mx-auto flex justify-center mt-4'>
                    Login
                </Link>
            </Modal>
        </div>
    );
};

export default SignUpMenu;

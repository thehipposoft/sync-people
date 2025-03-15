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
                    <section className='flex gap-4'>
                        <div className='w-1/2 flex flex-col gap-1'>
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
                        <div className='w-1/2 flex flex-col gap-1'>
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
                        <input
                            type="password"
                            name="password"
                        />
                    </section>
                    <section className='flex gap-2'>
                        <input
                            type='checkbox'
                            name='terms'
                            id='terms'
                            required
                        />
                        <label htmlFor="terms">
                            By signing up, I agree with the <Link href={ROUTES.TERMS} className='text-purple'>Terms of Use</Link> & <Link href={ROUTES.PRIVACY_POLICY} className='text-purple'>Privacy Policy</Link>
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
                        className='primary-btn mx-0 w-fit lg:w-auto'
                        disabled={isApiLoading}
                    >
                        Sign up
                    </button>
                </form>
                <p className='text-center pt-6'>
                    Already have an account? <Link href={ROUTES.LOGIN} className='font-semibold text-purple hover:underline'>Login</Link>
                </p>
                <div className='flex justify-around items-center pt-10'>
                    <Image src={'/assets/logo.svg'} width={150} height={100} alt='Sync logo' />
                    <div className='flex justify-end items-end'>
                        <Image src={'/assets/images/vectors/facebook.svg'} width={30} height={30} alt='icon' className='mr-2' />
                        <Image src={'/assets/images/vectors/twitter.svg'} width={30} height={30} alt='icon' className='mx-4' />
                        <Image src={'/assets/images/vectors/linkedin.svg'} width={30} height={30} alt='icon' className='ml-2' />
                    </div>
                </div>
            </div>
            <Modal
                isOpen={openSuccessModal}
            >
                <h1 className='text-4xl'>
                    Almost done!
                </h1>
                <p className='text-center my-4'>
                    We have sent you an email to verify your account.
                </p>
                <Link href={ROUTES.LOGIN} className='primary-btn'>
                    Login
                </Link>
            </Modal>
        </div>
    );
};

export default SignUpMenu;

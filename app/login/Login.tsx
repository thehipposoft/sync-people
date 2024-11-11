"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { login } from '@/lib/api';
import { ROUTES } from '../constants';

const LoginMenu = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isApiLoading, setIsApiLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const data = {
            email,
            password,
        };

        setIsApiLoading(true);

        const apiResponse = await login(data);

        if (apiResponse.status === 200) {
            console.log(">>apiResponse", apiResponse);
            setIsApiLoading(false);
            setErrorMessage('');
            // Clean fields
            //e.currentTarget.reset();
            // Will open a modal
        } else {
            setIsApiLoading(false);
            setErrorMessage(apiResponse.message);
        }
    };

    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <div className='bg-white mx-4 rounded-2xl border p-8 shadow-xl'>
                <h1 className='text-5xl text-center'>Welcome back!</h1>
                <form className='md:pt-6' onSubmit={handleSubmit}>
                    <section className='flex flex-col'>
                        <label
                            htmlFor="email"
                            className='pb-1'
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label
                            htmlFor="text"
                            className='pb-1'
                        >
                            Password:
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                        />
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
                        Login
                    </button>
                    <div className=' flex-col items-center hidden'>
                        <div className='flex gap-4 items-center'>
                            <div className='h-[1px] bg-black/30 w-44' />
                            <h3 className='text-base'>OR</h3>
                            <div className='h-[1px] bg-black/30 w-44' />
                        </div>
                        <div className='flex gap-4 '>
                            <div className='bg-red-700 p-4 rounded-full'>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5312 11.2967H23.625V11.25H13.5V15.75H19.8579C18.9304 18.3696 16.4379 20.25 13.5 20.25C9.77231 20.25 6.75 17.2277 6.75 13.5C6.75 9.77231 9.77231 6.75 13.5 6.75C15.2207 6.75 16.7861 7.39912 17.9781 8.45944L21.1601 5.27737C19.1509 3.40481 16.4633 2.25 13.5 2.25C7.28719 2.25 2.25 7.28719 2.25 13.5C2.25 19.7128 7.28719 24.75 13.5 24.75C19.7128 24.75 24.75 19.7128 24.75 13.5C24.75 12.7457 24.6724 12.0094 24.5312 11.2967Z" fill="#ffffff"/>
                                <path d="M3.54712 8.26369L7.24331 10.9744C8.24343 8.49825 10.6656 6.75 13.5 6.75C15.2207 6.75 16.7861 7.39913 17.9781 8.45944L21.1601 5.27738C19.1509 3.40481 16.4632 2.25 13.5 2.25C9.17887 2.25 5.43149 4.68956 3.54712 8.26369Z" fill="#ffffff"/>
                                <path d="M13.5001 24.7499C16.4059 24.7499 19.0463 23.6378 21.0426 21.8294L17.5607 18.883C16.3933 19.7709 14.9667 20.2511 13.5001 20.2499C10.5739 20.2499 8.08937 18.3841 7.15337 15.7803L3.48474 18.6068C5.34662 22.2501 9.12774 24.7499 13.5001 24.7499Z" fill="#ffffff"/>
                                <path d="M24.5312 11.2967H23.625V11.25H13.5V15.75H19.8579C19.4142 16.9967 18.615 18.0862 17.559 18.8837L17.5607 18.8826L21.0426 21.8289C20.7962 22.0528 24.75 19.125 24.75 13.5C24.75 12.7457 24.6724 12.0094 24.5312 11.2967Z" fill="#ffffff"/>
                            </svg>
                            </div>
                            <Image src={'/assets/images/facebook-button.png'} alt='Facebook icon' width={50} height={50} />
                            <div className='bg-black p-4 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 27 27" fill=''><path  d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z " fill='#ffffff'/></svg>
                            </div>
                        </div>
                    </div>
                </form>
                <p className='text-center pt-6'>
                    Don't have an account? <Link href={ROUTES.SIGN_UP} className='font-semibold text-purple hover:underline'>Register</Link>
                </p>
                <div className='flex justify-around items-center md:w-[450px] pt-10'>
                    <Image src={'/assets/logo.svg'} width={150} height={100} alt='Sync logo' />
                    <div className='flex justify-end items-end'>
                        <Image src={'/assets/images/vectors/facebook.svg'} width={30} height={30} alt='icon' className='mr-2' />
                        <Image src={'/assets/images/vectors/twitter.svg'} width={30} height={30} alt='icon' className='mx-4' />
                        <Image src={'/assets/images/vectors/linkedin.svg'} width={30} height={30} alt='icon' className='ml-2' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginMenu

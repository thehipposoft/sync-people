"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { login } from '@/lib/api';
import { ROUTES } from '../constants';
import { useRouter } from 'next/navigation';

const LoginMenu = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isApiLoading, setIsApiLoading] = useState<boolean>(false);
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');
        setIsApiLoading(true);
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
            setIsApiLoading(false);
            setErrorMessage('');

            router.push(`${ROUTES.MY_PROFILE}/${apiResponse.talent_id}/create-talent-profile`);
        } else {
            setIsApiLoading(false);
            setErrorMessage(apiResponse.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full my-6 lg:my-20'>
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
                <p className='text-center pt-2'>
                    <Link
                        target={'_blank'}
                        href={'https://admin.insyncx.com/wp-login.php?action=lostpassword'}
                        className='font-semibold text-purple hover:underline'
                    >Forgot your password?
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default LoginMenu

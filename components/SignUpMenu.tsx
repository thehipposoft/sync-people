import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignUpMenu = ({ user }:any) => {
    return (
        <div className='flex'>
            <div className='flex items-center justify-center h-screen w-screen bg-[#EBEFFF]'>
                <div className='bg-white rounded-2xl border p-8 shadow-xl'>
                    <h1 className='text-5xl text-center'>Sign up</h1>
                    <form className='md:pt-6'>
                        <section className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="text" className='pb-2'>First name</label>
                                <input type="text" name="first-name" id="" className=''/>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="text" className='pb-2'>Last name</label>
                                <input type="text" name="first-name" id="" className=''/>
                            </div>
                        </section>
                        <section className='flex flex-col'>
                            <label htmlFor="text" className='pb-1'>Email</label>
                            <input type="password" name="" id="" className=''/>
                        </section>
                        <section className='flex flex-col'>
                            <label htmlFor="text" className='pb-1'>Password</label>
                            <input type="password" name="" id="" className=''/>
                        </section>
                        <section className='flex gap-2'>
                            <input type='checkbox' name='terms' />
                            <label htmlFor="">By signing up, I agree with the <strong className='text-[#7052E5]'>Terms of Use</strong> & <strong className='text-[#7052E5]'>Privacy Policy</strong></label>
                        </section>
                        <section className='py-4'>
                            <Link href={`${user === 'business' ? '/business-form' : 'profile-form'}`}>
                                <input type="submit" value="Sign up" className='purple-b md:py-2 md:px-8 cursor-pointer w-1/4' />
                            </Link>
                        </section> 
                    </form>
                    <p className='text-center pt-6'>Already havef an account? <Link href="/login" className='font-semibold text-[#7052E5] hover:underline'>Login</Link></p>
                    <div className='flex justify-around items-center pt-10'>
                        <Image src={'/assets/logo.svg'} width={150} height={100} alt='Sync logo' />
                        <div className='flex justify-end items-end'>
                            <Image src={'/assets/images/vectors/facebook.svg'} width={30} height={30} alt='icon' className='mr-2' />
                            <Image src={'/assets/images/vectors/twitter.svg'} width={30} height={30} alt='icon' className='mx-4' />
                            <Image src={'/assets/images/vectors/linkedin.svg'} width={30} height={30} alt='icon' className='ml-2' />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default SignUpMenu;
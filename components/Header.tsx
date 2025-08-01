'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import SideMenu from './sideMenu';
import { ROUTES } from '@/app/constants';
import { logout } from '@/lib/api';
import { useRouter } from 'next/navigation';

type HeaderProps = {
    inDashboard?: boolean;
    isLoggedIn?: string | undefined;
    userId?: string,
};

const Header = ({
    inDashboard,
    isLoggedIn,
    userId,
}:HeaderProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const router = useRouter();

    const handleLogout = async () => {
        const response = await logout();
        if (response.status === 200) {
            router.push(ROUTES.HOME);
        }
    };

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className={`${inDashboard ? 'px-0 py-0 w-auto mx-0 md:hidden h-auto' : 'header-glass px-8 w-full mx-auto'} flex justify-between items-end md:items-start top-0 lg:w-full lg:py-0 lg:px-0 flex-wrap z-30 `}>
            <div className='lg:w-[1250px] w-full flex justify-between items-center mx-auto'>
                <Link href={ROUTES.HOME} className={`${inDashboard ? 'hidden' : ''}`}>
                    <Image
                        src={'/assets/logo.png'}
                        alt='Insyncx logo'
                        width={593}
                        height={337}
                        className='max-w-[12rem] md:max-w-lg md:w-[200px] w-[170px]'
                    />
                </Link>
                <svg
                    width="35" height="35" viewBox="0 0 30 15"
                    fill="none"
                    onClick={toggleMenu}
                    className={`z-40 md:hidden bg-transparent ${openMenu ? 'fixed right-8' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect className={`duration-700 ease-in-out origin-left ${openMenu ? 'rotate-45 -translate-y-[6px] fill-white' : ''}`} width="30" height="3.5" rx="1.375" fill="#1A335D"/>
                    <rect className={`duration-700 ease-in-out ${openMenu ? 'opacity-0' : ''}`} y="6.125" width="30" height="3.5" rx="1.375" fill="#1A335D"/>
                    <rect className={`duration-700 ease-in-out origin-left ${openMenu ? '-rotate-45 translate-y-[6px] fill-white' : ''}`} y="12.25" width="30" height="3.5" rx="1.375" fill="#1A335D"/>
                </svg>
                <nav className={`md:flex justify-center hidden items-center flex-wrap w-full md:w-fit gap-6 md:gap-0`}>
                    <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.ABOUT}>
                        About
                    </Link>
                    <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.CONTACT}>
                        Contact
                    </Link>
                    <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.FAQS}>
                        FAQs
                    </Link>
                    {
                        isLoggedIn ?
                        <div className='flex items-center'>
                            <div>
                                <Link
                                    className='primary-btn'
                                    href={`${ROUTES.MY_PROFILE}/${userId}`}
                                >
                                    Dashboard
                                </Link>
                            </div>
                            <button
                                className="primary-btn "
                                onClick={handleLogout}
                            >
                                Log out
                            </button>
                        </div>
                        :
                        <div className='flex'>
                            <div>
                                <Link
                                    className='primary-btn'
                                    href={ROUTES.SIGN_UP}
                                >
                                    Sign Up
                                </Link>
                            </div>
                            <div className='mx-2'>
                                <Link
                                    className='secondary-btn'
                                    href={ROUTES.LOGIN}
                                >
                                    Log In
                                </Link>
                            </div>
                        </div>
                    }
                </nav>
                <SideMenu userId={userId} sideMenu={openMenu} closeSideMenu={toggleMenu}/>
            </div>
        </header>
    )
}

export default Header

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import SideMenu from './sideMenu';
import BackDrop from './sideMenu/backDrop';
import { ROUTES } from '@/app/constants';
import ComingSoonModal from './ComingSoonModal';
import { getUserProfile } from '@/lib/protected-api';
import { logout } from '@/lib/api';
import { useRouter } from 'next/navigation';

type HeaderProps = {
    isFixed?: boolean;
    inDashboard?: boolean;
    isLoggedIn?: string | undefined;
    userId?: string,
    is404?: boolean;
};

const Header = ({
    isFixed,
    inDashboard,
    isLoggedIn,
    userId,
    is404,
}:HeaderProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [stateUserId, setStateUserId] = useState<string | undefined>(userId);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const userData = await getUserProfile();
            if (userData) {
                setStateUserId(userData.id);
            }
        };
        if (isLoggedIn) {
            fetchUserProfile();
        }
    }, []);

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
        <div className={`header ${inDashboard ? 'px-0 py-0 w-auto mx-0 md:hidden' : 'py-2 px-8 w-full mx-auto'} ${isFixed ? 'fixed lg:relative' : ''} top-0 bg-white lg:w-full  lg:py-0  lg:px-0 flex-wrap z-30 `}>
            <div className='lg:w-[1250px] flex justify-between items-center mx-auto'>
                <Link href={ROUTES.HOME} className={`${inDashboard ? 'hidden' : ''}`}>
                    <Image
                        src={'/assets/logo.png'}
                        alt='Insyncx logo'
                        width={593}
                        height={337}
                        className='max-w-[12rem] md:max-w-lg w-[200px]'
                    />
                </Link>
                <svg viewBox="0 0 100 80" width="40" height="40" onClick={toggleMenu} className='md:hidden block w-fit'>
                    <rect width="100" height="15" rx="10" fill='#1A335D'></rect>
                    <rect y="30" width="100" height="15" rx="10" fill='#1A335D'></rect>
                    <rect y="60" width="100" height="15" rx="10" fill='#1A335D'></rect>
                </svg>
                <nav className={`${is404 ? 'md:hidden' : ''} md:flex justify-center hidden items-center flex-wrap w-full md:w-fit gap-6 md:gap-0`}>
                    <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.ABOUT}>
                        About
                    </Link>
                    <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.CONTACT}>
                        Contact
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
                {
                    is404 ?
                    <nav className='md:flex justify-center hidden items-center flex-wrap w-full md:w-fit gap-6 md:gap-0'>
                        <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.HOME}>
                            Home
                        </Link>
                        <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.ABOUT}>
                            About
                        </Link>
                        <Link className='md:mx-2 md:p-2 hover:opacity-50 duration-300' href={ROUTES.CONTACT}>
                            Contact
                        </Link>
                    </nav>
                    : <></>
                }
                <SideMenu userId={userId} sideMenu={openMenu} closeSideMenu={toggleMenu}/>
                <BackDrop sideMenu={openMenu} closeSideMenu={toggleMenu} isDashboard={inDashboard} />
                <ComingSoonModal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                />
            </div>
        </div>
    )
}

export default Header

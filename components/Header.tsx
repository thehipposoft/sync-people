'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideMenu from './sideMenu';
import BackDrop from './sideMenu/backDrop';
import { ROUTES } from '@/app/constants';
import ComingSoonModal from './ComingSoonModal';

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return (
        <div className='sticky top-0 bg-white w-full md:py-0 py-2 px-8 md:px-0 flex-wrap z-30'>
            <div className='md:w-[1250px] flex justify-between items-center  mx-auto'>
                <Link href={ROUTES.HOME}>
                    <Image
                        src={'/assets/logo.svg'}
                        alt='Sync-people logo'
                        width={220} height={150}
                    />
                </Link>
                <svg viewBox="0 0 100 80" width="40" height="40" onClick={toggleMenu} className='md:hidden block'>
                    <rect width="100" height="15" rx="10" fill='#1A335D'></rect>
                    <rect y="30" width="100" height="15" rx="10" fill='#1A335D'></rect>
                    <rect y="60" width="100" height="15" rx="10" fill='#1A335D'></rect>
                </svg>
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
                    <div className='mx-2 hidden'>
                        <Link
                        href={'/courses'}>
                            <button className='white-b py-2 px-4 rounded-xl cursor-pointer'>Training and Licenses</button>
                        </Link>
                    </div>
                    <div className='flex gap-3 mx-4 '>
                        <Link
                            className='secondary-btn'
                            href={ROUTES.COMING_SOON}
                        >
                            Log In
                        </Link>
                    </div>
                </nav>
                <SideMenu sideMenu={openMenu} closeSideMenu={toggleMenu}/>
                <BackDrop sideMenu={openMenu} closeSideMenu={toggleMenu}/>
                <ComingSoonModal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                />
            </div>
        </div>
    )
}

export default Header

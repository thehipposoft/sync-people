import Image from 'next/image';
import React from 'react';
import ClientDetail from './ClientDetail';
import SideMenu from './SideMenu';

const ClientProfile = () => {
    return (
        <div className='flex'>
            <SideMenu />
            <div className='w-full pb-8'>
                <nav className='flex justify-between py-5 border-b px-6'>
                    <div className='flex gap-4'>
                        <p>Dashboard</p>
                        <p>Talents</p>
                        <p>Clients</p>
                    </div>
                    <div className='flex gap-2'>
                        <Image src={'/assets/images/vectors/music.svg'} alt='icon' width={20} height={20} />
                        <Image src={'/assets/images/vectors/music.svg'} alt='icon' width={20} height={20} />
                        <a href="">Admin</a>
                    </div>
                </nav>
                <div className='px-6 pt-4'>
                    <div className='flex justify-end gap-4'>
                        <button className='flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <path d="M2.51696 20.4795H4.27883L15.1332 9.60959L13.3713 7.84521L2.51696 18.7151V20.4795ZM20.5132 7.78219L15.1647 2.48904L16.9265 0.724658C17.409 0.241553 18.0017 0 18.7048 0C19.407 0 19.9993 0.241553 20.4817 0.724658L22.2436 2.48904C22.726 2.97215 22.9777 3.55523 22.9987 4.2383C23.0197 4.92053 22.7889 5.5032 22.3065 5.9863L20.5132 7.78219ZM18.6884 9.6411L5.34853 23H0V17.6438L13.3399 4.28493L18.6884 9.6411ZM14.2523 8.7274L13.3713 7.84521L15.1332 9.60959L14.2523 8.7274Z" fill="#9747FF"/>
                            </svg>
                            Edit
                        </button>
                    </div>
                    <div className='flex'>
                        <ClientDetail />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ClientProfile;
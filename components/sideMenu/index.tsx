'use client';
import React from "react";
import Image from "next/image";
import { Link } from 'next-view-transitions';
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants";

type SideMenuTypes = {
    sideMenu: any,
    closeSideMenu: any,
    userId?: string;
}

const SideMenu = ({sideMenu, closeSideMenu, userId}:SideMenuTypes) => {
    const router = useRouter();
    const handleLogout = async () => {
        const response = await logout();
        if (response.status === 200) {
            router.push(ROUTES.HOME);
        }
    };

    return(
        <div className={`duration-500 top-0 right-0 md:w-80 w-screen fixed h-screen bg-[#EBEFFF] z-10 flex flex-col justify-center items-center opacity-0 ${ sideMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-100'}`}>
            <Image
                src={'/assets/logo.png'}
                width={593}
                height={337}
                className='max-w-[12rem] md:max-w-lg w-[200px]'
                alt='Insyncx logo'
            />
            <ul className="text-center md:mt-12 font-bold">
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                    <Link href="/#about" onClick={closeSideMenu}>About</Link>
                </li>
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                    <Link href="/#contact" onClick={closeSideMenu}>Contact</Link>
                </li>
                {
                    userId ?
                    <div className="flex flex-col ">
                        <div className='mx-4 my-4'>
                            <Link href={`${ROUTES.MY_PROFILE}/${userId}`} onClick={closeSideMenu}>
                                <button className='primary-btn py-2 px-4 rounded-xl cursor-pointer'>Dashboard</button>
                            </Link>
                        </div>
                        <div className='mx-4 my-4'>
                            <button onClick={handleLogout} className='primary-btn py-2 px-4 rounded-xl cursor-pointer'>Log Out</button>
                        </div>
                    </div>
                    :
                    <div className='mx-4'>
                        <Link href={'/login'}>
                            <button className='white-b py-2 px-4 rounded-xl cursor-pointer'>Log In</button>
                        </Link>
                    </div>
                }
            </ul>
        </div>
    )
}

export default SideMenu

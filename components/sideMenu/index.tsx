'use client';
import React from "react";
import Image from "next/image";
import { Link } from 'next-view-transitions';
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/constants";
import DownloadButton from "@/components/DownloadButton";

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
        <div className={`md:hidden duration-500 top-0 right-0 md:w-80 w-screen fixed h-[100vh] bg-primary z-10 flex flex-col gap-8 justify-center items-center opacity-0 ${ sideMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-100'}`}>
            <Image
                src={'/logo-white.svg'}
                width={593}
                height={337}
                className='max-w-[12rem] md:max-w-lg w-[220px]'
                alt='Insyncx logo'
            />
            <ul className="text-center md:mt-12 font-bold">
                {
                    userId ?
                    <div className="flex flex-col text-center gap-6 justify-start">
                        <Link onClick={closeSideMenu} href={`${ROUTES.MY_PROFILE}/${userId}`} className='flex py-4 w-full text-white items-center gap-4 text-xl hover:underline'>
                            <svg className="bg-white/25 rounded-full p-3" width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M4.5 14.3998L16.5 4.7998L28.5 14.3998" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10"/>
                                <path d="M14.0996 27.1998L14.0996 20.7998H18.8996V27.1998" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10"/>
                                <path d="M7.69922 16L7.69922 24.8C7.69922 26.1256 8.77362 27.2 10.0992 27.2L22.8992 27.2C24.2248 27.2 25.2992 26.1256 25.2992 24.8L25.2992 16" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                            </svg>
                            Dashboard
                        </Link>
                        <Link onClick={closeSideMenu} href={`${ROUTES.TALENTS}/${userId}`} className='flex  py-4 w-full text-white items-center gap-4 text-xl hover:underline'>
                            <svg className="bg-white/25 rounded-full p-3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="1.5"><circle cx="12" cy="6" r="4"/><path d="M20 17.5c0 2.4853 0 4.5-8 4.5s-8-2.0147-8-4.5S7.58172 13 12 13c4.4183 0 8 2.0147 8 4.5Z"/></g></svg>
                            Public Profile
                        </Link>
                        <Link onClick={closeSideMenu} href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`} className='flex py-4 w-full text-white items-center gap-4 text-xl hover:underline'>
                            <svg className="bg-white/25 rounded-full p-3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.2799 6.40005-9.54 9.53995c-.95.95-3.77003 1.39-4.40003.76-.63-.63-.2-3.45.75-4.4l9.55003-9.54998c.2355-.25694.5206-.46348.8382-.60718.3175-.1437.6609-.2216 1.0094-.22894.3484-.00733.6948.05601 1.0181.18622.3233.13021.6169.32461.863.57141.2461.2468.4397.5409.569.86456.1293.32367.1918.67017.1835 1.01862-.0083.34845-.0872.69164-.2317 1.00879-.1446.31715-.3519.60174-.6095.83655v0Z"/><path d="M11 4H6c-1.06087 0-2.07822.42142-2.82837 1.17157C2.42149 5.92172 2 6.93913 2 8v10c0 1.0609.42149 2.0783 1.17163 2.8284C3.92178 21.5786 4.93913 22 6 22h11c2.21 0 3-1.8 3-4v-5"/></g></svg>
                            Edit Profile
                        </Link>
                        <div className='mx-4 my-4'>
                            <button onClick={handleLogout} className='primary-btn py-2 px-4 rounded-3xl cursor-pointer'>Log Out</button>
                        </div>
                        <DownloadButton />
                    </div>
                    :
                    <div className='mx-4'>
                        <li className="my-5 text-white text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                            <Link href="/" onClick={closeSideMenu}>Home</Link>
                        </li>
                        <li className="my-5 text-white text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                            <Link href="/#about" onClick={closeSideMenu}>About</Link>
                        </li>
                        <li className="my-5 text-white text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                            <Link href="/#contact" onClick={closeSideMenu}>Contact</Link>
                        </li>
                        <li className="my-5 text-white text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                            <Link href={ROUTES.FAQS} onClick={closeSideMenu}>FAQs</Link>
                        </li>
                        <Link href={ROUTES.LOGIN} className='primary-btn text-base flex justify-center w-full'>
                            Log In
                        </Link>
                        <li className="mt-8">
                            <DownloadButton />
                        </li>
                    </div>
                }
            </ul>
            <Image src={'/assets/images/vectors/hero-pic.svg'} alt='Syncto colors' width={45} height={30} className='w-12 mt-6'/>
        </div>
    )
}

export default SideMenu

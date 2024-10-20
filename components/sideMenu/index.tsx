import Image from "next/image";
import React from "react";
import Link from "next/link";

const SideMenu = ({sideMenu, closeSideMenu}:any) => {
    return(
        <div className={`duration-500 top-0 right-0 md:w-80 w-screen fixed h-screen bg-[#EBEFFF] z-10 flex flex-col justify-center items-center opacity-0 ${ sideMenu ? 'translate-x-0 opacity-100' : 'translate-x-full'}`}>
            <Image
                src={'/assets/logo.svg'}
                alt={'Sync Logo'}
                width={200}
                height={60}
                className="mx-auto"
            />
            <ul className="text-center md:mt-12 font-bold">
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                    <a href="/" onClick={closeSideMenu}>Home</a>
                </li>
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                    <a href="#about" onClick={closeSideMenu}>About</a>
                </li>
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline">
                    <a href="#contact" onClick={closeSideMenu}>Contact</a>
                </li>
                <li className='mx-4'>
                    <Link href={'/login'}>
                        <button className='white-b py-2 px-4 rounded-xl cursor-pointer'>Log In</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu

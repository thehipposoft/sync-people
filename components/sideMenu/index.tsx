import Image from "next/image";
import React from "react";
import Link from "next/link";

const SideMenu = ({sideMenu, closeSideMenu}:any) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return(
        <div className={`duration-500 top-0 right-0 md:w-80 w-screen fixed h-screen
         bg-[#EBEFFF] z-10 flex flex-col justify-center items-center opacity-0 
         ${ sideMenu ? 'translate-x-0 opacity-100' : 'translate-x-full'}`}>
                <Image 
                    src={'/assets/logo.svg'} 
                    alt={'Sync Logo'} 
                    width={200} 
                    height={60} 
                    className="mx-auto" 
                />
            <ul className="text-center md:mt-12 font-bold
            ">
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline"><a href="#wedo" onClick={closeSideMenu}>Home</a></li>
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline"><a href="#services" onClick={closeSideMenu}>About</a></li>
                <li className="my-5  text-lg cursor-pointer duration-500 rounded-xl py-2 px-8 hover:underline"><a href="#whybi" onClick={closeSideMenu}>Contact</a></li>
                <li className='mx-4'>
                    <Link href={'/login'}><button className='white-b py-2 px-4 rounded-xl cursor-pointer'>Log In</button></Link>
                </li>  
            </ul>
            <div className="flex flex-col md:flex-row justify-between items-center pt-10">
                <p className="text-2xl text-[#1A335D] mb-8 md:mb-0">
                    {formattedDate}
                </p>
            </div>
        </div>
    )
}

export default SideMenu
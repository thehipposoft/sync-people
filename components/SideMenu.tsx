import Image from 'next/image';
import React from 'react';

const SideMenu = () => {
    return (
        <div className='relative left-0 top-0 w-[25vw] h-screen bg-[#EBEFFF]'>
            <Image src={'/assets/logo.svg'}  alt='Sync logo' width={130} height={90} className='pt-6 pl-6'/>
            <h2 className='pt-10 text-3xl text-center'>Client Profile</h2>
            <div>
                <ul className='grid row-span-4 gap-6 pt-10 px-6'>
                    <li className='flex'>
                        <Image src={'/assets/images/vectors/money.svg'} alt='Icon' width={25} height={25} />
                        <p className='pl-2'>Clients List</p>
                    </li>
                    <li className='flex'>
                        <Image src={'/assets/images/vectors/money.svg'} alt='Icon' width={25} height={25} />
                        <p className='pl-2'>Contracts</p>
                    </li>
                    <li className='flex'>
                        <Image src={'/assets/images/vectors/money.svg'} alt='Icon' width={25} height={25} />
                        <p className='pl-2'>Invoices</p>
                    </li>
                    <li className='flex'>
                        <Image src={'/assets/images/vectors/money.svg'} alt='Icon' width={25} height={25} />
                        <p className='pl-2'>Placements</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}; 

export default SideMenu;
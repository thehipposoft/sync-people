import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <div className='flex pl-20 py-12 bg-[#FAFAFB]'>
      <div className='w-1/2 flex'>
        <div>
            <Image src={'/assets/logo.svg'} alt='Sync-people logo' width={150} height={150} />
            <p className='pt-2'>
                Contact us for more information 
            </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-around'>
        <div>
            <h4 className='font-bold text-xl'>Pages</h4>
            <ul>
                <li className='py-1'><a href="">Home</a></li>
                <li className='py-1'><a href="">Employers</a></li>
                <li className='py-1'><a href="">Employees</a></li>
                <li className='py-1'><a href="">Location</a></li>
                <li className='py-1'><a href="">Contact</a></li>
            </ul>
        </div>
        <div>
            <h4 className='font-bold text-xl'>Join our community</h4>
            <div className='flex pt-4'>
                <a className='mr-2'><Image src={'/assets/images/vectors/google.svg'} alt='icon' width={35} height={35}  /></a>
                <a className='mx-2'><Image src={'/assets/images/vectors/facebook.svg'} alt='icon' width={35} height={35}  /></a>
                <a className='mx-2'><Image src={'/assets/images/vectors/twitter.svg'} alt='icon' width={35} height={40}  /></a>
                <a className='mx-2'><Image src={'/assets/images/vectors/linkedin.svg'} alt='icon' width={35} height={35} /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
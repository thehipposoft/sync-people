import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex pl-20 my-12'>
      <div className='w-1/2 flex'>
        <div>
            <Image src={'/assets/logo.png'} alt='Sync-people logo' width={150} height={150} />
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
                <a><Image src={'/assets/images/phone.png'} alt='icon' width={20} height={20} className='mx-2' /></a>
                <a><Image src={'/assets/images/phone.png'} alt='icon' width={20} height={20} className='mx-2' /></a>
                <a><Image src={'/assets/images/phone.png'} alt='icon' width={20} height={20} className='mx-2' /></a>
                <a><Image src={'/assets/images/phone.png'} alt='icon' width={20} height={20} className='mx-2' /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
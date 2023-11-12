import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around items-center md:py-4'>
      <Image src={'/assets/logo.png'} alt='Sync-people logo' width={150} height={150} />
      <nav className='flex justify-center'>
        <a href="" className='md:mx-2 md:p-2'>Why Us?</a>
        <a href="" className='md:mx-2 md:p-2'>Contact</a>
        <a href="" className='md:mx-2 md:p-2'>Login</a>
        <a href="" className='md:mx-2 md:p-2'>Languages</a>
      </nav>
    </div>
  )
}

export default Header

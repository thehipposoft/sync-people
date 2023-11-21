import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around items-center md:py-4'>
      <Link href={'/'}><Image src={'/assets/logo.png'} alt='Sync-people logo' width={150} height={150} /></Link>
      <nav className='flex justify-center'>
        <a href="" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Why Us?</a>
        <a href="#contact" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Contact</a>
        <a href="/login" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Login</a>
        <a href="" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Languages</a>
      </nav>
    </div>
  )
}

export default Header

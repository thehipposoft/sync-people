'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import RegisterMenu from './RegisterMenu'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
      setOpenMenu(!openMenu)
  };


  return (
    <div className='flex justify-between items-center md:py-6 px-8 md:px-20'>
        <Link href={'/'}><Image src={'/assets/logo.svg'} alt='Sync-people logo' width={160} height={150} /></Link>
        <nav className='flex justify-center items-center'>
          <a href="" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Home</a>
          <a href="#contact" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>About</a>
          <a href="/login" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Contact</a>
          <div className='flex gap-3 mx-4'>
            <Link href={'/login'}><button className='white-b py-2 px-4 rounded-xl'>Log In</button></Link>
            <Link href={'/sign-up'}><button className='purple-b py-2 px-4 rounded-xl'>Sign Up</button></Link>
          </div>
        </nav>
        <RegisterMenu menuIsOpen={openMenu} closeMenu={toggleMenu} />
    </div>
  )
}

export default Header

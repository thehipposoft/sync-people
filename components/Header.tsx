'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import SideMenu from './sideMenu'
import BackDrop from './sideMenu/backDrop'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
      setOpenMenu(!openMenu)
  };

  return (
    <div className='flex justify-between items-center md:py-6 px-8 md:px-20 flex-wrap p-6 md:p-0'>
        <Link href={'/'}>
          <Image src={'/assets/logo.svg'} alt='Sync-people logo' width={180} height={150} className='' />
        </Link>
        <button className='flex justify-center items-center md:hidden' onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="10" fill='#1A335D'></rect>
            <rect y="30" width="100" height="20" rx="10" fill='#1A335D'></rect>
            <rect y="60" width="100" height="20" rx="10" fill='#1A335D'></rect>
          </svg>
        </button>
        <nav className='md:flex justify-center hidden items-center flex-wrap w-full md:w-fit gap-6 md:gap-0'>
          <a href="" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Home</a>
          <a href="#how" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>About</a>
          <a href="#contact" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Contact</a>
          <div className='flex mx-2'>
            <Link href={'/courses'}><button className='white-b py-2 px-4 rounded-xl cursor-pointer'>Training and Licenses</button></Link>
          </div>
          <div className='flex gap-3 mx-4 '>
            <Link href={'/login'}><button className='white-b py-2 px-4 rounded-xl cursor-pointer'>Log In</button></Link>
          </div>
        </nav>
        <SideMenu sideMenu={openMenu} closeSideMenu={toggleMenu}/>
        <BackDrop sideMenu={openMenu} closeSideMenu={toggleMenu}/>
    </div>
  )
}

export default Header

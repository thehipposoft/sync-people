import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center md:py-4 px-8 md:px-20'>
      <Link href={'/'}><Image src={'/assets/logo.png'} alt='Sync-people logo' width={130} height={150} /></Link>
      <nav className='flex justify-center items-center'>
        <a href="" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Home</a>
        <a href="#contact" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>About</a>
        <a href="/login" className='md:mx-2 md:p-2 hover:opacity-50 duration-300'>Contact</a>
        <div className='flex gap-3 mx-4'>
          <button className='white-b py-2 px-4'>Log In</button>
          <button className='purple-b py-2 px-4'>Sign Up</button>
        </div>
      </nav>
        </div>
  )
}

export default Header

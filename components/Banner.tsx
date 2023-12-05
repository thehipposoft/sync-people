'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import RegisterMenu from './RegisterMenu'


const Banner = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
      setOpenMenu(!openMenu)
  };


  return (
    <div className='md:h-[80vh] flex items-center md:pl-20 md:mb-12 max-w-[1350px] mx-auto'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className=''>Welcome to the</h1>  
        <h1 className='text-[#8D78E0]'>new age of work</h1>
        <h3 className='md:pt-4'>Connecting Companies to <strong>Talent,</strong><br/> and Job Seekers to <strong>Opportunities.</strong></h3>
        <div className='flex md:mt-8'>
            <a href="#contact"><button className='md:mr-4 white-b'>Looking for talents</button></a>
            <button onClick={toggleMenu} className='md:mx-4 purple-b'>Looking for work</button>
        </div>
      </div>
      <div className='relative'>
        <Image src={'/assets/images/banner.png'} alt='Video image' width={500} height={400} />
        <Image className='absolute left-[48%] bottom-[48%]' src={'/assets/images/banner-vector.png'} alt='Video play button' width={50} height={50} />
      </div>
      <RegisterMenu menuIsOpen={openMenu} closeMenu={toggleMenu} />
    </div>
  )
}

export default Banner
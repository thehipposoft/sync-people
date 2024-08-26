import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div className='flex md:pl-20 md:py-12 py-6 bg-[#FAFAFB] px-6 md:px-0 flex-wrap'>
      <div className='md:w-1/2 w-full flex'>
        <div>
            <Image src={'/assets/logo.svg'} alt='Sync-people logo' width={150} height={150} />
            <p className='pt-2'>
                Contact us for more information
            </p>
        </div>
      </div>
      <div className='md:w-1/2 w-full flex md:justify-around flex-wrap mt-4 md:mt-0'>
        <div className='hidden md:block'>
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
            <div className='flex pt-4 md:flex-row gap-4 md:gap-0 items-center'>
                <Link href={''} className='md:mr-2'><Image src={'/assets/images/vectors/google.svg'} alt='icon' width={35} height={35}  /></Link>
                <Link href={'https://www.facebook.com/profile.php?id=61561044445028'} className='md:mx-2'><Image src={'/assets/images/vectors/facebook.svg'} alt='icon' width={35} height={35}  /></Link>
                <Link href={''} className='md:mx-2'><Image src={'/assets/images/vectors/twitter.svg'} alt='icon' width={35} height={40}  /></Link>
                <Link href={'https://www.linkedin.com/company/insyncx/about/'} className='md:mx-2'><Image src={'/assets/images/vectors/linkedin.svg'} alt='icon' width={35} height={35} /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
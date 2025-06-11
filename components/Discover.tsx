'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import DiscoverPlaces from './DiscoverPlaces'

const Discover = () => {

  const [ openDiscover, setOpenDiscover ] = useState(false);

  const toggleDiscover = () => {
    setOpenDiscover(!openDiscover)
    console.log(openDiscover)
  }

  return (
    <div className='bg-[#54D8C0] rounded-bl-[200px] relative'>
      <div className='max-w-[1350px] mx-auto md:px-4 px-8 md:pl-20 pb-20 pt-10 md:pt-32 flex flex-wrap '>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-6xl md:text-[64px]'>Discover Australia</h2>
          <div className='flex flex-col lg:flex-row'>
              <h2 className='text-6xl md:text-[64px]'>with</h2>
              <Image
                    src={'/assets/logo.png'}
                    width={593}
                    height={337}
                    className='max-w-[16rem] md:max-w-lg w-[260px] -mt-8 -ml-4 md:-ml-0'
                    alt='Insyncx logo'
                />
          </div>
          <p className='blue md:pt-1 md:w-3/4 text-lg md:text-base'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
          <div className='grid grid-cols-2 md:pt-12 md:w-[450px] mt-12 md:mt-0 mb-10 md:mb-0 gap-4'>
              <div className='flex flex-col md:w-[200px] w-40 h-[120px] overflow-hidden group '>
                <div className='md:flex hidden flex-col items-center md:py-4 w-[200px] h-[115px]'>
                    <Image src={'/assets/images/vectors/time.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Time</p>
                </div>
                <div className='flex flex-col items-center justify-center lg:justify-start md:py-4 bg-white rounded-xl md:w-[200px] w-40 h-[115px] md:opacity-0 group-hover:opacity-100 md:group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <Image src={'/assets/images/vectors/time.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>
                        GMT +10
                    </p>
                </div>
              </div>
              <div className='flex flex-col md:w-[200px] w-40 h-[120px] overflow-hidden group '>
                <div className='md:flex hidden flex-col items-center md:py-4 w-[200px] h-[115px]'>
                    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4 16h39.2M3.4 30h39.2M2 23a21 21 0 1 0 42 0 21 21 0 0 0-42 0Z" stroke="#2D457B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.863 2A40.431 40.431 0 0 0 16 23c0 7.425 2.031 14.7 5.863 21m2.274-42A40.431 40.431 0 0 1 30 23c0 7.425-2.031 14.7-5.863 21" stroke="#2D457B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Language</p>
                </div>
                <div className='flex flex-col items-center justify-center lg:justify-start md:py-4 bg-white rounded-xl md:w-[200px] w-40 h-[115px] md:opacity-0 group-hover:opacity-100 md:group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4 16h39.2M3.4 30h39.2M2 23a21 21 0 1 0 42 0 21 21 0 0 0-42 0Z" stroke="#2D457B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.863 2A40.431 40.431 0 0 0 16 23c0 7.425 2.031 14.7 5.863 21m2.274-42A40.431 40.431 0 0 1 30 23c0 7.425-2.031 14.7-5.863 21" stroke="#2D457B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <p className='font-semibold text-[#1A335D] md:text-xl text-lg pt-2'>Australian English</p>
                </div>
              </div>
              <div className='flex flex-col md:w-[200px] w-40 h-[120px] overflow-hidden group '>
                <div className='md:flex hidden flex-col items-center md:py-4 w-[200px] h-[115px]'>
                    <Image className='money-blue' src={'/assets/images/vectors/money.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Currency</p>
                </div>
                <div className='flex flex-col items-center justify-center lg:justify-start md:py-4 bg-white rounded-xl md:w-[200px] w-40 h-[115px] md:opacity-0 group-hover:opacity-100 md:group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <Image className='money-blue' src={'/assets/images/vectors/money.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-md text-center md:text-left pt-2'>Australian Dollar (AUD)</p>
                </div>
              </div>
              <div className='flex flex-col md:w-[200px] w-40 h-[120px] overflow-hidden group '>
                <div className='md:flex hidden flex-col items-center md:py-4 w-[200px] h-[115px]'>
                    <Image src={'/assets/images/vectors/user.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Population</p>
                </div>
                <div className='flex flex-col items-center justify-center lg:justify-start md:py-4 bg-white rounded-xl md:w-[200px] w-40 h-[115px] md:opacity-0 group-hover:opacity-100 md:group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <Image src={'/assets/images/vectors/user.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>26+ million</p>
                </div>
              </div>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='md:pl-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-5'>
              <div className='flex flex-col md:w-[280px] md:h-[600px] col-span-1 mx-auto md:mx-0'>
                <div className={'md:h-[300px] h-[340px] md:w-[280px] w-[320px] relative'}>
                  <Image className='object-cover rounded-t-[200px]' src={'/assets/images/discover/discover.jpg'} alt='Opera house photo' fill />
                </div>
                <div className='bg-[#7052E5] rounded-bl-[100px] md:w-[280px] w-[320px] md:h-[320px] h-[300px] flex flex-col justify-end items-end'>
                  <div className='pr-10 pb-10'>
                    <button
                      className='text-white text-xl pb-2 border-none hover:underline'
                      onClick={toggleDiscover}
                    >
                      + Discover places
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:w-[280px] w-[320px] md:h-[600px] h-[640px] col-span-1 mx-auto md:mx-0 gap-5 md:gap-0'>
                <div className={`relative bg-cover bg-center rounded-full rounded-bl-none md:h-[300px] h-[320px] md:w-[280px] w-[320px] overflow-hidden`}>
                  <Image className='object-cover' src={'/assets/images/discover/discover2.png'} alt='Guy smilling picture' fill />
                </div>
                <div className={`bg-[url('/assets/images/discover/discover-2.png')] flex flex-col justify-end items-end relative overflow-hidden rounded-[200px] rounded-tr-none md:h-[300px] h-[320px] md:mt-6`}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscoverPlaces isOpen={openDiscover} closeDiscover={toggleDiscover}/>
    </div>
  )
}
export default Discover

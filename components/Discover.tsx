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
    <div className='discover hidden md:block rounded-bl-[200px] relative'>
      <div className='max-w-[1350px] mx-auto px-4 md:pl-20 pb-20 pt-10 md:pt-32 flex flex-wrap '>
        <div className='w-full md:w-1/2'>
          <h1>Discover Australia</h1>
          <div className='flex'>
              <h1 className='mr-3 md:mr-0'>with</h1>
              <Image src='/assets/logo.svg' alt='Sync-people logo' width={220} height={180} className='md:-mt-2' />
          </div>
          <p className='text-white md:pt-4 md:w-3/4 mt-4 md:mt-0'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
          <div className='grid grid-cols-2 md:pt-12 md:w-[450px] mt-8 md:mt-0 mb-10 md:mb-0 gap-4'>
              <div className='flex flex-col w-[200px] h-[110px] overflow-hidden group '>
                <div className='flex flex-col items-center md:py-4 w-[200px] h-[110px]'>
                    <Image src={'/assets/images/vectors/time.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Time</p>
                </div>
                <div className='flex flex-col items-center md:py-4 bg-white rounded-xl w-[200px] h-[110px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <Image src={'/assets/images/vectors/time.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>
                        GMT +10
                    </p>
                </div>
              </div>
              <div className='flex flex-col w-[200px] h-[110px] overflow-hidden group '>
                <div className='flex flex-col items-center md:py-4 w-[200px] h-[110px]'>
                    <Image src={'/assets/images/vectors/language.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Language</p>
                </div>
                <div className='flex flex-col items-center md:py-4 bg-white rounded-xl w-[200px] h-[110px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <Image src={'/assets/images/vectors/language.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Australian English</p>
                </div>
              </div>
              <div className='flex flex-col w-[200px] h-[110px] overflow-hidden group '>
                <div className='flex flex-col items-center md:py-4 w-[200px] h-[110px]'>
                    <Image className='money-blue' src={'/assets/images/vectors/money.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Currency</p>
                </div>
                <div className='flex flex-col items-center md:py-4 bg-white rounded-xl w-[200px] h-[110px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-[108px] duration-700 ease-in-out'>
                    <Image className='money-blue' src={'/assets/images/vectors/money.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-md pt-2'>Australian Dollar (AUD)</p>
                </div>
              </div>
              <div className='flex flex-col w-[200px] h-[110px] overflow-hidden group '>
                <div className='flex flex-col items-center md:py-4 w-[200px] h-[110px]'>
                    <Image src={'/assets/images/vectors/user.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>Population</p>
                </div>
                <div className='flex flex-col items-center md:py-4 bg-white rounded-xl w-[200px] h-[110px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-[110px] duration-700 ease-in-out'>
                    <Image src={'/assets/images/vectors/user.svg'} alt={''} width={40} height={50} />
                    <p className='font-semibold text-[#1A335D] text-xl pt-2'>26+ million</p>
                </div>
              </div>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='pl-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-5'>
              <div className='flex flex-col md:w-[280px] md:h-[600px] col-span-1'>
                <div className={'h-[300px] w-[280px] relative'}>
                  <Image className='object-cover rounded-t-[200px]' src={'/assets/images/discover/sydney.webp'} alt='Opera house photo' fill />
                </div>
                <div className='bg-[#7052E5] rounded-bl-[100px] h-[320px] flex flex-col justify-end items-end'>
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
              <div className='flex flex-col w-[280px] h-[600px] col-span-1'>
                <div className={`bg-[#FF8149] relative bg-cover bg-center rounded-full rounded-bl-none h-[300px] overflow-hidden`}>
                  <Image className='relative top-[10%]' src={'/assets/images/discover/discover-3.png'} width={260} height={260} alt='Guy smilling picture' />
                </div>
                <div className={`bg-[url('/assets/images/discover/discover-2.png')] flex flex-col justify-end items-end relative overflow-hidden rounded-[200px] rounded-tr-none h-[300px] md:mt-6`}>
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

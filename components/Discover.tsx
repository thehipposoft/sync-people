import React from 'react'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className='discover rounded-bl-[200px]'>
      <div className='max-w-[1350px] mx-auto md:pl-20 pb-20 pt-32 flex '>
        <div className='w-1/2'>
          <h1>Discover Australia</h1>
          <div className='flex'>
              <h1>with</h1>
              <Image src='/assets/logo.png' alt='Sync-people logo' width={155} height={80} className='md:pt-3 md:ml-3' />
          </div>
          <p className='text-white md:pt-4 w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
          <div className='grid grid-cols-2 md:pt-12 w-[450px]'>
              <div className='flex flex-col items-center md:p-4'>
                  <Image src={'/assets/images/vectors/time.svg'} alt={''} width={40} height={50} />
                  <p className='font-semibold text-[#1A335D] text-xl pt-2'>Time</p>
              </div>
              <div className='flex flex-col items-center md:p-4'>
                  <Image src={'/assets/images/vectors/language.svg'} alt={''} width={40} height={50} />
                  <p className='font-semibold text-[#1A335D] text-xl pt-2'>Language</p>
              </div>
              <div className='flex flex-col items-center md:p-4'>
                  <Image className='money-blue' src={'/assets/images/vectors/money.svg'} alt={''} width={40} height={50} />
                  <p className='font-semibold text-[#1A335D] text-xl pt-2'>Currency</p>
              </div>
              <div className='flex flex-col items-center md:p-4'>
                  <Image src={'/assets/images/vectors/user.svg'} alt={''} width={35} height={50} />
                  <p className='font-semibold text-[#1A335D] text-xl pt-2'>People</p>
              </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='pl-5'>
            <div className='grid grid-cols-2 w-[600px] gap-5'>
              <div className='flex flex-col w-[280px] h-[600px] col-span-1'>
                <div className={`bg-[url('/assets/images/discover/discover-1.png')] bg-cover bg-center rounded-t-[200px] h-[300px]`}></div>
                <div className='bg-[#7052E5] rounded-bl-[100px] h-[320px] flex flex-col justify-end items-end'>
                  <div className='pr-10 pb-10'>
                    <p className='text-white text-xl pb-2'>+ Discover places</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-[280px] h-[600px] col-span-1'>
                <div className={`bg-[#FF8149] relative bg-cover bg-center rounded-full rounded-bl-none h-[300px] overflow-hidden`}>
                  <Image className='relative top-[10%]' src={'/assets/images/discover/discover-3.png'} width={260} height={260} alt='Guy smilling picture' />
                </div>
                <div className={`bg-[url('/assets/images/discover/discover-2.png')] flex flex-col justify-end items-end relative overflow-hidden rounded-[200px] rounded-tr-none h-[300px] md:mt-6`}>
                  <p className='text-white text-xl pb-12 pr-12'>+ Discover activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Discover

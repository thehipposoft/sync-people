import React from 'react'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className='discover md:h-screen md:pl-20 flex items-center'>
      <div className='w-1/2'>
        <h1>Discover Australia</h1>
        <div className='flex'>
            <h1>with</h1>
            <Image src='/assets/logo.png' alt='Sync-people logo' width={155} height={80} className='md:pt-3 md:ml-3' />
        </div>
        <p className='text-white md:pt-4'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
        <div className='grid grid-cols-2 md:pt-6'>
            <div className='flex flex-col items-center md:p-4'>
                <Image src={'/assets/images/mail.png'} alt={''} width={50} height={50} />
                <h3 className='font-semibold'>Text</h3>
            </div>
            <div className='flex flex-col items-center md:p-4'>
                <Image src={'/assets/images/mail.png'} alt={''} width={50} height={50} />
                <h3 className='font-semibold'>Text</h3>
            </div>
            <div className='flex flex-col items-center md:p-4'>
                <Image src={'/assets/images/mail.png'} alt={''} width={50} height={50} />
                <h3 className='font-semibold'>Text</h3>
            </div>
            <div className='flex flex-col items-center md:p-4'>
                <Image src={'/assets/images/mail.png'} alt={''} width={50} height={50} />
                <h3 className='font-semibold'>Text</h3>
            </div>
        </div>
      </div>
      <div className='w-1/2'>

      </div>
    </div>
  )
}
export default Discover

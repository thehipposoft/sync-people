import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-[38px] md:pl-20'>Popular Job Categories</h1>
      <div className='py-5'>
        <div className='md:w-1/2'>
          <div className='grid col-span-2'>
            <div className='flex flex-col w-[305px] h-[600px]'>
              <div className='bg-[#7052E5] rounded-t-[200px] h-1/2'>
                <Image src={'/assets/images/mail.png'} alt='' height={40} width={40} />
              </div>
              <Image src={'/assets/images/categories/categories-1.png'} alt='' width={305} height={300} className='rounded-bl-[200px] ' />
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className='md:w-1/2'>

        </div>
      </div>
    </div>
  )
}

export default Categories

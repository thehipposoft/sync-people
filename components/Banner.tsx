import React from 'react'

const Banner = () => {
  return (
    <div className='md:h-[80vh] flex items-center md:pl-20 md:mb-12'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className=''>Welcome to the</h1>  
        <h1 className='text-[#8D78E0]'>new age of work</h1>
        <h3 className='md:pt-4'>Connecting Companies to <strong>Talent,</strong><br/> and Job Seekers to <strong>Opportunities.</strong></h3>
        <div className='flex md:mt-8'>
            <button className='md:mr-4 white-b'>Looking for talents</button>
            <button className='md:mx-4 purple-b'>Looking for work</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Banner
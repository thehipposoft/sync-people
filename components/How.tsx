import React from 'react'

const How = () => {
  return (
    <div className='h-screen how flex md:pl-20'>
      <div className='flex items-center max-w-[1350px] mx-auto'>
        <div className='md:w-2/5 flex flex-col justify-center'>
          <h1 className='font-bold'>How it works</h1>
          <div className='words overflow-hidden h-[40px] md:my-4'>
            <h3 className={'block h-full text-[20px] md:text-[32px] orange'}>Register</h3>
            <h3 className={'block h-full text-[20px] md:text-[32px] '}>Create a profile</h3>
            <h3 className={'block h-full text-[20px] md:text-[32px] teal'}>Find job</h3>
          </div>
          <div className='overflow-hidden h-[40px] md:my-2 progress'/>
          <p className='text-white md:pt-4'>
              Getting a job has never been easier. All you have to do is register and complete your profile.
              After a few hours you will receive news from us with the job offer that best suits
              your preferences.  
              Let us do the hard work for you. Leave it to Sync.
          </p>
          <div className='flex'><button className='md:mx-2 md:mt-8'>Let's get started</button></div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default How

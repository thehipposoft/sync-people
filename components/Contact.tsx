import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-between md:px-20 max-w-[1350px] mx-auto py-20' id='contact'>
      <div className='md:w-2/5 w-full p-4 md:p-0'>
          <h1 >Contact us</h1>
          <form className='md:pt-6 md:w-[500px]'>
              <section className='flex flex-col'>
                  <label htmlFor="text" className='pb-2'>First name</label>
                  <input type="text" name="First name" id="" />
              </section>
              <section className='flex flex-col'>
                  <label htmlFor="text" className='pb-2'>Last name</label>
                  <input type="text" name="Last name" id="" />
              </section>
              <section className='flex flex-col'>
                  <label htmlFor="text" className='pb-2'>Email:</label>
                  <input type="email" name="" id="" />
              </section>
              <section className='flex flex-col'>
                  <label htmlFor="textarea" className='pb-2'>Your message</label>
                  <textarea name="" id="" className='input' rows={5} />
              </section>
              <section>
                  <input type="submit" value="Send" className='purple-b md:py-2 md:px-8 md:mt-4 cursor-pointer w-32' />
              </section>
          </form>
      </div>
      <div className='md:flex items-center justify-center hidden'>
        <Image src={'/assets/images/contact.png'} alt='' width={450} height={400}/>
      </div>
    </div>
  )
}

export default Contact

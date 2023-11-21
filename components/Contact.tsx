import React from 'react'

const Contact = () => {
  return (
    <div className='md:pl-20 flex py-20' id='contact'>
      <div className='w-1/2'>
      <h1 >Contact us</h1>
        <form className='md:pt-6 md:w-[500px]'>
            <section className='flex flex-col'>
                <label htmlFor="text">First name</label>
                <input type="text" name="First name" id="" />
            </section>
            <section className='flex flex-col'>
                <label htmlFor="text">Last name</label>
                <input type="text" name="Last name" id="" />
            </section>
            <section className='flex flex-col'>
                <label htmlFor="text">Email:</label>
                <input type="email" name="" id="" />
            </section>
            <section className='flex flex-col'>
                <label htmlFor="textarea">Your message</label>
                <textarea name="" id="" className='input' rows={5} />
            </section>
            <section>
                <input type="submit" value="Send" className='purple-b md:py-2 md:px-8 md:mt-4 cursor-pointer' />
            </section> 
        </form>
      </div>
      <div className='w-1/2'>

      </div>
    </div>
  )
}

export default Contact

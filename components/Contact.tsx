import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-between md:px-20 md:max-w-[1350px] max-w-[85vw] mx-auto py-20 flex-wrap' id='contact'>
        <div className='md:w-2/5 w-full p-4 md:p-0'>
            <h2 className='text-6xl'>Contact us</h2>
            <form className='pt-6 md:w-[500px]'>
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
        <div className='relative w-full md:w-[450px] md:h-[525px]'>
            <div className='absolute left-0 z-10 h-full w-full rounded-tl-[250px] bg-gradient-to-l opacity-30 rounded-br-[250px] from-[#8D78E0] to-[#15DFBB] ' />
            <Image src={'/assets/images/contact-new.webp'} alt='' fill className='object-cover rounded-br-[250px] rounded-tl-[250px]'/>
        </div>
    </div>
  )
}

export default Contact

import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-between md:px-20 md:max-w-[1350px] max-w-[85vw] mx-auto py-20 flex-wrap' id='contact'>
        <div className='md:w-2/5 w-full md:p-4 md:p-0'>
            <h2 className='md:text-6xl text-5xl'>Contact us</h2>
            <form className='pt-6 md:w-[450px] flex flex-col'>
                <section className='flex justify-between gap-4 md:gap-0'>
                    <div>
                        <input type="text" name="First name" id="" placeholder='First name' className='py-3 px-4 placeholder-[#8D78E0] w-full' />
                    </div>
                    <div>
                        <input type="text" name="Last name" id="" placeholder='Last name' className='py-3 px-4 placeholder-[#8D78E0] w-full'/>
                    </div>
                </section>
                <section className='flex flex-col'>
                    <input type="email" name="email" id="" placeholder='Email' className='py-3 px-4 placeholder-[#8D78E0]' />
                </section>
                <section className='flex flex-col'>
                    <textarea name="" id="" className='py-4 px-4 bg-transparent border border-[#656ED3] rounded-[2em] resize-none placeholder-[#8D78E0]' rows={5} placeholder='Enter Text here' />
                </section>
                <section>
                    <input type="submit" value="Send" className='purple-b py-2 px-6 md:mt-4 cursor-pointer w-fit' />
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

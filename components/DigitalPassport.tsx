import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';

const DigitalPassport = () => {
  return (
        <div className='md:h-screen flex md:justify-between justify-center items-center mx-auto max-w-[1250px] px-8 md:p-0 flex-wrap mt-16 md:mt-0'>
            <div className='md:w-1/2 flex flex-col justify-center gap-2'>
                <h2 className='font-semibold tracking-tight md:tracking-normal mb-6 md:mb-0'>
                    What is a Skills Portfolio?
                </h2>
                <p className='text-text-light w-11/12 md:w-full leading-6 md:pt-4 mb-4 md:mb-0'>
                    Do you have a work visa, are you a foreign student or just looking for a job? <br/>
                    Your Skills Portfolio is more than a resume: it's your ticket to the Australian working world. Tailored to your talents, the industry you want to work in and the job you dream of getting.
                    <br/>
                </p>
                <strong className='text-text-light md:pt-4'>Sign up for free, your next job is coming soon. </strong>
                <Link
                    href={ROUTES.SIGN_UP}
                    className='w-fit font-semibold md:mx-2 md:mt-4 mt-6 secondary-btn'
                >
                    Sign Up
                </Link>
            </div>
            <Image
                src={'/assets/images/digital-passport.webp'}
                alt={' What is a Skills Portfolio? Create your digital portfolio now'}
                className='object-contain max-w-[15rem] mt-6 mb-12 md:my-0 md:mx-auto md:max-w-lg md:rounded-tl-[220px] rounded-tl-[8em] md:rounded-br-[220px] rounded-br-[8em]'
                width={425}
                height={500}
            />
        </div>
    )
}

export default DigitalPassport

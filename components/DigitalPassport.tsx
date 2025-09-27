import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';

const DigitalPassport = () => {
  return (
        <div className='md:h-screen flex md:justify-between justify-center items-center mx-auto max-w-[1250px] px-8 md:p-0 flex-wrap mt-16 md:mt-0'>
            <div className='md:w-1/2 flex flex-col justify-center gap-2'>
                <h2 className='font-semibold tracking-tight md:tracking-normal mb-6 md:mb-2'>
                    What is a Skills Portfolio?
                </h2>
                <p>
                    Are you on a work visa, studying in Australia, or simply looking for your next job?
                </p>
                <p>
                    Your <span className='font-bold'>Skills Portfolio</span> is more than just a resume—it’s your personal showcase of experience, certificates, and talents. Think of it as your digital passport to the Australian job market, designed to highlight what you can do and connect you with industries that are hiring.
                </p>
                <p>
                    Create your free portfolio today—it only takes a few minutes, and it could open the door to your next opportunity.
                </p>
                <p className='md:pt-4 font-bold'>
                    Sign up for free, your next job is coming soon.
                </p>
                <Link
                    href={ROUTES.SIGN_UP}
                    className='w-fit font-semibold md:mt-4 mt-6 secondary-btn'
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

import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';

const HowWorks = () => {
  return (
        <div id='about' className='lg:h-screen bg-secondary flex lg:pl-20 px-8 lg:p-0 pt-12'>
            <div className='lg:gap-14 max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-bold text-white mb-8 text-4xl'>How it works</h1>
                    <div className='words overflow-hidden h-[40px] lg:my-4'>
                        <h3 className={'block h-full text-[20px] lg:text-3xl orange'}>Fill the form</h3>
                        <h3 className={'block h-full text-[20px] lg:text-3xl '}>Set your preferences</h3>
                        <h3 className={'block h-full text-[20px] lg:text-3xl teal'}>Find job</h3>
                    </div>
                    <div className='overflow-hidden h-[40px] lg:my-2 progress mb-6 lg:mb-0'/>
                    <p className='text-white lg:pt-4 mb-4 lg:mb-0 pr-4 lg:pr-0'>
                    We know that starting from scratch can be a challenge, but you're not alone. Just fill out a form with information about yourself, your experience and your job preferences. <br/>
                    At Insyncx, we'll take care of creating your Skills Portfolio, the gateway to your next job.
                            <br/> Let us do the hard work for you. Leave it to Insyncx.
                    </p>
                    <Link
                        href={ROUTES.SIGN_UP}
                        className='flex mt-4 w-fit lg:mx-2 lg:mt-8 text-white border-white border px-6 py-2 rounded-3xl hover:text-accent hover:bg-white duration-300'
                    >
                        Let's get started!
                    </Link>
                </div>
                <div className='w-full relative my-8 lg:my-0'>
                    <Image
                        src={'/assets/images/how-1.png'}
                        alt={'How it works - Create your digital portfolio now'}
                        className='object-contain'
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default HowWorks;

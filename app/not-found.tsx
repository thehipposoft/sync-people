
import Image from 'next/image';
import { ROUTES } from '@/app/constants';
import PublicLayout from '@/components/PublicLayout';

const NotFound = () => {
  return (
    <PublicLayout>
        <div className='flex justify-center items-center px-10 lg:my-20'>
            <div className='flex md:flex-row flex-col-reverse items-center md:gap-4 gap-8'>
                <Image src={'/assets/images/vectors/hero-pic.svg'} alt='Syncto colors' width={45} height={30} className=' w-40 md:mr-12'/>
                <div className='flex flex-col gap-2 text-center md:text-start'>
                    <h2 className='text-3xl '>Something went wrong!</h2>
                    <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
                    <p className='text-lg'>The page you are looking for does not exist or has been moved.</p>
                    <p className='text-lg underline'>
                        <a href={ROUTES.HOME}>Return to the homepage.</a>
                    </p>
                </div>
            </div>
        </div>
    </PublicLayout>
  )
}

export default NotFound

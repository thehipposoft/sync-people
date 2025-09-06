import { useEffect }  from 'react';
import Image from 'next/image';

type Props = {
    isOpen: boolean;
    closeDiscover: () => void;
};

const DiscoverPlaces = ({
    isOpen,
    closeDiscover
}: Props) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} bg-secondary h-screen w-full md:rounded-bl-[200px] fixed top-0 left-0 duration-1000 z-50`}>
            <div className='md:max-w-[1300px] max-w-[90vw] mx-auto md:pl-0 pl-4 md:pt-[5vh] pt-8 relative'>
                <div className='flex justify-between items-center py-4'>
                    <Image src={'/logo-white.svg'} alt='Logo in white' width={180} height={90} className='w-[160px] md:w-[200px] md:w-auto' />
                    <svg width="35" height="35" viewBox="0 0 30 15" fill="none" onClick={closeDiscover} className='z-40 cursor-pointer bg-transparent' xmlns="http://www.w3.org/2000/svg">
                        <rect className='fill-white origin-left rotate-45 -translate-y-[6px]' width="30" height="3.5" rx="1.375" fill="#1A335D"/>
                        <rect className='fill-white origin-left -rotate-45 translate-y-[6px]' y="12.25" width="30" height="3.5" rx="1.375" fill="#1A335D"/>
                    </svg>
                </div>
                <h3 className='md:text-6xl text-5xl tracking-tighter md:tracking-normal'>Discover Places</h3>
                <div className='grid grid-cols-1 md:grid-cols-4 md:py-8 my-8 md:my-0 md:gap-3 gap-6 overflow-scroll h-[500px] md:h-auto relative'>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/sydney.webp'} className='rounded-2xl h-[245px] object-cover w-full md:w-auto' alt='' width={320} height={290} />
                        <p className='text-white md:text-xl text-2xl font-bold pt-4'>Sydney Opera House</p>
                        <p className='md:pt-4 pt-2 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/discover-2.webp'} className='rounded-2xl h-[245px] object-cover w-full md:w-auto' alt='' width={320} height={290} />
                        <p className='text-white md:text-xl text-2xl font-bold pt-4'>Blue Mountains</p>
                        <p className='md:pt-4 pt-2 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/discover-3.webp'} className='rounded-2xl h-[245px] object-cover w-full md:w-auto' alt='' width={320} height={290} />
                        <p className='text-white md:text-xl text-2xl font-bold pt-4'>Uluru</p>
                        <p className='md:pt-4 pt-2 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/discover-4.webp'} className='rounded-2xl h-[245px] object-cover w-full md:w-auto' alt='' width={320} height={290} />
                        <p className='text-white md:text-xl text-2xl font-bold pt-4'>The Great Barrier Reef</p>
                        <p className='md:pt-4 pt-2 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPlaces;

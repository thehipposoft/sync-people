import { ROUTES } from '@/app/constants';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import React from 'react';

const BlogsLayout = () => {
    return (
        <div className='flex flex-col my-12 gap-32'>
            <div className='flex md:flex-row flex-col justify-between mx-auto gap-20'>
                <div className='relative md:w-[520px] w-[90vw] md:h-[340px] h-[30vh]'>
                    <Image src={'/assets/images/blog.webp'} alt='' fill className='rounded-3xl rounded-br-[120px]' />
                </div>
                <div className='flex flex-col gap-4 md:w-[450px]'>
                    <div className='flex justify-between'>
                        <p>MARCH, 20</p>
                        <h5 className='text-orange-400 font-semibold'>Working holiday visa</h5>
                    </div>
                    <h4 className='h-bold'>How to apply for a job with a working holiday visa?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta mi quis posuere laoreet. Nam auctor, ipsum nec pulvinar iaculis, urna risus rutrum diam, nec ultrices tortor velit vitae dui. Donec dignissim tristique nisl. Fusce iaculis dolor et magna feugiat, a facilisis ante accumsan. </p>
                    <div className='flex w-full justify-end'>
                        <p>BY: Author</p>
                    </div>
                    <Link className='bg-secondary rounded-xl py-2 px-4 text-white w-fit' href={ROUTES.ENTRY}>
                        Read More
                    </Link>
                </div>
            </div>
            <div className='flex md:flex-row-reverse flex-col justify-between mx-auto gap-20'>
                <div className='relative md:w-[520px] w-[90vw] md:h-[340px] h-[30vh] '>
                    <Image src={'/assets/images/blog3.webp'} alt='' fill className='rounded-3xl rounded-bl-[120px]' />
                </div>
                <div className='flex flex-col gap-4 md:w-[450px]'>
                    <div className='flex justify-between'>
                        <p>MARCH, 20</p>
                        <h5 className='text-orange-400 font-semibold'>Working Holiday Visa</h5>
                    </div>
                    <h4 className='h-bold'>How to apply for a job with a working holiday visa?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta mi quis posuere laoreet. Nam auctor, ipsum nec pulvinar iaculis, urna risus rutrum diam, nec ultrices tortor velit vitae dui. Donec dignissim tristique nisl. Fusce iaculis dolor et magna feugiat, a facilisis ante accumsan. </p>
                    <div className='flex w-full justify-end'>
                        <p>BY: Author</p>
                    </div>
                    <Link className='bg-secondary rounded-xl py-2 px-4 text-white w-fit' href={ROUTES.ENTRY}>
                        Read More
                    </Link>
                </div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 self-center md:grid-rows-2 md:gap-4 gap-8'>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] hidden md:flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] hidden md:flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] hidden md:flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] hidden md:flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
                <div className='w-[300px] h-[375px] border rounded-2xl rounded-tl-[125px] rounded-br-[125px] hidden md:flex flex-col justify-center px-8 pt-8 gap-3'>
                    <h4 className='text-orange-400 font-semibold text-base'>Topic</h4>
                    <h2 className='h-bold uppercase text-3xl'>New cinema in sydney</h2>
                    <p className='text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <Link href={ROUTES.ENTRY} className='rounded-3xl border-secondary text-secondary border w-fit px-4 py-2'>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogsLayout;

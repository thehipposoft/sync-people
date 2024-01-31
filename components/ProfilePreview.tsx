import Image from 'next/image';
import React from 'react';

const ProfilePreview = () => {
    return (
        <div className='px-20'>
            <p className='text-xl py-10 blue'>This is how the emoployer <strong>will see your profile, </strong>you can edit it again if you want to.</p>
            <div className='bg-[#EBEFFF] flex justify-between px-12 py-20'>
                <div className='w-[600px] flex flex-col'>
                    <div className='flex flex-col'>
                        <Image src={'/assets/logo.svg'} width={150} height={150} alt='Sync people logo' />
                        <h1 className='pt-4'>Mario <strong>Moreno.</strong></h1>
                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo non nunc vel porta. Curabitur faucibus quam quis velit faucibus, at gravida arcu posuere. </p>
                    </div>
                    <div className='flex flex-col pt-12'>
                        <div className='flex items-center'>
                            <Image src={'/assets/images/vectors/education.svg'} alt='' width={50} height={50}/>
                            <h4 className='font-bold pl-4'>Education and work experience</h4>
                        </div>
                        <p className='pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo non nunc vel porta. Curabitur faucibus quam quis velit faucibus, at gravida arcu posuere. Donec feugiat, ipsum at suscipit tempor, nisi odio porttitor neque, id auctor erat augue sit amet nibh. Maecenas eu scelerisque odio.</p>
                        <ul className='pt-4'>
                            <li>Loreim ipsum</li>
                            <li>Loreim ipsum</li>
                            <li>Loreim ipsum</li>
                        </ul>
                    </div>
                    <div className='flex flex-col pt-12'>
                        <div className='flex items-center'>
                            <Image src={'/assets/images/vectors/visa.svg'} alt='' width={50} height={50}/>
                            <h4 className='font-bold pl-4'>Visa and Paperwork</h4>
                        </div>
                        <p className='pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo non nunc vel porta. Curabitur faucibus quam quis velit faucibus, at gravida arcu posuere. Donec feugiat, ipsum at suscipit tempor, nisi odio porttitor neque, id auctor erat augue sit amet nibh. Maecenas eu scelerisque odio.</p>
                    </div>
                    <div className='flex flex-col pt-12'>
                            <div className='flex items-center'><Image src={'/assets/images/vectors/time.svg'} alt='' width={50} height={50}/><h4 className='font-bold pl-4'>Availability</h4></div>
                            <p className='pt-2'>Monday to Saturday from 8:00 am to 4 pm.</p>
                    </div>
                    <div className='flex flex-col pt-12'>
                            <div className='flex items-center'><Image src={'/assets/images/vectors/money.svg'} className='money-blue' alt='' width={50} height={50}/><h4 className='font-bold pl-4'>Desired Salary</h4></div>
                            <p className='pt-2'>$24,5 Australian Dollar per Hour</p>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col'>
                    <div>
                        <div className={`h-[350px] w-[320px] bg-cover bg-center bg-[url('/assets/images/cv.jpg')] rounded-r-[200px] rounded-tl-[200px]`} />
                        <p className='pt-4 blue'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePreview;
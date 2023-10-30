import React from 'react'
import Image from 'next/image';
 
type TalentsTypes = {
    name: string,
    last_name: string,
    profile_image: string,
    age?: number,
    phone: string,
    state?: string,
    postal_code?: string,
    email?: string,
    date_of_birth?: any,
    description?: string,
    industry?: any,
    languages?: any,
    licenses?: any,
    credentials?: any,
    visa?: any,
}

const Talent = ({
    name,
    last_name,
    profile_image,
    age,
    phone,
    state,
    postal_code,
    email,
    date_of_birth,
    description,
    industry,
    languages,
    licenses,
    credentials,
    visa,
    }:TalentsTypes) => {
  return (
    <div>
        <div className=''>
            <div className='flex justify-around my-10'>
                <div className='border-slate-400 flex flex-col w-[900px] border p-6 mx-2'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <Image src={profile_image} alt="" width={150} height={50} className='rounded-full h-[150px] object-cover'/>
                            <div className='flex flex-col justify-center pl-4'>
                                <h2 className='py-1 font-semibold'>{name}</h2>
                                <h2 className='py-1 font-semibold'>{last_name}</h2>

                                <h3 className='py-1'>{age}</h3>
                                <p className='py-1'><span className='text-black font-semibold'>VISA:</span> {visa}</p>
                                <a href="" className='flex py-1'><img src='/assets/images/location.png' className='w-[20px] h-[20px]' /><p className='pl-2'>{state} {postal_code}</p></a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center'>
                        <a href="" className='flex py-1'><img src='/assets/images/phone.png' className='w-[20px] h-[20px]' /><p className='pl-2 font-semibold'>{phone}</p></a>
                        <a href="" className='flex py-1'><img src='/assets/images/mail.png' className='w-[20px] h-[20px]' /><p className='pl-2 font-semibold'>{email}</p></a>
                        <p className='py-1'><span className='text-black font-semibold'>DOB:</span> {date_of_birth}</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='pt-8 font-semibold'>Overview</h2>
                        <p className='pt-2'>{description}</p>
                    </div>
                </div>
                <div className='border-slate-400 border flex flex-col w-[300px] p-6 mx-2'>
                    <ul>
                        <li className='py-2'>
                            <h2 className='font-semibold'>Industry of choice</h2>
                            {
                                industry.map((val:any, i:any) => <p className='pt-1'>{val}</p>
                                )
                            }
                        </li>
                        <li className='py-2'>
                            <h2 className='font-semibold'>Languages</h2>
                            {
                                languages.map((val:any, i:any) => <p className='pt-1'>{val}</p>
                                )
                            }                        </li>
                        <li className='py-2'>
                            <h2 className='font-semibold'>Licenses</h2>
                            <p className='pt-1'>{licenses}</p>
                        </li>
                        <li className='py-2'>
                            <h2 className='font-semibold'>Acamedic Credentials</h2>
                            <p className='pt-1'>{credentials}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Talent

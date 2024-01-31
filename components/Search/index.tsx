import React from 'react';
import { SEARCH_DATA } from './constants';
import Image from 'next/image';

const SearchComponent = ({ result }:any) => {
    return (
        <div>
            <div className='flex justify-between'>
                <Image src={'/assets/logo.svg'} alt={'Syncto logo'} width={150} height={150} className='ml-20'/>
                <section className='w-[350px]'>
                    <input type="text" name="search" id="search" placeholder='Search'/>
                </section>
                <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full w-14 h-14 mr-8' />
            </div>
            <h2 className='h-bold pl-20 text-black text-3xl font-semibold'>Results for <span className='text-[#0095A9] h-bold font-extrabold'>"Barista"</span></h2>
            <div className='flex pt-6 gap-4 justify-around'>
                <div className='w-[20vw] h-screen border flex flex-col'>
                    <div className='flex flex-col'>

                    </div>
                </div>
                <div className='flex flex-col w-[900px]'>
                    <div className='flex justify-between'>
                        <p>124 candidates</p>
                        <p className='p-2 bg-black/25'>
                            Sort by: Most Relevant
                        </p>
                    </div>
                    <div>
                        Filters
                    </div>
                    <div className='grid col-span-3'>
                        {
                            SEARCH_DATA.map((value:any, index:any) => {
                                return(
                                  <div className='flex flex-col gap-2 border' key={index}>
                                    <div
                                        className={` bg-center bg-cover
                                         flex justify-center items-end w-48 h-48`}
                                    >
                                        <p className='p-2 bg-cyan-300 mb-4'>
                                            Match rate 97%
                                        </p>
                                    </div>
                                    <h3>{value.name}, {value.age} - {value.rol}</h3>
                                    <p>{value.city}, {value.state} {value.cp}</p>
                                  </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;

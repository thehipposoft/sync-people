'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SearchComponent = ({ data, user }:any) => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [favourite, setFavourite] = useState(false);

    function addFilter(filter:any) {
        setSelectedFilters(filter);
    }

    function toggleFavourite() {
        setFavourite(!favourite)
    }

    return (
        <div className='pb-8 bg-[#FAFAFB]'>
            <div className='flex justify-between items-center px-8 py-2 w-full  bg-white'>
                <Link href={'/'}>
                    <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                </Link>
                <section className='w-[450px] my-0'>
                    <input type="text" name="search" id="search" placeholder='Search'/>
                </section>
                {
                    user === 'business' ?
                    <div className='flex justify-end gap-6 py-1'>
                        <Link href={'/business-profile'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>My Profile</button></Link>
                        <img src={"/assets/images/business/mylk-logo.png"} alt="Profile picture" className='rounded-full w-10' />
                    </div>
                    :
                    user === 'licence' ?
                    <div className='flex justify-end gap-6 py-1'>
                        <Link href={'/business-market'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Jobs</button></Link>
                        <Link href={'/my-profile'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>My Profile</button></Link>
                        <img src={"/assets/images/cv.png"} alt="Profile picture" className='rounded-full w-10' />
                    </div>
                    :
                    <div className='flex justify-end gap-6 py-1'>
                        <Link href={'/training-and-licences'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Training and Licences</button></Link>
                        <Link href={'/my-profile'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>My Profile</button></Link>
                        <img src={"/assets/images/cv.png"} alt="Profile picture" className='rounded-full w-10' />
                    </div>
                }
            </div>
            <div className='flex justify-around gap-6 pt-6 px-8'>
                <div className='w-[20vw] rounded-2xl border flex flex-col bg-white'>
                    <div className='grid col-span-1 '>
                        <div className='flex justify-between py-4 border-b mx-4'>
                            <p>Filters</p>
                            <p className='text-[#0095A9] cursor-pointer hover:underline'>Clear all</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Industry</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="hospitality"
                                            className='mr-2'
                                        />
                                        Hospitality
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                        Tourism
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>

                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                            Farming
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Location</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="hospitality"
                                            className='mr-2'
                                        />
                                        Melbourne & Inner Suburbs
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                        Melbourne, VIC 3000
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                        Geelong, VIC 3220
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Employer Review</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black flex items-center'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="hospitality"
                                            className='mr-2'
                                        />
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <p className='pl-1'>& Up</p>
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black flex items-center'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <p className='pl-1'>& Up</p>
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black flex items-center'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <p className='pl-1'>& Up</p>
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black flex items-center'>
                                        <input
                                            type="checkbox"
                                            name="industrie"
                                            value="construction"
                                            className='mr-2'
                                        />
                                        <Image src={'/assets/images/vectors/star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <Image src={'/assets/images/vectors/empty-star.svg'} alt='' width={17} height={15}/>
                                        <p className='pl-1'>& Up</p>
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Salary Range ($/hour)</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    $
                                    <input type="number" />
                                    to
                                    <input type="number" />
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Search Level</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>

                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="search-level"
                                            value="active"
                                            className='mr-2'
                                        />
                                            Active
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="search-level"
                                            value="pasive"
                                            className='mr-2'
                                        />
                                            Pasive
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Updated within</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="uptaded"
                                            value="last-7-days"
                                            className='mr-2'
                                        />
                                        Last 7 days
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="uptaded"
                                            value="last-30-days"
                                            className='mr-2'
                                        />
                                        Last 30 days
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="uptaded"
                                            value="last-60-days"
                                            className='mr-2'
                                        />
                                        Last 60 days
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Work Type</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="work-type"
                                            value="full-time"
                                            className='mr-2'
                                        />
                                        Full-time
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="work-type"
                                            value="part-time"
                                            className='mr-2'
                                        />
                                        Part-time
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="work-type"
                                            value="casual"
                                            className='mr-2'
                                        />
                                        Casual
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                        </div>
                        <div className='py-4 border-b mx-4'>
                            <div className='flex justify-between items-center'>
                                <p className='h-bold text-xl'>Availability</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-1 pt-3'>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                            <input
                                                type="checkbox"
                                                name="availability"
                                                value="monday"
                                                className='mr-2'
                                            />
                                                Monday
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="availability"
                                            value="tuesday"
                                            className='mr-2'
                                        />
                                            Tuesday
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="availability"
                                            value="wednesday"
                                            className='mr-2'
                                        />
                                            Wednesday
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="availability"
                                            value="thursday"
                                            className='mr-2'
                                        />
                                            Thursday
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="availability"
                                            value="friday"
                                            className='mr-2'
                                        />
                                            Friday
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="availability"
                                            value="saturday"
                                            className='mr-2'
                                        />
                                            Saturday
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <label className='text-black'>
                                        <input
                                            type="checkbox"
                                            name="availability"
                                            value="sunday"
                                            className='mr-2'
                                        />
                                            Sunday
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-white rounded-2xl border  py-4'>
                    <div className='border-b'>
                        <h2 className='h-bold text-black text-3xl font-semibold pb-4 pl-8'>Results for <span className='text-[#0095A9] h-bold font-extrabold'>"Barista"</span></h2>
                    </div>
                    <div className='flex items-center justify-between my-4 px-8'>
                        <p>124 candidates</p>
                        <div className='flex items-center gap-3 p-2 bg-[#F3F4F6]'>
                            <p>
                                Sort by: Most Relevant
                            </p>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        {selectedFilters}
                    </div>
                    <div className='grid grid-cols-3 gap-6 px-8'>
                        {
                            data.map((value:any, index:any) => {
                                return(
                                  <div className='flex flex-col gap-1' key={index}>
                                    <a href={value.linkTo} className='search-box hover:cursor-pointer'>
                                        <div
                                            className={`relative bg-center bg-cover 
                                            flex justify-center items-end w-56 h-56`}
                                            style={{
                                                backgroundImage: `url(${value.profileImage})`
                                            }}
                                        >
                                            <svg 
                                                width="28" 
                                                height="32"
                                                viewBox="0 0 33 32" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className={`${favourite ? 'fill-red-600' : '' } absolute top-2 right-2 heart`}
                                            >
                                                <path d="M26.5834 7.51661C24.0274 4.96061 19.8826 4.96061 17.3266 7.51661C17.0114 7.83181 16.7378 8.17181 16.5002 8.52861C16.2626 8.17181 15.989 7.83181 15.6738 7.51741C13.1178 4.96141 8.973 4.96141 6.417 7.51741C3.861 10.0734 3.861 14.2182 6.417 16.7742L16.5002 26.8566L26.5834 16.7734C29.1394 14.2174 29.1394 10.0734 26.5834 7.51661Z" stroke="#DEE1E6" stroke-width="1.92" stroke-miterlimit="10" stroke-linecap="square"/>
                                            </svg>
                                            {
                                                value.price ? 
                                                <p className='p-2 bg-[#7052E5]/70 rounded-3xl text-white mb-4'>
                                                    {value.price}
                                                </p>
                                                :
                                                <p className='p-2 bg-[#7052E5]/70 rounded-3xl text-white mb-4'>
                                                    Match rate {value.rate}%
                                                </p>
                                            }

                                        </div>
                                    </a>
                                    {
                                        value.age ?
                                        <p className='text-lg text-black h-bold search-name'>{value.name}, {value.age} - {value.rol}</p>
                                        :
                                        <p className='text-lg text-black h-bold search-name'>{value.name}</p>
                                    }
                                    {
                                        value.institution ? 
                                        <p className='opacity-90'>{value.institution}</p>
                                        :
                                        <></>
                                    }
                                    <p className='text-[#0095A9] h-bold'>{value.city}, {value.state} {value.cp}</p>
                                    <div className='flex'>
                                        <img src="/assets/images/vectors/star.svg" alt="" />
                                        <img src="/assets/images/vectors/star.svg" alt="" />
                                        <img src="/assets/images/vectors/star.svg" alt="" />
                                        <img src="/assets/images/vectors/star.svg" alt="" />
                                        <img src="/assets/images/vectors/star-half.svg" alt="" />
                                    </div>
                                    {
                                        value.age ?
                                        <p className='opacity-50'>{value.reviews} Reviews from Employers</p>
                                        :
                                        value.institution ?
                                        <p className='opacity-50'>{value.reviews} Reviews from Students</p>
                                        :
                                        <p className='opacity-50'>{value.reviews} Reviews from Employees</p>
                                    }
                                  </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col my-4 gap-4'>
                        <Image src={'/assets/images/publicity/ads-1.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-2.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-3.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-4.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-5.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-6.png'} alt='' width={200} height={150} />
                    </div>
            </div>
        </div>
    );
};

export default SearchComponent;

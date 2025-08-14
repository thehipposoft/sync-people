import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';

const Categories = () => {
  return (
    <div className='py-12'>
      <h1 className='font-semibold text-[38px] px-6 md:px-0 container tracking-tight md:tracking-normal'>Popular Job Categories</h1>
      <div className='flex justify-center py-10 px-5 flex-wrap gap-5'>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-5'>
            <div className='flex flex-col w-[280px] md:h-[600px] col-span-1 rounded-t-full'>
                <Link href={ROUTES.CATEGORIES_HOSPITALITY} className='group'>
                    <div className='bg-secondary md:rounded-tl-[150px] md:rounded-none rounded-[150px] rounded-bl-none h-[280px] duration-500 group-hover:rounded-tl-none'>
                        <div className='pt-16 pl-14'>
                            <Image src={'/assets/images/vectors/tourism.svg'} alt='' height={50} width={50} className='' />
                            <p className='text-white font-semibold text-xl pt-2'>Hospitality</p>
                            <p className='text-white text-lg group-hover:underline'>+ Discover</p>
                        </div>
                    </div>
                    <div className='relative w-[280px] h-[320px] hidden md:block'>
                        <Image src={'/assets/images/categories/cat-1.webp'} alt='' fill className=' object-cover rounded-bl-[150px]' />
                    </div>
                </Link>
            </div>
            <div className='flex flex-col w-[280px] md:h-[600px] col-span-1'>
                <Link href={ROUTES.CATEGORIES_WAREHOUSING} className='group flex flex-col gap-5'>
                    <div className={`relative h-[280px] w-[280px] hidden md:block `}>
                        <Image src={'/assets/images/categories/categories-2.jpg'} alt='' fill className='object-cover rounded-full rounded-bl-none' />
                    </div>
                    <div className='bg-[#3EC1AA] relative rounded-full rounded-tr-none h-[300px] overflow-hidden flex flex-col justify-center pl-8 duration-500 group-hover:rounded-tr-full'>
                        <Image src={'/assets/images/vectors/paper.svg'} alt='' height={50} width={50} className='' />
                        <p className='text-white font-semibold text-xl pt-2'>Warehousing</p>
                        <p className='text-white text-lg group-hover:underline'>+ Discover</p>
                    </div>
                </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-5 mt-4 md:mt-0'>
            <div className='flex flex-col w-[280px] md:h-[600px] col-span-1'>
                <Link href={ROUTES.CATEGORIES_CONSTRUCTION} className='group'>
                    <div className='relative h-[280px] w-[280px] hidden md:block'>
                        <Image src={'/assets/images/categories/categories-4.jpg'} alt='' fill className='object-cover rounded-t-full' />
                    </div>
                    <div className='bg-secondary rounded-bl-[150px] md:rounded-none rounded-[150px] rounded-br-none h-[320px] flex flex-col justify-end duration-500 group-hover:rounded-bl-[150px]'>
                        <div className='pb-14 pl-14'>
                            <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.375 0C8.62908 0 7.91371 0.296316 7.38626 0.823762C6.85882 1.35121 6.5625 2.06658 6.5625 2.8125H2.8125C2.06658 2.8125 1.35121 3.10882 0.823762 3.63626C0.296316 4.16371 0 4.87908 0 5.625V26.25C0 26.9959 0.296316 27.7113 0.823762 28.2387C1.35121 28.7662 2.06658 29.0625 2.8125 29.0625H6.5625V45H10.3125V29.0625H40.3125V45H44.0625V29.0625H47.8125C48.5584 29.0625 49.2738 28.7662 49.8012 28.2387C50.3287 27.7113 50.625 26.9959 50.625 26.25V5.625C50.625 4.87908 50.3287 4.16371 49.8012 3.63626C49.2738 3.10882 48.5584 2.8125 47.8125 2.8125H44.0625C44.0625 2.06658 43.7662 1.35121 43.2387 0.823762C42.7113 0.296316 41.9959 0 41.25 0C40.5041 0 39.7887 0.296316 39.2613 0.823762C38.7338 1.35121 38.4375 2.06658 38.4375 2.8125H12.1875C12.1875 2.06658 11.8912 1.35121 11.3637 0.823762C10.8363 0.296316 10.1209 0 9.375 0ZM1.875 11.2031L8.39062 4.6875H17.8594L1.875 20.6719V11.2031ZM4.64062 27.1875L27.1406 4.6875H36.6094L14.1094 27.1875H4.64062ZM45.8906 4.6875H47.8125C48.0611 4.6875 48.2996 4.78627 48.4754 4.96209C48.6512 5.1379 48.75 5.37636 48.75 5.625V11.2969L32.8594 27.1875H23.3906L45.8906 4.6875ZM48.75 20.5781V26.25C48.75 26.4986 48.6512 26.7371 48.4754 26.9129C48.2996 27.0887 48.0611 27.1875 47.8125 27.1875H42.1406L48.75 20.5781Z" fill="white"/>
                            </svg>
                            <p className='text-white font-semibold text-xl pt-2'>Construction</p>
                            <p className='text-white text-lg group-hover:underline'>+ Discover</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col w-[280px] md:h-[600px] col-span-1'>
                <Link href={ROUTES.CATEGORIES_CLEANING} className='group flex flex-col gap-5'>
                    <div className={`bg-[#FF8149] rounded-full rounded-bl-none h-[280px] pl-14 pt-14 duration-500 group-hover:rounded-bl-full`}>
                        <svg width="35" height="55" viewBox="0 0 35 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 55H5L0 17.5H35L30 55ZM29.25 22.5H5.6875L9.375 50H25.625L29.25 22.5ZM17.5 37.5C19.5833 37.5 21.3542 36.7708 22.8125 35.3125C24.2708 33.8542 25 32.0833 25 30V25H20V30C20 30.7083 19.7608 31.3017 19.2825 31.78C18.8025 32.26 18.2083 32.5 17.5 32.5C16.7917 32.5 16.1983 32.26 15.72 31.78C15.24 31.3017 15 30.7083 15 30V25H10V30C10 32.0833 10.7292 33.8542 12.1875 35.3125C13.6458 36.7708 15.4167 37.5 17.5 37.5ZM25 15C23.9583 15 23.0733 14.635 22.345 13.905C21.615 13.1767 21.25 12.2917 21.25 11.25C21.25 10.2083 21.615 9.32333 22.345 8.595C23.0733 7.865 23.9583 7.5 25 7.5C26.0417 7.5 26.9267 7.865 27.655 8.595C28.385 9.32333 28.75 10.2083 28.75 11.25C28.75 12.2917 28.385 13.1767 27.655 13.905C26.9267 14.635 26.0417 15 25 15ZM12.5 12.5C10.75 12.5 9.27083 11.8958 8.0625 10.6875C6.85417 9.47917 6.25 8 6.25 6.25C6.25 4.5 6.85417 3.02083 8.0625 1.8125C9.27083 0.604167 10.75 0 12.5 0C14.25 0 15.7292 0.604167 16.9375 1.8125C18.1458 3.02083 18.75 4.5 18.75 6.25C18.75 8 18.1458 9.47917 16.9375 10.6875C15.7292 11.8958 14.25 12.5 12.5 12.5Z" fill="white"/>
                        </svg>
                        <p className='text-white font-semibold text-xl pt-2'>Cleaning services</p>
                        <p className='text-white text-lg group-hover:underline'>+ Discover</p>
                    </div>
                    <div className='relative h-[300px] w-[280px] hidden md:block'>
                        <Image src={'/assets/images/categories/cat-4.webp'} alt='' fill className='object-cover rounded-full rounded-tr-none' />
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories

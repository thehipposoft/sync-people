import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/app/constants';

const Categories = () => {
  return (
    <div className='py-12'>
      <h1 className='font-bold text-[38px] md:pl-20 px-6 md:px-0'>Popular Job Categories</h1>
      <div className='flex justify-center py-10 px-5 flex-wrap gap-5'>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-5'>
            <div className='flex flex-col md:w-[280px] md:h-[600px] col-span-1'>
            <Link href={ROUTES.CATEGORIES_TOURISM}>
              <div className='bg-[#7052E5] rounded-t-[100px] h-[280px]'>

                    <div className='pt-14 pl-10'>
                    <Image src={'/assets/images/vectors/tourism.svg'} alt='' height={50} width={50} className='' />
                    <p className='text-white font-semibold text-xl pt-2'>Tourism</p>
                    </div>


              </div>
              <Image src={'/assets/images/categories/categories-1.png'} alt='' width={280} height={400} className='h-[320px]' />
            </Link>
            </div>
            <div className='flex flex-col md:w-[280px] md:h-[600px] col-span-1'>
                <Link href={ROUTES.CATEGORIES_WAREHOUSING}>
                    <div className={`bg-[url('/assets/images/categories/categories-2.jpg')] flex flex-col justify-end pl-8 pb-6 bg-cover bg-center rounded-full rounded-bl-none h-[280px]`}>
                        <Image src={'/assets/images/vectors/paper.svg'} alt='' height={50} width={50} className='' />
                        <p className='text-white font-semibold text-xl pt-2'>Warehousing</p>
                    </div>
                </Link>
                <div className='bg-[#3EC1AA] relative rounded-full rounded-tr-none h-[300px] md:mt-6 overflow-hidden'>
                    <Image className='absolute top-[35%] left-[10%]' src={'/assets/images/vectors/note.svg'} width={45} height={40} alt='chat icon' />
                    <Image className='absolute top-[10%] left-[70%]' src={'/assets/images/vectors/money.svg'} width={40} height={40} alt='chat icon' />
                    <Image className='relative top-[27%]' src={'/assets/images/categories/categories-3.png'} width={270} height={260} alt='Girl smilling picture' />
                </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-5 mt-4 md:mt-0'>
            <div className='flex flex-col w-[280px] h-[600px] col-span-1'>
              <div className={`bg-[url('/assets/images/categories/categories-4.jpg')] bg-cover bg-center rounded-t-[200px] h-[280px]`}></div>
                <Link href={ROUTES.CATEGORIES_CONSTRUCTION}>
                    <div className='bg-[#7052E5] rounded-bl-[100px] h-[320px] flex flex-col justify-end items-end'>
                        <div className='pr-10 pb-10'>
                        <p className='text-white font-semibold text-xl pb-2'>Construction</p>
                        <Image src={'/assets/images/vectors/construction.svg'} alt='' height={50} width={50} className='float-right' />
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col w-[280px] h-[600px] col-span-1'>
              <div className={`bg-[#FF8149] relative bg-cover bg-center rounded-full rounded-bl-none h-[280px] overflow-hidden`}>
                <Image className='relative top-[20%] left-[15%]' src={'/assets/images/vectors/conversation.svg'} width={40} height={40} alt='chat icon' />
                <Image className='absolute top-[40%] left-[70%]' src={'/assets/images/vectors/search.svg'} width={40} height={40} alt='chat icon' />
                <Image className='relative top-[10%]' src={'/assets/images/categories/categories-5.png'} width={260} height={260} alt='Guy smilling picture' />
              </div>
              <div className={`bg-[url('/assets/images/categories/categories-6.png')] flex flex-col justify-end items-end relative overflow-hidden rounded-[200px] rounded-tr-none h-[300px] md:mt-6`}>
                <div className='absolute h-full w-full z-10 bg-[#3EC1AA] opacity-40' />
                <Link href={ROUTES.CATEGORIES_CLEANING}>
                    <div className='pr-10 pb-10 relative z-20'>
                    <p className='text-white font-semibold text-xl pb-2'>Cleaning services</p>
                    <Image src={'/assets/images/vectors/cleaning.svg'} alt='' height={35} width={35} className='float-right' />
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories

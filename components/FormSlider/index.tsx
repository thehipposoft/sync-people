import React, {useState} from 'react';
import Image from 'next/image';

type FormSliderTypes = {
    slides: {
        id: number
        title: string,
        subtitle: string,
        description: string,
        content: any,
    }[],
    closeMenu: any,
    currentIndexProp: number,
}

const FormSlider = ({ slides, closeMenu, currentIndexProp }:FormSliderTypes) => {

    const [currentIndex, setCurrentIndex] = useState<number>(currentIndexProp);

    function showNext() {
        setCurrentIndex((index) => {
            if (index === slides.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrev() {
        setCurrentIndex((index) => {
            if (index === 0) return slides.length - 1;
            return index - 1;
        })
    }

    return (
        <div className='bg-white relative z-10 px-20 pt-6 w-[90vw] h-screen'>
                <p
                    className='absolute right-12 py-2 px-4 hover:bg-black/50 duration-500 cursor-pointer'
                    onClick={closeMenu}
                    >
                        X
                </p>
            <div className='flex flex-col'>
                <Image src={'/assets/logo.png'} alt='Sync people logo' width={90} height={100} />
                <p className='blue'>Connecting <strong>Talents</strong></p>
                <p className='blue'>to <strong>Opportunities</strong></p>
            </div>
            <div className='flex overflow-hidden h-[575px]'>
                {
                    slides.map((val, index) => {
                        return(
                            <div
                                className='flex flex-col duration-700 min-w-[1200px] 2xl:min-w-[1600px]'
                                key={index}
                                style={{
                                    translate: `${-100 * currentIndex}%`,
                                }}
                            >
                                <div className='flex items-center pt-4'>
                                    <Image src={'/assets/images/vectors/education.svg'} alt='' width={35} height={30}/>
                                    <h4 className='font-bold pl-4'>{val.title}</h4>
                                </div>
                                <span className='blue text-5xl pt-2'>{val.subtitle}</span>
                                <p className='pb-4'>{val.description}</p>
                                    {val.content}

                            </div>
                        )
                    })
                }

            </div>
            <div className='flex gap-6 justify-center py-6'>
                {
                    currentIndex != 0 ?
                    <button 
                        className='text-[#FF8149] border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                        onClick={showPrev}
                    >
                        Back
                    </button>
                     : ''
                 }
                <button 
                    className='text-[#FF8149] border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    onClick={showNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FormSlider;
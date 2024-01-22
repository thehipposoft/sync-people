import Image from 'next/image';
import React from 'react';

const ProfileForm = () => {
    return (
        <div className='px-20 pt-12 relative bg-white w-[90vw] h-[95vh]'>
            <div className='flex flex-col'>
                <Image src={'/assets/logo.png'} alt='Sync people logo' width={90} height={100} />
                <p className='blue'>Connecting <strong>Talents</strong></p>
                <p className='blue'>to <strong>Opportunities</strong></p>
            </div>
            <div className='flex flex-col pt-10 mx-auto'>
                <div className='flex items-center'>
                    <Image src={'/assets/images/vectors/education.svg'} alt='' width={35} height={30}/>
                    <h4 className='font-bold pl-4'>1. Education and work experience</h4>
                </div>
                <span className='blue text-5xl pt-2'>Great Choice!</span>
                <p className='pt-2'>Now tell us a little bit about you...</p>
                <form className='md:pt-2 md:w-[500px]'>
                    <section className='flex flex-col'>
                        <label htmlFor="text" >Education Level:</label>
                        <select name="cars" id="cars">
                            <option value="level-1">Level #1</option>
                            <option value="level-2">Level #2</option>
                            <option value="level-3">Level #3</option>
                            <option value="level-4">Level #4</option>
                         </select>
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Do you want to elaborate on this item?</label>
                        <input type="text" name="" id=""/>
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">In case of university degree, name it</label>
                        <input type="text" name="degree" id=""/>
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Lorem Ipsum</label>
                        <input type="text" name="" id=""/>
                    </section>
                </form>
                <div className='flex justify-center py-6'>
                    <button className='text-[#FF8149] border-[#FF8149]'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
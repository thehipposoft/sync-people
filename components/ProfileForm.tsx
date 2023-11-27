import Image from 'next/image';
import React from 'react';

const ProfileForm = () => {
    return (
        <div className=' pl-20 pt-12'>
            <div className='flex flex-col'>
                <Image src={'/assets/logo.png'} alt='Sync people logo' width={100} height={100} />
                <span className='blue text-lg'>Connecting <strong>Talents</strong><br />to <strong>Opportunities.</strong></span>  
            </div>
            <div className='flex flex-col pt-16'>
                <div className='flex items-center'>
                    <Image src={'/assets/images/vectors/education.svg'} alt='' width={50} height={50}/>
                    <h4 className='font-bold pl-2'>1. Education and work experience</h4>
                </div>
                <span className='blue text-6xl pt-4'>Great Choice!</span>
                <p className='pt-2'>Now tell us a little bit about you...</p>
                <form className='md:pt-6 md:w-[500px]'>
                    <section className='flex flex-col'>
                        <label htmlFor="text" >Education Level:</label>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
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
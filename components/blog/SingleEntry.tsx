import Image from 'next/image';
import React from 'react';

const SingleEntry = () => {
    return (
        <div className='md:w-[900px] w-[85vw] flex flex-col gap-6 justify-center mx-auto my-16'>
            <h1 className='text-5xl'>How to apply to apply for a job with a working holiday visa?</h1>
            <div className='flex gap-4'>
                <h5 className='text-[#FF8149] font-semibold'>Blog post - Working holiday visa</h5>
                <h5 className='uppercase italic'>Monday 23 March, 2024</h5>
            </div>
            <p className='poppins italic text-[#798196]'>If you’re ready to explore the world while earning an income, a Working Holiday Visa (WHV) is a fantastic way to combine travel with temporary work. Here’s a step-by-step guide to help you successfully apply for a job while on your working holiday.</p>
            <div className='relative md:w-[900px] md:h-[300px] h-[200px] my-6'>
                <Image src={'/assets/images/blog.png'} alt='' fill />
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <h5 className='font-semibold blue text-xl'>1. Research Job Markets</h5>
                    <p className='poppins text-[#798196]'>Before arriving in your destination country, do some research on the job market. Certain industries, like hospitality, agriculture, and retail, often have flexible, short-term roles that suit Working Holiday Visa holders. Websites like job boards, social media groups, and even country-specific platforms are great places to start.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='font-semibold blue text-xl'>2. Prepare Your Resume and Cover Letter with us</h5>
                    <p className='poppins text-[#798196]'>Make sure your resume is up-to-date and tailored to the job market you’re entering. Highlight any relevant experience, especially in sectors popular with working holidaymakers. For your cover letter, mention that you are on a Working Holiday Visa and explain how you can contribute in a short-term role.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='font-semibold blue text-xl'>3. Get the Necessary Documents Ready</h5>
                    <p className='poppins text-[#798196]'>Employers will typically require certain documentation to hire you legally. These may include:</p>
                    <ul className='list-disc'>
                        <li className='poppins text-[#798196]'>A valid Working Holiday Visa</li>
                        <li className='poppins text-[#798196]'>Your passport</li>
                        <li className='poppins text-[#798196]'>Tax or social security number (depending on the country)</li>
                        <li className='poppins text-[#798196]'>Bank account details Ensure you have these documents readily available to avoid delays during the hiring process.</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='font-semibold blue text-xl'>Be Open to Temporary and Flexible Work</h5>
                    <p className='poppins text-[#798196]'>Since you’re on a temporary visa, be prepared for short-term contracts or seasonal work. Employers might also offer casual roles where you can work part-time or flexible hours, giving you more time to explore your surroundings.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='font-semibold blue text-xl'>Know Your Rights</h5>
                    <p className='poppins text-[#798196]'>Each country has specific labor laws regarding Working Holiday Visas, such as maximum working hours and employer obligations. Ensure you understand your rights as a WHV holder to avoid exploitation and ensure fair working conditions.</p>
                </div>
            </div>
            <div className='relative md:w-[900px] md:h-[300px] h-[200px] my-6'>
                <Image src={'/assets/images/blog2.png'} alt='' fill />
            </div>
            <div className='flex flex-col gap-4'>
                <h5 className='font-semibold blue text-xl'>Final Thoughts</h5>
                <p className='poppins text-[#798196]'>Applying for a job on a Working Holiday Visa can be an exciting step in your travel journey. By preparing in advance, being flexible with the types of jobs you consider, and actively networking, you’ll have a much higher chance of landing a role that suits both your visa conditions and your lifestyle. Good luck!</p>
            </div>
            <div className='w-full flex justify-end'>
                <button className='px-5 py-2 border rounded-3xl border-[#7052E5] text-[#7052E5]'>Share</button>
            </div>
        </div>
    );
};

export default SingleEntry;

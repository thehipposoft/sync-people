import React from 'react';
import BlogsLayout from './BlogsLayout';

const BlogComponent = () => {
    return (
        <div className=' flex flex-col md:w-[1250px] w-[90vw] mx-auto py-12'>
            <h1>Our Blog</h1>
            <h4 className='text-lg pt-2 h-bold'>Latest Posts</h4>
            <div className='flex gap-2 mt-4 flex-wrap'>
                <button className='rounded-3xl border-[#FF8149] text-[#FF8149] px-5 py-2 border font-semibold'>
                    Entertainment
                </button>
                <button className='rounded-3xl border-[#FF8149] text-[#FF8149] px-5 py-2 border font-semibold'>
                    Places
                </button>
                <button className='rounded-3xl border-[#FF8149] text-[#FF8149] px-5 py-2 border font-semibold'>
                    Working Holiday Visa
                </button>
                <button className='rounded-3xl border-[#FF8149] text-[#FF8149] px-5 py-2 border font-semibold'>
                    Industries
                </button>
            </div>
            <BlogsLayout />
        </div>
    );
} ;

export default BlogComponent;

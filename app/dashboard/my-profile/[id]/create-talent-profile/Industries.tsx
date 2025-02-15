type IndustriesPropsType = {
   currentIndex: number;
   isVisible: boolean;
}

const Industries = ({
    currentIndex,
    isVisible,
}:IndustriesPropsType) => {
    return (
        <div
            className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
        >
            <div className='flex items-center justify-between pt-8'>
                <h4 className='font-bold py-4 text-xl'>
                    2. My Industries
                </h4>
            </div>
            <p className='pb-4 text-[#1A335D] text-lg'>
                Come on, this is just the beginning
            </p>
            <div className={`${isVisible ? 'md:block' : 'md:hidden'}`}>
                <div className='md:pt-2 flex md:flex-row flex-col md:gap-16 gap-4'>
                    <div className='md:w-3/4'>
                        <p className="mb-4 text-[#1A335D]">Industries of choice *you can choose more than one option</p>
                        <div className='flex flex-col md:gap-1 gap-4'>
                                <label className='flex items-center gap-2' htmlFor="construction">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="construction"
                                        id="construction"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                    Construction
                                </label>
                                <label className='flex items-center gap-2' htmlFor="cleaning">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="cleaning"
                                        id="cleaning"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                        Cleaning
                                </label>
                                <label className='flex items-center gap-2' htmlFor="warehousing">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="warehousing"
                                        value="warehousing"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                    Warehousing
                                </label>
                                <label className='flex items-center gap-2' htmlFor="logistics">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="logistics"
                                        value="logistics"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                    Logistics
                                </label>
                                <label className='flex items-center gap-2' htmlFor="farming">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="farming"
                                        value="farming"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                    Farming / Solar farming
                                </label>
                                <label className='flex items-center gap-2' htmlFor="hospitality">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="hospitality"
                                        value="hospitality"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                        Hospitality
                                </label>
                                <label className='flex items-center gap-2 ' htmlFor="retail">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="retail"
                                        value="Retail"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                    retail
                                </label>
                                <label className='flex items-center gap-2' htmlFor="age-care">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="age-care"
                                        value="age-care"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                    />
                                    Age Car
                                </label>
                                <label className='flex items-center gap-2' htmlFor="other">
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        id="other"
                                        className="appearance-none rounded-full border-1 duration-300 border-[#0095A9] checked:bg-[#0095A9] p-[6px]"
                                        value="other"
                                    />
                                    Other
                                </label>
                                <input type="text" name="Other" id="other" className='mt-4' placeholder='*Other-specify' />
                                <label className="flex flex-col gap-2 mt-6">
                                    Rol description:
                                    <textarea rows={5} className="resize-none border border-[#656ED3] rounded-[2em] p-4">

                                    </textarea>
                                </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;

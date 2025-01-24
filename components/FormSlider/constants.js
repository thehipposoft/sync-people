import React from "react"
import Image from "next/image"

const FORM_SLIDES = [
    {
        id: 1,
        title: '1. Basic Information',
        vector: '/assets/images/vectors/user.svg',
        description: 'Now tell us a little bit about...',
        content: <div className='flex flex-col md:pt-2 md:px-6'>
                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <label htmlFor="name" className="block pb-2">First Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                        </div>

                        <div className='md:w-1/2'>
                            <label htmlFor="last_name" className="block pb-2">Last Name:</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                required
                            />
                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <label htmlFor="dob" >Date of Birth:</label>
                            <input type="date" name="dob" id="dob" />
                        </div>
                        <div className='md:w-1/2 flex flex-col gap-2 justify-center'>
                            <label>To which gender identity do you most identify?</label>
                            <div className='flex justify-between'>
                                <label className='flex gap-1'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                    />
                                    Male
                                </label>
                                <label className='flex gap-1'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                    />
                                    Female
                                </label>
                                <label className='flex gap-1 '>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                    />
                                        Other
                                </label>
                            </div>
                        </div>
                    </section>

                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <label htmlFor="email" className="block pb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className='md:w-1/2'>
                            <label htmlFor="phone" className="block pb-2">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>
                    </section>

                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <label htmlFor="address" className="block pb-2">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                            />
                        </div>
                        <div className='md:w-1/2'>
                        </div>
                    </section>
                </div>,
    },
    {
        id: 2,
        title: '2. My Industries',
        vector: '/assets/images/vectors/time.svg',
        description: 'Come on, this is just the beginning',
        content: <div className='md:pt-2 md:px-6 flex md:flex-row flex-col md:gap-16 gap-4'>
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

                </div>,
    },
    {
        id: 3,
        title: '3. Working Rights',
        vector: '/assets/images/vectors/working-rights.svg',
        subtitle: "We're almost done",
        description: '',
        content: <div className='md:pt-2'>
                    <section className='flex flex-col gap-2'>
                        <label htmlFor="right-to-work" className='pb-2'>Right To Work:</label>
                        <select name="right-to-work" id="right-to-work" className="md:w-1/2">
                            <option value="australian-resident">Australian resident</option>
                            <option value="overseas-student">Overseas student</option>
                            <option value="working-holiday-maker">Working holiday maker</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="current-visa" className='flex flex-col gap-2 mt-6 md:w-1/2'>Current Visa / Number:
                            <input type="text" name="current-visa" id="current-visa"/>
                        </label>
                        <textarea rows={5} className="resize-none border border-[#656ED3] rounded-[2em] p-4 mt-8" placeholder="*Extra information - Optional">
                        </textarea>
                    </section>
                </div>,
    },
    {
        id: 4,
        title: '4. Extras',
        vector: '/assets/images/vectors/visa.svg',
        subtitle: '',
        description: 'Fantastic! you have reached the end of the form',
        content: <div className={` md:pt-2`}>
                    <section className='flex flex-col md:flex-row md:gap-16 gap-8'>
                        <label htmlFor="text" className="md:w-1/2 flex flex-col gap-2" >Level of English:
                            <select name="english-level" id="english-level">
                                <option value="level-1">English Level #1</option>
                                <option value="level-2">English Level #2</option>
                                <option value="level-3">English Level #3</option>
                                <option value="level-4">English Level #4</option>
                            </select>
                        </label>
                        <label htmlFor="text" className="md:w-1/2 flex flex-col gap-2" >Languages Spoken:
                            <input type="text" name="languages-spoken" id="languages-spoken" />
                        </label>
                    </section>
                    <section className='flex flex-col md:flex-row md:gap-16 gap-8'>
                        <label htmlFor="text" className="md:w-1/2 flex flex-col gap-2" >Preffered language:
                            <select name="preferred-language" id="preferred-language">
                                <option value="language-1">English</option>
                                <option value="language-2">Chinese</option>
                                <option value="language-3">Spanish</option>
                                <option value="language-4">Language #4</option>
                            </select>
                        </label>
                        <div className="md:w-1/2 hidden md:block"></div>
                    </section>
                    <section className='flex md:gap-16'>
                        <label htmlFor="text" className="md:w-1/2 w-full flex flex-col gap-2" >Education Level:
                            <select name="cars" id="cars">
                                <option value="education-level-1">Education Level #1</option>
                                <option value="educationlevel-2">Education Level #2</option>
                                <option value="educationlevel-3">Education Level #3</option>
                                <option value="educationlevel-4">Education Level #4</option>
                            </select>
                        </label>
                        <div className="md:w-1/2 hidden md:block"></div>
                    </section>
                    <section className="my-8">
                        <p className="text-[#1A335D]">Academic Credentials:</p>
                        <div className="flex flex-col items-center md:items-start md:flex-row gap-6 mt-12 mx-auto md:mx-0">
                            <label htmlFor="file-upload" className="h-40 w-56 rounded-2xl shadow-xl flex flex-col gap-4 cursor-pointer justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                                    Upload File
                                <input id="file-upload" type="file" className="hidden"/>
                            </label>
                            <label htmlFor="file-upload-two" className="h-40 w-56 rounded-2xl shadow-xl flex flex-col gap-4 cursor-pointer justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                                    Upload File
                                <input id="file-upload-two" type="file" className="hidden"/>
                            </label>
                            <label htmlFor="file-upload-three" className="h-40 w-56 rounded-2xl shadow-xl flex flex-col gap-4 cursor-pointer justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                                    Upload File
                                <input id="file-upload-three" type="file" className="hidden"/>
                            </label>
                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row md:gap-16 gap-8 pt-6'>
                        <label htmlFor="transportation" className="md:w-1/2 flex flex-col gap-2" >Transportation:
                            <select name="transportation" id="transportation">
                                <option value="own-vehicle">Own Vehicle</option>
                                <option value="level-2">Level #2</option>
                                <option value="level-3">Level #3</option>
                                <option value="level-4">Level #4</option>
                            </select>
                        </label>
                        <label htmlFor="licenses" className="md:w-1/2 flex flex-col gap-2" >Licences:
                            <input type="text" name="licenses" id="licenses"/>
                        </label>
                    </section>
                    <section className='flex md:gap-16 py-6'>
                        <label htmlFor="presentation-video" className="md:w-1/2 w-full flex flex-col gap-2" >Presentation video:
                            <input type="text" name="presentation-video" id="presentation-video" placeholder="Video URL" />
                        </label>
                        <div className="md:w-1/2 hidden md:block"></div>
                    </section>
                    <section className="flex flex-col items-center md:items-start gap-4 md:w-4/6">
                        <iframe
                            className="md:w-full w-[70vw] md:h-[315px]"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/0_6AK52kSVQ?si=wAkKFQ5EE9TOXuJb" title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <p className="text-xl mt-3 text-[#1A335D]">
                            Why Create a "presentation" Video?
                        </p>
                        <p className="text-sm">
                            Elevate your profile by adding a personal touch! Recording and sharing a video on your preferred platform can increase your visibility by up to 40%.
                            In today’s competitive market, 75% of hiring managers value candidates who effectively showcase their communication skills and personality.
                            A simple video can set you apart and boost your chances of landing the perfect opportunity.
                        </p>
                    </section>
                    <section className="mt-6 flex flex-col md:gap-4 gap-8">
                        <p className="text-lg mt-3 text-[#1A335D]">Social Media:</p>
                        <div className="flex md:flex-row flex-col md:gap-16 gap-8">
                            <input type="text" name="social-media-1" id="social-media-1" placeholder="Profile URL *Optional" />
                            <input type="text" name="social-media-2" id="social-media-2" placeholder="Profile URL *Optional" />
                        </div>
                        <div className="flex md:flex-row flex-col md:gap-16 gap-8">
                            <input type="text" name="social-media-3" id="social-media-3" placeholder="Profile URL *Optional" />
                            <input type="text" name="social-media-4" id="social-media-4" placeholder="Profile URL *Optional" />
                        </div>
                    </section>
                    <section className="mt-6 flex flex-col gap-4">
                        <p className="text-lg mt-3 text-[#1A335D]">More about myself:</p>
                        <textarea rows={5} className="resize-none border border-[#656ED3] rounded-[2em] p-4">
                        </textarea>
                    </section>
                    <section className="my-8 flex flex-col gap-4">
                        <p className="text-lg mt-3 text-[#1A335D]">Profile Header:</p>
                        <p className="mt-1 text-[#1A335D]">size: 2560 x 1440 px</p>
                        <label htmlFor="profile-header" className="h-40 w-56 rounded-2xl shadow-xl flex flex-col gap-4 mx-auto md:mx-0 cursor-pointer justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                                Upload File
                            <input id="profile-header" type="file" className="hidden"/>
                        </label>
                    </section>
                </div>,
    },
]

const BUSINESS_FORMSLIDES = [
    {
        id: 1,
        content: <div>
                    <h2 className='p-4 h-bold text-xl'>General information</h2>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <div className='md:pt-4 md:pl-2'>
                            <Image src={'/assets/images/business/mylk-bg.png'} alt='Business picture' width={500} height={400} className='md:ml-6'/>
                        </div>
                        <div className='flex md:flex-col justify-around gap-1 text-center items-center py-8 md:pb-0 md:pt-4 md:pr-16'>
                            <Image src={'/assets/images/business/mylk-logo.png'} alt='business logo' width={180} height={150} />
                            <div>
                                <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                <p className='h-bold'>Profile Strength</p>
                                <p>Want to stand out?</p>
                                <button className='text-[#326B88] border rounded-3xl border-[#326B88] px-6 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:pt-12 px-6'>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                    <label htmlFor="name" className="block pb-2">Company name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                    />
                            </div>
                            <div className='md:w-1/2'>
                                <label htmlFor="state" className="block pb-2">Industry</label>
                                <select
                                    id="state"
                                    name="state"
                                >
                                    <option value="Construction">Construction</option>
                                    <option value="Cleaning">Cleaning</option>
                                    <option value="Queensland">Queensland</option>
                                    <option value="Warehousing">Warehousing</option>
                                    <option value="Western Australia">Farming / Solar farming</option>
                                    <option value="Northern Territory">Hospitality</option>
                                    <option value="Northern Territory">Other</option>
                                </select>
                            </div>
                        </section>

                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                <label htmlFor="branches" className="block pb-2 ">Branches</label>
                                <input type="text" name="branches" id="branches" placeholder="*Specify numbers of branches"  />
                            </div>
                            <div className='md:w-1/2'>
                            </div>
                        </section>
                        <p className="p-bold text-[#1A335D] mt-12">Branch #1</p>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                <label htmlFor="state" className="block pb-2">Location - State:</label>
                                <select
                                    id="state"
                                    name="state"
                                >
                                    <option value="Victoria">Victoria</option>
                                    <option value="New South Wales">New South Wales</option>
                                    <option value="Queensland">Queensland</option>
                                    <option value="South Australia">South Australia</option>
                                    <option value="Western Australia">Western Australia</option>
                                    <option value="Northern Territory">Northern Territory</option>
                                </select>
                            </div>
                            <div className='md:w-1/2'>
                                <label htmlFor="location-city" className="block pb-2">Location - City:</label>
                                <input
                                    type="text"
                                    id="location-city"
                                    name="location-city"
                                    required
                                />
                            </div>
                        </section>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                <label htmlFor="location-adress" className="block pb-2">Location - Adress:</label>
                                <input
                                    type="text"
                                    id="location-adress"
                                    name="location-adress"
                                    required
                                />
                            </div>
                            <div className='md:w-1/2'>
                            </div>
                        </section>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                <label htmlFor="website" className="block pb-2">Website:</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    required
                                />
                            </div>
                            <div className='md:w-1/2'>
                            </div>
                        </section>
                        <p className="text-[#1A335D] mt-12">Upload Branch #1 profile picture</p>
                        <label htmlFor="branch-one-profile-pic" className="h-40 w-56 my-8 rounded-2xl shadow-xl flex flex-col gap-4 cursor-pointer mx-auto md:mx-0 justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                                Upload File
                            <input id="branch-one-profile-pic" type="file" className="hidden"/>
                        </label>
                    </div>
                </div>
    },
    {
        id: 2,
        content: <div>
                    <div className='flex md:flex-row flex-col items-center md:items-start gap-8 md:gap-0 justify-between px-6 mt-10'>
                        <div className="flex flex-col">
                            <div className='relative w-[180px] h-[180px]'>
                                <Image src={'/assets/images/business/avatar.png'} alt='profile picture' fill />
                            </div>
                            <h4 className="h-bold text-xl text-[#1A335D] mt-6">Contact Person</h4>
                        </div>
                        <div className="flex flex-col">
                            <div className='relative w-[180px] h-[180px]'>
                                <Image src={'/assets/images/business/mylk-logo.png'} alt='profile picture' fill />
                            </div>
                            <h4 className="h-bold text-xl text-[#1A335D] mt-6">Company Logo</h4>
                        </div>
                    </div>
                    <div className='md:pt-12 px-6'>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                    <label htmlFor="first-name" className="block pb-2">First name:</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        required
                                    />
                            </div>
                            <div className='md:w-1/2'>
                                    <label htmlFor="last-name" className="block pb-2">Last name:</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        required
                                    />
                            </div>
                        </section>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                <label htmlFor="email" className="block pb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className='md:w-1/2'>
                            </div>
                        </section>
                        <section className='flex flex-col md:flex-row gap-2 md:gap-16'>
                            <div className='md:w-1/2'>
                                <label htmlFor="phone" className="block pb-2">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                />
                            </div>
                            <div className='md:w-1/2'>
                            </div>
                        </section>
                    </div>
                </div>
    },
    {
        id: 3,
        content: <div>
                    <h4 className="h-bold text-xl text-[#1A335D] mt-6 px-6">Mylk Cafe</h4>
                    <div className='md:pt-12 px-6'>
                        <h4 className="h-bold text-lg text-[#1A335D]">Extras</h4>
                        <section className="mt-6 flex flex-col gap-4">
                            <p className="text-lg mt-3 text-[#1A335D]">Company Description:</p>
                            <textarea rows={5} className="resize-none border border-[#656ED3] rounded-[1em] p-4">
                            </textarea>
                        </section>
                        <section className='flex flex-col gap-2 md:gap-4'>
                            <p className="text-lg mt-3 text-[#1A335D]">Social Media Links:</p>
                            <input
                                className="md:w-1/2"
                                placeholder="Social Media Profile #1"
                                type="text"
                                id="first-name"
                                name="first-name"
                                required
                            />
                            <input
                                className="md:w-1/2"
                                placeholder="Social Media Profile #2"
                                type="text"
                                id="first-name"
                                name="first-name"
                                required
                            />
                            <input
                                className="md:w-1/2"
                                placeholder="Social Media Profile #3"
                                type="text"
                                id="first-name"
                                name="first-name"
                                required
                            />
                            <input
                                className="md:w-1/2"
                                placeholder="Social Media Profile #4"
                                type="text"
                                id="first-name"
                                name="first-name"
                                required
                            />
                            <input
                                className="md:w-1/2"
                                placeholder="Social Media Profile #5"
                                type="text"
                                id="first-name"
                                name="first-name"
                                required
                            />
                        </section>
                        <section className='gap-2 md:gap-4 mt-8'>
                            <label htmlFor="talent-industry" className="block pb-2">Talent Industry:</label>
                            <select name="right-to-work" id="right-to-work" className="md:w-1/2">
                                <option value="construciton">Construction</option>
                                <option value="tourism">Tourism</option>
                                <option value="warehousing">Warehousing</option>
                                <option value="cleaning-services">Cleaning Services</option>
                            </select>
                            <div className='md:w-1/2'>
                            </div>
                        </section>

                    </div>
                </div>
    },
]

export { FORM_SLIDES, BUSINESS_FORMSLIDES }

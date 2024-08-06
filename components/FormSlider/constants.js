import React, {useState} from "react"

const FORM_SLIDES = [
    {
        id: 1,
        title: '1. Basic Information',
        vector: '/assets/images/vectors/user.svg',
        description: 'Now tell us a little bit about...',
        content: <div className='md:pt-2 md:px-6'>
                    <section className='flex flex-col md:flex-row gap-4'>
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
                    
                    <section className='flex flex-col md:flex-row gap-4'>
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
                            <label htmlFor="email" className="block pb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                    </section>

                    <section className='flex flex-col md:flex-row gap-4'>
                        <div className='md:w-1/2'>
                            <label htmlFor="suburb" className="block pb-2">Location (suburb):</label>
                            <input
                                type="text"
                                id="suburb"
                                name="suburb"
                                required
                            />
                        </div>
                        <div className='md:w-1/2 flex flex-col justify-center'>
                            <label className="pb-1">To which gender identity do you most identify?</label>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                    />
                                    <label className='pl-1'>
                                    Male
                                    </label>
                                </div>
                                <div className='flex items-center'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                    />
                                    <label className='pl-1'>Female</label>
                                </div>
                                <div className='flex items-center'>
                                    
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                    />
                                    <label className='pl-1'>Other</label>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>,
    },
    {
        id: 2,
        title: '2. Schedule and preferences',
        vector: '/assets/images/vectors/time.svg',
        description: 'Come on this is just the beginning',
        content: <div className='md:pt-2 px-6 flex gap-16'>
                    <section className="flex flex-col gap-6 w-1/2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="available-from" >Available from</label>
                            <input type="date" name="available-from" id="available-from" /> 
                        </div>
                        <div>
                            <p className="pb-4">Preffered working hours</p>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="from-hours">From:</label>
                                    <select name="from" id="from-hours" className="pr-20 pl-4">
                                        <option value="7AM">7:00 AM</option>
                                        <option value="8AM">8:00 AM</option>
                                        <option value="9AM">9:00 AM</option>
                                        <option value="10AM">10:00 AM</option>
                                        <option value="11AM">11:00 AM</option>
                                        <option value="12AM">12:00 AM</option>
                                        <option value="13PM">13:00 PM</option>
                                        <option value="14PM">14:00 PM</option>
                                        <option value="15PM">15:00 PM</option>
                                        <option value="16PM">16:00 PM</option>
                                        <option value="17PM">17:00 PM</option>
                                        <option value="18PM">18:00 PM</option>
                                        <option value="19PM">19:00 PM</option>
                                        <option value="20PM">20:00 PM</option>
                                        <option value="21PM">21:00 PM</option>
                                        <option value="22PM">22:00 PM</option>
                                        <option value="23PM">23:00 PM</option>
                                        <option value="24PM">24:00 PM</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="to-hours">To:</label>
                                    <select name="to" id="to-hours" className="pr-20 pl-4">
                                        <option value="7AM">7:00 AM</option>
                                        <option value="8AM">8:00 AM</option>
                                        <option value="9AM">9:00 AM</option>
                                        <option value="10AM">10:00 AM</option>
                                        <option value="11AM">11:00 AM</option>
                                        <option value="12AM">12:00 AM</option>
                                        <option value="13PM">13:00 PM</option>
                                        <option value="14PM">14:00 PM</option>
                                        <option value="15PM">15:00 PM</option>
                                        <option value="16PM">16:00 PM</option>
                                        <option value="17PM">17:00 PM</option>
                                        <option value="18PM">18:00 PM</option>
                                        <option value="19PM">19:00 PM</option>
                                        <option value="20PM">20:00 PM</option>
                                        <option value="21PM">21:00 PM</option>
                                        <option value="22PM">22:00 PM</option>
                                        <option value="23PM">23:00 PM</option>
                                        <option value="24PM">24:00 PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="desired-weekly-hours">Desired weekly hours</label>
                            <input type="number" placeholder="40" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="right-to-work">Right to Work</label>
                            <select name="right-to-work" id="right-to-work" className="pl-4">
                                <option value="austrailian-resident">Australian Resident</option>
                                <option value="overseas-student">Overseas Student</option>
                                <option value="work-and-holiday">Work and Holiday Maker</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </section>
                    <section className="w-1/2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="days-available">Days Available</label>
                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="monday" />
                                    Monday
                                </label>

                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="tuesday" />
                                    Tuesday
                                </label>

                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="wednesday"/>
                                    Wednesday
                                </label>

                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="thursday"/>
                                    Thursday
                                </label>

                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="friday"/>
                                    Friday
                                </label>

                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="saturday"/>
                                    Saturday
                                </label>

                                <label className="flex gap-2 text-black">
                                    <input type="checkbox" name="days" value="sunday"/>
                                    Sunday
                                </label>
                        </div>
                    </section>
                </div>,
    },
    {
        id: 3,
        title: '3. Personal Documentation',
        vector: '/assets/images/vectors/time.svg',
        subtitle: "Fantastic! We're almost done",
        description: 'Now we need you to upload some files...supported format is .jpg .pdf',
        content: <div className='md:pt-2'>
                    <section className='flex flex-col '>
                        <label htmlFor="document-type" className='pb-2'>Document Type</label>
                        <select name="document-type" id="document-type" className="w-1/2">
                            <option value="photo">Photo</option>
                            <option value="video">Video</option>
                            <option value="certificate">Certificate</option>
                        </select>
                        <div className="flex flex-col gap-6 mt-12">
                            <label for="file-upload" className="h-52 w-56 rounded-2xl shadow-xl flex flex-col gap-4 cursor-pointer justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                                    Upload File
                                <input id="file-upload" type="file" className="hidden"/>
                            </label>
                            <label for="file-upload-two" className="h-52 w-56 rounded-2xl shadow-xl flex flex-col gap-4 cursor-pointer justify-center items-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                                    Upload File
                                <input id="file-upload-two" type="file" className="hidden"/>
                            </label>
                        </div>
                    </section>
                </div>,
    },
    {
        id: 4,
        title: '4. Extras',
        vector: '/assets/images/vectors/visa.svg',
        subtitle: '',
        description: '',
        content: <div className='md:pt-2 md:w-[500px]'>
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
                </div>,
    },
]

export { FORM_SLIDES }


{/* <div className='w-1/2'>
<label className="mb-2 pb-2">Industries of choice</label>
<div className='block'>
    <div className='flex items-center gap-2 '>
        <input
            type="checkbox"
            name="industrie"
            value="construction"
            id="construction"
        />
        <label className='text-black'  htmlFor="construction">
            Construction
        </label>
    </div>
    <div className='flex items-center gap-2'>
        <input
            type="checkbox"
            name="industrie"
            value="cleaning"
            id="cleaning"
        />
        <label className='text-black' htmlFor="cleaning">Cleaning</label>
    </div>
    <div className='flex items-center gap-2 '>
        <input
            type="checkbox"
            name="industrie"
            id="warehousing"
            value="warehousing"
        />
        <label className='text-black' htmlFor="warehousing">Warehousing</label>
    </div>
    <div className='flex items-center gap-2 '>
        
        <input
            type="checkbox"
            name="industrie"
            id="logistics"
            value="logistics"
        />
        <label className='text-black' htmlFor="logistics">Logistics </label>
       
    </div>

    <div className='flex items-center gap-2'>
       
        <input
            type="checkbox"
            name="industrie"
            id="farming"
            value="farming"
        />
         <label className='text-black' htmlFor="farming">Farming / Solar farming</label>
    </div>
    <div className='flex items-center gap-2 '>
       
        <input
            type="checkbox"
            name="industrie"
            id="hospitality"
            value="hospitality"
        />
         <label className='text-black' htmlFor="hospitality">Hospitality</label>
    </div>
    <div className='flex items-center gap-2 '>
        
        <input
            type="checkbox"
            name="industrie"
            id="retail"
            value="Retail"
        />
        <label className='text-black' htmlFor="retail">retail</label>
    </div>
    <div className='flex items-center gap-2 '>
        
        <input
            type="checkbox"
            name="industrie"
            id="age-care"
            value="age-care"
        />
        <label className='text-black' htmlFor="age-care">Age Care</label>
    </div>
    <div className='flex items-center gap-2'>
        
        <input
            type="checkbox"
            name="industrie"
            id="other"
            value="other"
        />
        <label className='text-black' htmlFor="other">Other</label>
    </div>
    <input type="text" name="Other" id="other" className='mt-4' placeholder='Other' />
</div>
</div> */}
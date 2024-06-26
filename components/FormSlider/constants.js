import React, {useState} from "react"


function handleChange(event) {
    setNewLanguages(event.target.value)
    console.log(languages)
}


const FORM_SLIDES = [
    {
        id: 1,
        title: '1. Personal information, education and work experience',
        subtitle: 'Great choice!',
        description: 'Now tell us a little bit about...',
        content: <form className='md:pt-2 md:px-6'>
                    <section className='flex flex-col md:flex-row gap-4'>
                        <div className='md:w-1/2'>
                            <label htmlFor="name" className="block pb-2">First name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                        </div>

                        <div className='md:w-1/2'>
                            <label htmlFor="last_name" className="block pb-2">Last name:</label>
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
                            <label htmlFor="date_of_birth" className="block pb-2">DOB:</label>
                            <input
                                type="date"
                                id="date_of_birth"
                                name="date_of_birth"
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
                    <section className='flex flex-col md:flex-row gap-4'>

                        <div className='md:w-1/2'>
                            <label className="block pb-2">Level of English:</label>
                            <select
                                name="level"
                            >
                                <option value="1">Fluent</option>
                                <option value="2">Proficient</option>
                                <option value="3">Basic</option>
                                <option value="4">None</option>

                            </select>
                        </div>

                        <div className='md:w-1/2'>
                            <label className="block pb-2">Languages:</label>
                            <select
                                multiple
                                name="languages"
                                className="rounded"
                            >
                                <option value="1">Spanish</option>
                                <option value="2">French</option>
                                <option value="3">German</option>
                                <option value="4">Japanese</option>
                                <option value="5">Italian</option>
                            </select>
                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row gap-4'>
                        <div className='md:w-1/2'>
                            <label htmlFor="citizenship" className="block pb-2">Citizenship:</label>
                            <input
                                type="text"
                                id="citizenship"
                                name="citizenship"
                                required
                            />
                        </div>
                        <div className='md:w-1/2'>
                        <label className="block pb-2">Academic credentials (opt):</label>
                            <select
                                name="credentials"
                                className=" rounded-3xl"
                            >
                                <option value="1">Credential #1</option>
                                <option value="2">Credential #2</option>
                                <option value="3">Credential #3</option>
                                <option value="4">Credential #4</option>
                                <option value="5">Credential #5</option>
                            </select>
                        </div>
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="about" className='pb-2'>Write about yourself</label>
                        <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                    </section>
                </form>,
    },
    {
        id: 2,
        title: '2. Location, schedule and preferences',
        subtitle: 'Great choice!',
        description: 'Now tell us a little bit about...',
        content: <form className='md:pt-2 px-6'>
                    <section className='flex flex-col md:flex-row gap-4'>
                        <div className='md:w-1/2'>
                            <label htmlFor="address" className="block pb-2">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                            />
                        </div>

                        <div className='md:w-1/4'>
                            <label htmlFor="state" className="block pb-2">State:</label>
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
                        <div className='md:w-1/4' >
                            <label htmlFor="cp" className='block pb-2'>CP:</label>
                            <input type="number" id='cp' name='cp' className=""/>
                        </div>
                    </section>
                    <div className="flex flex-col md:flex-row">
                        <section className="md:w-1/2">
                                <label htmlFor="">What is your availability?</label> <br />
                                <div className='flex flex-wrap pt-2'>
                                    <div className='border py-2 px-2 rounded-lg'>
                                        <input type="checkbox" id='availability-1' name='availability' value={'Full-time'} />
                                        <label htmlFor="availability-1" className='pl-1'>
                                            Full-time
                                        </label>
                                    </div>
                                    <div className='border py-2 px-2 rounded-lg'>
                                        <input type="checkbox" id='availability-2' name='availability' value={'Part-time'} />
                                        <label htmlFor="availability-2" className='pl-1'>
                                            Part-time
                                        </label>
                                    </div>
                                    <div className='border py-2 px-2 rounded-lg'>
                                        <input type="checkbox" id='availability-3' name='availability' value={'Casual'} />
                                        <label htmlFor="availability-3" className='pl-1'>
                                            Casual
                                        </label>
                                    </div>
                                    <div className='border py-2 px-2 rounded-lg'>
                                        <input type="checkbox" id='availability-4' name='availability' value={'Any'} />
                                        <label htmlFor="availability-4" className='pl-1'>
                                            Any
                                        </label>
                                    </div>
                                    <div className='border py-2 px-2 rounded-lg'>
                                        <input type="checkbox" id='availability-5' name='availability' value={'Contract/Temp'} />
                                        <label htmlFor="availability-5" className='pl-1'>
                                            Contract/Temp
                                        </label>
                                    </div>
                                </div>
                        </section>
                        <section className='flex flex-col md:w-1/2'>
                            <label htmlFor="available-from" className='pb-2'>Available from</label>
                            <input type="date" name="available-from" id="available-from" />
                        </section>
                    </div>
                    <section className='flex gap-4'>
                        <div className='w-1/2'>
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
                        </div>

                        <div className='w-1/2'>
                            <label className="mb-2 pb-2">Licences</label>
                            <div className='block'>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="white-card"
                                        id="white-card"
                                    />
                                    <label className='text-black' htmlFor="white-card">White Card</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        id="rsa"
                                        value="rsa"
                                    />
                                    <label className='text-black' htmlFor="rsa">RSA</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        id="wwc"
                                        value="wwc"
                                    />
                                    <label className='text-black' htmlFor="wwc">WWC</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        id="driver-licence"
                                        value="driver-licence"
                                    />
                                    <label className='text-black' htmlFor="driver-licence">Driver licence</label>
                                </div>

                                <div className='flex items-center gap-2'>
                                    
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        id="police-check"
                                        value="police-check"
                                    />
                                    <label className='text-black' htmlFor="police-check">Police Check</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="other"
                                        id="other-2"
                                    />
                                    <label className='text-black' htmlFor="other-2">Other</label>
                                </div>
                                <input type="text" name="Other" id="other" className='mt-4' placeholder='Other' />

                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="about" className='pb-2'>Do you have experience in your industry of choice?</label>
                        <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                    </section>
                </form>,
    },
    {
        id: 3,
        title: '3. Visa and paperwork',
        subtitle: "Fantastic! We're almost done",
        description: 'Now we need you to upload some files...supported format is .jpg .pdf',
        content: <form className='md:pt-2'>
                    <section className='flex flex-col w-1/2'>
                        <label htmlFor="visa" className='pb-2'>Current Visa</label>
                        <select name="visa" id="visa">
                            <option value="work-holiday">Work & Holiday</option>
                            <option value="Visa#2">Visa#2</option>
                            <option value="Visa#3">Visa#3</option>
                            <option value="Visa#4">Visa#4</option>
                        </select>
                    </section>
                    <div className='grid md:grid-cols-4 pt-10 gap-4 px-5'>
                            <div 
                                className='bg-white flex flex-col justify-center items-center w-[200px] h-[180px] rounded-lg shadow-xl '
                            >
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                            </div>
                            <div 
                                className='bg-white hidden md:flex flex-col justify-center items-center w-[200px] h-[180px] rounded-lg shadow-xl '
                            >
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                            </div>
                            <div 
                                className='bg-white hidden md:flex flex-col justify-center items-center w-[200px] h-[180px] rounded-lg shadow-xl'
                            >
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                            </div>
                            <div 
                                className='bg-white hidden md:flex flex-col justify-center items-center w-[200px] h-[180px] rounded-lg shadow-xl'
                            >
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                                </svg>
                            </div>
                        </div>
                </form>,
    },
    {
        id: 4,
        title: '4. Extras',
        subtitle: '',
        description: '',
        content: <form className='md:pt-2 md:w-[500px]'>
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
                </form>,
    },
]

export { FORM_SLIDES }
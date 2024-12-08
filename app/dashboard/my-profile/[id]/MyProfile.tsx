'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TalentTypeAcf } from '@/types';
import { ROUTES } from '@/app/constants';
import { getAge } from '@/lib/utils';
import { renderSocialMediaIcon } from '@/lib/utils';

type MyProfileProps = {
    user: TalentTypeAcf;
}

const MyProfile = ({
    user
}:MyProfileProps) => {
    return (
        <div className='flex flex-col md:w-full'>
            <div className='flex justify-between items-center px-8 py-2 w-full bg-white'>
                <Link href={ROUTES.HOME} className='hidden md:block'>
                    <Image src={'/assets/logo.svg'} alt='Insyncx logo' width={180} height={140} />
                </Link>
                <div className='flex justify-end gap-6 py-1'>
                    <Link href={'/training-and-licenses'} className='green-btn'>
                        Training and Licenses
                    </Link>
                    <Link href={'/business-market'} className='green-btn'>
                        Search Jobs
                    </Link>
                    <Image
                        src={"/assets/images/cv.png"}
                        alt='Profile picture'
                        className='rounded-full'
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <div className='bg-white md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 my-8'>
                <div className='border rounded-2xl md:w-[900px] mx-auto bg-white'>
                    <div className='relative flex flex-col'>
                        <Image
                            src={'/assets/images/profile/profile-banner.webp'}
                            alt={`Banner picture of ${user.personal_information.first_name}`}
                            width={900}
                            height={300}
                            className='object-cover rounded-t-2xl max-h-[200px]'
                        />
                        <div className='relative flex flex-col justify-between md:px-12 px-6 py-6'>
                            <Image
                                src={user.personal_information.profile_pic}
                                alt={`Profile picture of ${user.personal_information.first_name}`}
                                height={140}
                                width={140}
                                className='rounded-full border-[6px] border-white absolute -top-20 object-contain'
                                />
                            <div className='flex flex-col gap-2 mt-20'>
                                <h2 className='text-2xl pb-3'>
                                    {user.personal_information.first_name} <span className='h-bold'>{`${user.personal_information.last_name}, ${getAge(user.personal_information.date_of_birth)}`}</span>
                                </h2>
                                <h2 className='text-2xl font-bold'>
                                    Personal information
                                </h2>
                                <p>
                                    {user.working_rights.current_visa.label}
                                </p>
                                <p>
                                    {user.current_location.address_1}, {user.current_location.suburb}, {user.current_location.state} {user.current_location.postcode}
                                </p>
                                <p>
                                    {`DOB: ${user.personal_information.date_of_birth}`}
                                </p>
                                <div className={`flex gap-2`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8359 11.8754L11.0008 13.6857C10.0438 13.1086 9.15474 12.4258 8.35047 11.6499C7.57582 10.8443 6.89306 9.95516 6.31475 8.99879L8.12332 7.16365C8.23286 7.05242 8.30683 6.91112 8.33583 6.75772C8.36484 6.60432 8.34755 6.44577 8.28618 6.30222L6.40047 1.9068C6.32597 1.73348 6.19169 1.5927 6.02208 1.5101C5.85248 1.4275 5.65885 1.40858 5.47647 1.4568L2.01875 2.37137C1.84608 2.41613 1.69371 2.51818 1.58658 2.66081C1.47946 2.80344 1.42391 2.9782 1.42904 3.15651C1.64904 7.17803 3.32114 10.983 6.13475 13.8648C9.01705 16.6793 12.8231 18.3517 16.8456 18.5714C17.0241 18.5774 17.1993 18.5223 17.3422 18.4152C17.4851 18.3081 17.5872 18.1555 17.6316 17.9825L18.5453 14.5231C18.5938 14.3408 18.5751 14.1472 18.4926 13.9775C18.4102 13.8079 18.2695 13.6736 18.0962 13.5991L13.6999 11.7142C13.5562 11.652 13.3972 11.634 13.2433 11.6627C13.0893 11.6915 12.9475 11.7655 12.8359 11.8754Z" stroke="#326B88" strokeWidth="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                    </svg>
                                    <p className='text-[#1A335D]'>
                                        {user.personal_information.mobile}
                                    </p>
                                </div>
                                <div className={`flex gap-2`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9999 15.4284C13.8934 15.4284 15.4284 13.8934 15.4284 11.9999C15.4284 10.1063 13.8934 8.57129 11.9999 8.57129C10.1063 8.57129 8.57129 10.1063 8.57129 11.9999C8.57129 13.8934 10.1063 15.4284 11.9999 15.4284Z" stroke="#326B88" strokeWidth="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                        <path d="M15.4287 19.8579C13.7371 20.5962 11.8524 20.7687 10.0549 20.3499C8.25743 19.931 6.64313 18.9432 5.45214 17.5332C4.26114 16.1232 3.55707 14.3665 3.44464 12.5242C3.3322 10.682 3.81741 8.85269 4.82811 7.30835C5.8388 5.76401 7.32098 4.58716 9.05421 3.95282C10.7874 3.31848 12.6791 3.26053 14.4479 3.78761C16.2167 4.31469 17.7682 5.39862 18.8715 6.87821C19.9748 8.35779 20.571 10.154 20.5716 11.9997V12.8568C20.5716 13.5388 20.3007 14.1928 19.8184 14.6751C19.3362 15.1573 18.6821 15.4282 18.0001 15.4282C17.3182 15.4282 16.6641 15.1573 16.1819 14.6751C15.6996 14.1928 15.4287 13.5388 15.4287 12.8568V8.57108" stroke="#326B88" strokeWidth="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                    </svg>
                                    <p className='text-[#1A335D]'>
                                        {user.personal_information.email}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 pt-4 '>
                                    <div>
                                        <h2 className='text-lg'>Industries of Preference</h2>
                                        {
                                            user.professional_information.industries.map((industry, index) => (
                                                <div key={index}>
                                                    <p className='capitalize'>
                                                        {industry.industry}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {
                                        user.extras.transport && (
                                        <div>
                                            <h2 className='text-lg'>
                                                Transport
                                            </h2>
                                            <p className='capitalize'>
                                                {user.extras.transport}
                                            </p>
                                        </div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:px-12 px-6 pb-6'>
                            <h3 className='text-lg'>
                                About Me
                            </h3>
                            <p>
                                {user.extras.more_about_myself}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Professional Information
                        </h2>
                        <h2 className='text-lg'>
                            Current Status
                        </h2>
                        <p className='pb-4 capitalize'>
                            {user.professional_information.current_status}
                        </p>
                        <h2 className='text-lg'>
                            Working preferences
                        </h2>
                        <p className='pb-4 capitalize'>
                            {user.professional_information.work_preference}
                        </p>
                        <h2 className='text-xl pb-4 font-bold'>
                            My Industries
                        </h2>
                        {
                            user.professional_information.industries.map((industry, index) => (
                                <div key={index} className=''>
                                    <h2 className='capitalize mb-1 text-xl'>
                                        {industry.industry}
                                    </h2>
                                    <p className='mb-2'>
                                        Certificates / Licenses
                                    </p>
                                    <ul>
                                        {
                                            industry.certificates.map((certificate, index) => (
                                                <li key={index}>
                                                    <Link href={certificate.certificate} target='_blank' className='underline'>
                                                        {certificate.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col my-4 bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Work Experience
                        </h2>
                        {
                            user.work_experience.experience.map((experience, index) => (
                                <div key={index} className='flex flex-col'>
                                    <h2 className='text-xl'>{experience.rol}</h2>
                                    <h2 className='text-xl'>{experience.position}</h2>
                                    <p>{experience.company_name}</p>
                                    <p>{experience.start_date} - {experience.currently_working ? 'Current' : experience.end_date}</p>
                                    <p>{experience.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col my-4 bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Extras
                        </h2>
                        <h2 className='text-lg'>
                            Level of English
                        </h2>
                        <p className='capitalize'>
                            {user.extras.level_of_english}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Languages
                        </h2>
                        {
                            user.extras.languages.map((language, index) => (
                                <p key={index}>{language}</p>
                            ))
                        }
                         <h2 className='text-lg mt-2'>
                            Education Level
                        </h2>
                        <p className='capitalize'>
                            {user.extras.education_level}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Presentation video
                        </h2>
                        <p>
                            <Link href={user.extras.presentation_video} target='_blank' className='underline'>
                                {user.extras.presentation_video}
                            </Link>
                        </p>
                        <h2 className='text-lg mt-2'>
                            Other Credentials
                        </h2>
                        {
                            user.extras.other_credentials.map((credential, index) => (
                                <div key={index}>
                                    <p className='capitalize'>
                                        {credential.certificate}
                                    </p>
                                    <p>
                                        <Link href={credential.name} target='_blank' className='underline'>
                                            {credential.name}
                                        </Link>
                                    </p>
                                </div>
                            ))
                        }
                        <h2 className='text-lg my-2'>
                            Social Media Links
                        </h2>
                        <div className='flex gap-2 flex-wrap'>
                            {
                                user.extras.social_media_links.map((link, index) => (
                                    <div key={index}>
                                            <Link href={link.url} target='_blank' className='underline'>
                                                {renderSocialMediaIcon(link.platform)}
                                            </Link>

                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex mb-8 pb-8 justify-end flex-wrap gap-4 md:gap-6 md:mb-0 w-[80vw] md:w-[900px] mx-auto'>
                <button className='primary-btn w-fit md:w-auto px-12'>
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default MyProfile;

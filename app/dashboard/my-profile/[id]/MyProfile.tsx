'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import { getAge } from '@/lib/utils';
import { renderSocialMediaIcon } from '@/lib/utils';
import { ROUTES } from '@/app/constants';

type MyProfileProps = {
    user: TalentTypeAcf;
    userId: string;
}

const MyProfile = ({
    user,
    userId,
}:MyProfileProps) => {
    return (
        <div className='flex flex-col md:w-full'>
            <div className=''>
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
                                src={user.personal_information.profile_pic ? user.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                alt={`Profile picture of ${user.personal_information.first_name}`}
                                height={140}
                                width={140}
                                className='w-36 h-36 rounded-full border-[6px] border-white absolute -top-20 object-cover'
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
                                <p className={`${user.current_location.state && user.current_location.address_1 ? '' : 'hidden'}`}>
                                    {user.current_location.address_1}, {user.current_location.suburb}, {user.current_location.state} {user.current_location.postcode}
                                </p>
                                <p>
                                    {`DOB: ${user.personal_information.date_of_birth ? user.personal_information.date_of_birth : '-'}`}
                                </p>
                                <div className={`flex gap-2`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8359 11.8754L11.0008 13.6857C10.0438 13.1086 9.15474 12.4258 8.35047 11.6499C7.57582 10.8443 6.89306 9.95516 6.31475 8.99879L8.12332 7.16365C8.23286 7.05242 8.30683 6.91112 8.33583 6.75772C8.36484 6.60432 8.34755 6.44577 8.28618 6.30222L6.40047 1.9068C6.32597 1.73348 6.19169 1.5927 6.02208 1.5101C5.85248 1.4275 5.65885 1.40858 5.47647 1.4568L2.01875 2.37137C1.84608 2.41613 1.69371 2.51818 1.58658 2.66081C1.47946 2.80344 1.42391 2.9782 1.42904 3.15651C1.64904 7.17803 3.32114 10.983 6.13475 13.8648C9.01705 16.6793 12.8231 18.3517 16.8456 18.5714C17.0241 18.5774 17.1993 18.5223 17.3422 18.4152C17.4851 18.3081 17.5872 18.1555 17.6316 17.9825L18.5453 14.5231C18.5938 14.3408 18.5751 14.1472 18.4926 13.9775C18.4102 13.8079 18.2695 13.6736 18.0962 13.5991L13.6999 11.7142C13.5562 11.652 13.3972 11.634 13.2433 11.6627C13.0893 11.6915 12.9475 11.7655 12.8359 11.8754Z" stroke="#326B88" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square"/>
                                    </svg>
                                    <p className='text-[#1A335D]'>
                                        {user.personal_information.mobile ? user.personal_information.mobile : '-'}
                                    </p>
                                </div>
                                <div className={`flex gap-2`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9999 15.4284C13.8934 15.4284 15.4284 13.8934 15.4284 11.9999C15.4284 10.1063 13.8934 8.57129 11.9999 8.57129C10.1063 8.57129 8.57129 10.1063 8.57129 11.9999C8.57129 13.8934 10.1063 15.4284 11.9999 15.4284Z" stroke="#326B88" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square"/>
                                        <path d="M15.4287 19.8579C13.7371 20.5962 11.8524 20.7687 10.0549 20.3499C8.25743 19.931 6.64313 18.9432 5.45214 17.5332C4.26114 16.1232 3.55707 14.3665 3.44464 12.5242C3.3322 10.682 3.81741 8.85269 4.82811 7.30835C5.8388 5.76401 7.32098 4.58716 9.05421 3.95282C10.7874 3.31848 12.6791 3.26053 14.4479 3.78761C16.2167 4.31469 17.7682 5.39862 18.8715 6.87821C19.9748 8.35779 20.571 10.154 20.5716 11.9997V12.8568C20.5716 13.5388 20.3007 14.1928 19.8184 14.6751C19.3362 15.1573 18.6821 15.4282 18.0001 15.4282C17.3182 15.4282 16.6641 15.1573 16.1819 14.6751C15.6996 14.1928 15.4287 13.5388 15.4287 12.8568V8.57108" stroke="#326B88" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square"/>
                                    </svg>
                                    <p className='text-[#1A335D]'>
                                        {user.personal_information.email}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 pt-4 '>
                                    <div>
                                        <h2 className='text-lg'>Industries of Preference</h2>
                                        <p className='capitalize'>
                                            {
                                            user.professional_information.industries[0] ?
                                            user.professional_information.industries.map(industry => industry.industry).join(', ')
                                            : '-'
                                            }
                                        </p>
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
                                {user.extras.more_about_myself ? user.extras.more_about_myself : '-'}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Professional Information
                        </h2>
                        <h2 className='text-lg'>
                            Current Status:
                        </h2>
                        <p className='pb-4 capitalize'>
                            {user.professional_information.current_status}
                        </p>
                        <h2 className='text-lg'>
                            Working preferences:
                        </h2>
                        <p className='pb-4 capitalize'>
                            {user.professional_information.work_preference}
                        </p>
                        <h2 className='text-xl pb-4 font-bold'>
                            My Industries:
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {
                                user.professional_information.industries[0] && user.professional_information.industries.map((industry, index) => (
                                    <div key={index}>
                                        <h2 className='capitalize mb-1 text-xl underline'>
                                            {industry.industry}
                                        </h2>
                                        {
                                            industry.certificates
                                            ? (
                                                <div>
                                                    <p className=''>
                                                        Certificates / Licenses
                                                    </p>
                                                    <ul>
                                                        {
                                                            industry.certificates.map((certificate, index) => (
                                                                <li key={index}>
                                                                    {
                                                                        certificate.certificate
                                                                        ? <Link
                                                                            href={certificate.certificate}
                                                                            target='_blank'
                                                                            className='underline flex gap-1 items-center'
                                                                        >
                                                                            {certificate.name}
                                                                            <svg
                                                                                fill="#000000"
                                                                                viewBox="0 0 52 52"
                                                                                enableBackground="new 0 0 52 52"
                                                                                width={12}
                                                                                height={12}
                                                                            >
                                                                                <g>
                                                                                    <path d="M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17 c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9 c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z"></path>
                                                                                    <path d="M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21 C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28 c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z"></path>
                                                                                </g>
                                                                            </svg>
                                                                        </Link>
                                                                        : certificate.name
                                                                    }

                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                            : null
                                        }
                                        <p className='capitalize mt-2'>
                                            Position: {industry.position}
                                        </p>
                                        <p className='mt-2'>
                                            Preferred Salary: {industry.preferred_salary ? '$'+industry.preferred_salary : '-'}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className='flex flex-col my-4 bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Work Experience
                        </h2>
                        {
                            user.work_experience && user.work_experience.length
                            ? user.work_experience.map((experience, index) => (
                                <div key={index} className='flex flex-col'>
                                    <h2 className='text-xl'>{experience.position}</h2>
                                    <p>{experience.company_name}</p>
                                    <p>{experience.start_date} - {experience.currently_working ? 'Current' : experience.end_date}</p>
                                    <p>{experience.description}</p>
                                </div>
                            ))
                            : <div>Load your work experience <Link className='underline' href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`}>here</Link></div>
                        }
                    </div>
                    <div className='flex flex-col my-4 bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Extras:
                        </h2>
                        <h2 className='text-lg'>
                            Level of English:
                        </h2>
                        <p className='capitalize'>
                            {user.extras.level_of_english ? user.extras.level_of_english : '-'}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Languages:
                        </h2>
                        {
                            <p>{user.extras.languages.length > 0 ? user.extras.languages.join(', ') : '-'}</p>
                        }
                         <h2 className='text-lg mt-2'>
                            Education Level:
                        </h2>
                        <p className='capitalize'>
                            {user.extras.education_level ? user.extras.education_level : '-'}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Presentation video:
                        </h2>
                        <p>
                            {
                                user.extras.presentation_video ?
                                <Link href={user.extras.presentation_video} target='_blank' className='underline'>
                                    {user.extras.presentation_video}
                                </Link>
                                : '-'
                            }
                        </p>
                        <h2 className='text-lg mt-2'>
                            Other Credentials:
                        </h2>
                        {
                            user.extras.other_credentials ?
                            user.extras.other_credentials && user.extras.other_credentials.map((credential, index) => (
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
                            : '-'
                        }
                        <h2 className='text-lg my-2'>
                            Social Media Links:
                        </h2>
                        <div className='flex gap-2 flex-wrap'>
                            {
                                user.extras.social_media_links ?
                                user.extras.social_media_links && user.extras.social_media_links.map((link, index) => (
                                    <div key={index}>
                                        <Link href={link.url} target='_blank' className='underline'>
                                            {renderSocialMediaIcon(link.platform)}
                                        </Link>
                                    </div>
                                ))
                                : '-'
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-8 pb-8 md:mb-0 ml-auto mt-6'>
                <Link
                    href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`}
                    className='primary-btn '
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;

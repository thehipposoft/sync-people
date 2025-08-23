'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import { getAge, renderSocialMediaIcon, handleRenderTimeInJobs, handleDownloadQR } from '@/lib/utils';
import { ROUTES } from '@/app/constants';
import { parseISO, format } from 'date-fns';

type MyProfileProps = {
    user: TalentTypeAcf;
    userId: string;
}

const MyProfile = ({
    user,
    userId,
}:MyProfileProps) => {
    const [urlCopied, setUrlCopied] = useState<boolean>(false);

    const handleCopyLink = (url: string) => {
        navigator.clipboard.writeText(url);
        setUrlCopied(true);

        setTimeout(() => {
            setUrlCopied(false);
        }, 2000);
    }

    return (
        <div className='px-6 lg:px-16 mt-24 md:mt-0 max-w-6xl'>
            <div className={`bg-secondary text-white border-secondary p-2 rounded-xl text-xs border-2 w-fit fixed transition-all z-20 right-[5%] top-[12%] lg:top-[5%] ${urlCopied ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                Link copied to clipboard
            </div>
            <div>
                <h1 className='text-3xl font-bold text-center mb-8'>
                    Skills Portfolio
                </h1>
                <p className='text-center mb-6'>
                    Welcome to your <strong>Talent Dashboard!</strong> Here, you can manage and update your Digital Skills Portfolio.
                    You can also preview your public profile to see how others view your skills and experience.
                </p>
            </div>
            <div className='flex flex-col w-full col-span-12 lg:col-span-9 order-2 lg-order-1'>
                <div className='border rounded-2xl bg-white'>
                    <div className='relative flex flex-col'>
                        <div className='rounded-t-2xl max-h-[120px] bg-primary h-[300px] flex justify-end'>
                            <Image
                                src={'/assets/images/vectors/hero-pic.svg'} alt='Insyncx hero pic'
                                width={45}
                                height={30}
                                className='md:w-16 w-20 md:mr-12 mr-8'
                            />
                        </div>
                        <div className='relative flex flex-col justify-between md:px-12 px-6 py-6'>
                            <Image
                                src={user.personal_information.profile_pic ? user.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                alt={`Profile picture of ${user.personal_information.first_name}`}
                                height={140}
                                width={140}
                                className='w-36 h-36 rounded-full border-[6px] border-white absolute -top-20 object-cover'
                            />
                            <div className='mt-20 flex justify-between flex-col-reverse gap-6 lg:flex-row'>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-2xl pb-3'>
                                        {user.personal_information.first_name} <span className='h-bold'>{`${user.personal_information.last_name}, ${getAge(user.personal_information.date_of_birth)}`}</span>
                                    </h2>
                                    <h2 className='text-2xl font-bold'>
                                        Personal information
                                    </h2>
                                    <p>
                                        {user.working_rights.current_visa.label}
                                    </p>
                                    <p className={`${user.personal_information.current_location && user.personal_information.current_location.state && user.personal_information.current_location.address_1 ? '' : 'hidden'}`}>
                                        {user.personal_information.current_location.address_1}, {user.personal_information.current_location.suburb}, {user.personal_information.current_location.state} {user.personal_information.current_location.postcode}
                                    </p>
                                    <p>
                                        {`DOB: ${user.personal_information.date_of_birth ? format(user.personal_information.date_of_birth, 'dd/MM/yyyy') : '-'}`}
                                    </p>
                                    <div className={`flex gap-2`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8359 11.8754L11.0008 13.6857C10.0438 13.1086 9.15474 12.4258 8.35047 11.6499C7.57582 10.8443 6.89306 9.95516 6.31475 8.99879L8.12332 7.16365C8.23286 7.05242 8.30683 6.91112 8.33583 6.75772C8.36484 6.60432 8.34755 6.44577 8.28618 6.30222L6.40047 1.9068C6.32597 1.73348 6.19169 1.5927 6.02208 1.5101C5.85248 1.4275 5.65885 1.40858 5.47647 1.4568L2.01875 2.37137C1.84608 2.41613 1.69371 2.51818 1.58658 2.66081C1.47946 2.80344 1.42391 2.9782 1.42904 3.15651C1.64904 7.17803 3.32114 10.983 6.13475 13.8648C9.01705 16.6793 12.8231 18.3517 16.8456 18.5714C17.0241 18.5774 17.1993 18.5223 17.3422 18.4152C17.4851 18.3081 17.5872 18.1555 17.6316 17.9825L18.5453 14.5231C18.5938 14.3408 18.5751 14.1472 18.4926 13.9775C18.4102 13.8079 18.2695 13.6736 18.0962 13.5991L13.6999 11.7142C13.5562 11.652 13.3972 11.634 13.2433 11.6627C13.0893 11.6915 12.9475 11.7655 12.8359 11.8754Z" stroke="#326B88" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square"/>
                                        </svg>
                                        <p className='text-primary'>
                                            {user.personal_information.mobile ? user.personal_information.mobile : '-'}
                                        </p>
                                    </div>
                                    <div className={`flex gap-2`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.4284C13.8934 15.4284 15.4284 13.8934 15.4284 11.9999C15.4284 10.1063 13.8934 8.57129 11.9999 8.57129C10.1063 8.57129 8.57129 10.1063 8.57129 11.9999C8.57129 13.8934 10.1063 15.4284 11.9999 15.4284Z" stroke="#326B88" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square"/>
                                            <path d="M15.4287 19.8579C13.7371 20.5962 11.8524 20.7687 10.0549 20.3499C8.25743 19.931 6.64313 18.9432 5.45214 17.5332C4.26114 16.1232 3.55707 14.3665 3.44464 12.5242C3.3322 10.682 3.81741 8.85269 4.82811 7.30835C5.8388 5.76401 7.32098 4.58716 9.05421 3.95282C10.7874 3.31848 12.6791 3.26053 14.4479 3.78761C16.2167 4.31469 17.7682 5.39862 18.8715 6.87821C19.9748 8.35779 20.571 10.154 20.5716 11.9997V12.8568C20.5716 13.5388 20.3007 14.1928 19.8184 14.6751C19.3362 15.1573 18.6821 15.4282 18.0001 15.4282C17.3182 15.4282 16.6641 15.1573 16.1819 14.6751C15.6996 14.1928 15.4287 13.5388 15.4287 12.8568V8.57108" stroke="#326B88" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square"/>
                                        </svg>
                                        <p className='text-primary'>
                                            {user.personal_information.email}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl text-center'>Share your public profile</h3>
                                    <Image
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://insyncx.com${ROUTES.TALENTS}/${userId}&margin=30`}
                                        alt={`Profile picture of ${user.personal_information.first_name}`}
                                        width={150}
                                        height={150}
                                        className='w-36 h-36 object-cover mx-auto'
                                    />
                                    <p
                                        className='text-center cursor-pointer underline'
                                        onClick={() => handleCopyLink(`${window.location.origin}${ROUTES.TALENTS}/${userId}`)}
                                    >
                                        Copy public profile URL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:px-12 px-6 pb-6'>
                            <h3 className='text-lg'>
                                About Me
                            </h3>
                            <p>
                                {user.personal_information.about_myself ? user.personal_information.about_myself : '-'}
                            </p>
                        </div>
                        <div className='md:px-12 px-6 flex flex-col gap-3 mb-4'>
                            <h3 className='text-lg'>
                                Presentation Video
                            </h3>
                            <div>
                                {
                                    user.personal_information.presentation_video
                                    ? <div className='col-span-2 lg:col-span-1 flex flex-col items-center justify-center mb-2'>
                                        <video
                                            className='w-full lg:w-1/2 lg:mx-auto h-auto rounded-2xl'
                                            controls
                                            src={user.personal_information.presentation_video}
                                        />
                                    </div>
                                    : <div className='col-span-2 lg:col-span-1 flex flex-col items-center justify-center mb-2'>
                                        <p className=''>
                                            Why Create a "presentation" Video?
                                        </p>
                                        <Link
                                            className='text-primary underline'
                                            href={ROUTES.PRESENTATION_VIDEO}
                                            target='_blank'
                                        >
                                            Click here
                                        </Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Professional Preferences
                        </h2>
                        <h2 className='text-lg'>
                            Employment Status
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
                        <h2 className='text-2xl pb-4 font-bold'>
                            My Industries
                        </h2>
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                            {
                                user.professional_information.industries.map((industry, index) => (
                                    <div
                                        key={index}
                                        className={`pb-4 mb-3 border-2 rounded-md p-3 flex flex-col items-center`}
                                    >
                                        <h4 className='capitalize'>
                                            {
                                                industry.industry === 'other'
                                                    ? industry.other_industry
                                                    : industry.industry.replace(/_/g, ' ')
                                            }
                                        </h4>
                                        <Image
                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://insyncx.com${ROUTES.TALENTS}/${userId}?industry=${industry.industry}&margin=30`}
                                            alt={`Profile picture of ${user.personal_information.first_name}`}
                                            width={150}
                                            height={150}
                                            className='w-36 h-36 object-cover mx-auto'
                                        />
                                        <a
                                            href={`${ROUTES.TALENTS}/${userId}?industry=${industry.industry}`}
                                            target='_blank'
                                            className='primary-btn text-center'
                                        >
                                            View Portfolio
                                        </a>
                                        <span
                                            className='mt-6 mb-2 lg:mb-0 lg:mt-3 flex items-center gap-1 text-sm underline cursor-pointer'
                                            onClick={() => handleCopyLink(`${window.location.origin}${ROUTES.TALENTS}/${userId}?industry=${industry.industry}`)}
                                        >
                                            Copy Portfolio URL
                                            <svg viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={12}
                                            >
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#1C274C" strokeWidth="1.5"></path>
                                                    <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#1C274C" strokeWidth="1.5"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-between mt-1 flex-col mb-4'>
                            <h2 className='text-2xl pb-4 font-bold'>
                                Licenses or Certificates
                            </h2>
                            <div className='flex flex-col gap-1 mt-1'>
                                {
                                    user.professional_information.certificates && user.professional_information.certificates.length ? user.professional_information.certificates.map((certificate, index) => {
                                        if (certificate.keep_file_private) {
                                            return (
                                                <p key={`certificate-${index}`}>
                                                    {certificate.name}
                                                </p>
                                            )
                                        }

                                        return (
                                            <a
                                                key={`certificate-${index}`}
                                                className='underline flex gap-1 items-center w-fit'
                                                target='_blank'
                                                href={certificate.file_url}
                                            >
                                                {certificate.name}
                                                <svg
                                                    fill="currentColor"
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
                                            </a>
                                        )

                                    })
                                    : <div>No certificates added yet. You can add your certificates <Link className='underline' href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`}>here</Link></div>
                                }
                            </div>
                        </div>
                        <h2 className='text-2xl mb-4 font-bold'>
                            Key Skills
                        </h2>
                        <ul className='list-inside list-disc'>
                            {
                                user.professional_information.skills_set && user.professional_information.skills_set.length > 0
                                    ? user.professional_information.skills_set.map((skill, index) => (
                                        <li key={index} className='capitalize'>
                                            {skill.skill}
                                        </li>
                                    ))
                                    : <div>No skills added yet. You can add your skills <Link className='underline' href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`}>here</Link></div>
                            }
                        </ul>
                    </div>
                    <div className='flex flex-col my-4 bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-2xl pb-4 font-bold'>
                            Work Experience
                        </h2>
                        {
                            user.work_experience && user.work_experience.length > 0
                                ? [...user.work_experience]
                                    .sort((a, b) => parseISO(b.start_date).getTime() - parseISO(a.start_date).getTime())
                                    .map((experience, index) => {
                                        const startDate = parseISO(experience.start_date);
                                        const endDate = experience.currently_working ? new Date() : parseISO(experience.end_date);

                                        return (
                                            <div key={index} className='flex flex-col gap-2 mb-2'>
                                                <h2 className='text-xl font-bold'>
                                                    {experience.position} - <span className='text-lg'>{experience.company_name}</span> <span className='opacity-70 text-base'>({experience.industry === 'other' ? experience.other_industry : experience.industry.charAt(0).toUpperCase()+experience.industry.slice(1)})</span>
                                                </h2>
                                                <p>
                                                    {format(experience.start_date, 'dd/MM/yyyy')} - {experience.currently_working ? 'Current' : format(experience.end_date, 'dd/MM/yyyy')}
                                                    <span className='ml-1 text-sm'>
                                                        ({handleRenderTimeInJobs(startDate, endDate)})
                                                    </span>
                                                </p>
                                                <p>{experience.description}</p>
                                            </div>
                                        );
                                    })
                                : <div>Load your work experience <Link className='underline' href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`}>here</Link></div>
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
                            {user.extras.level_of_english ? user.extras.level_of_english : '-'}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Languages
                        </h2>
                        {
                            <p>{user.extras.languages.length > 0 ? user.extras.languages.join(', ') : '-'}</p>
                        }
                        <h2 className='text-lg mt-2'>
                            Education Level
                        </h2>
                        <p className='capitalize'>
                            {user.extras.education_level ? user.extras.education_level : '-'}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Do you have your own transportation
                        </h2>
                        <p className='capitalize'>
                            {user.extras.transport ? user.extras.transport : 'No'}
                        </p>
                        <h2 className='text-lg mt-2'>
                            Other Credentials
                        </h2>
                        {
                            user.extras.other_credentials ?
                            user.extras.other_credentials && user.extras.other_credentials.map((credential, index) => (
                                <div key={index}>
                                    <p className='capitalize'>
                                        {credential.certificate}
                                    </p>
                                    <Link
                                        href={credential.file_url}
                                        target='_blank'
                                        className='underline flex gap-1 items-center w-fit'
                                    >
                                        {credential.name}
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
                                </div>
                            ))
                            : '-'
                        }
                        <h2 className='text-lg my-2'>
                            Social Media Links
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
                        <h2 className='text-lg my-2'>
                            Other URLs
                        </h2>
                        <div className='flex gap-2 flex-wrap'>
                            {
                                user.extras.other_urls ?
                                user.extras.other_urls && user.extras.other_urls.map((item, index) => (
                                    <div key={index}>
                                        <Link
                                            href={item.url}
                                            target='_blank'
                                            className='underline flex gap-1 items-center'
                                        >
                                            {item.name}
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
                                    </div>
                                ))
                                : '-'
                            }
                        </div>
                    </div>
                </div>

                <div className='flex md:flex-row gap-6 md:gap-0 w-5/6 md:w-auto flex-col pb-8 md:mb-0 md:ml-auto mt-6 mx-auto md:mx-0'>
                    <button
                        className='secondary-btn md:ml-4'
                        onClick={() => handleDownloadQR(`https://insyncx.com${ROUTES.TALENTS}/${userId}`, user.personal_information.first_name, user.personal_information.last_name)}
                    >
                        Download QR Code to share
                    </button>
                    <Link
                        href={`${ROUTES.MY_PROFILE}/${userId}/update-profile`}
                        className='primary-btn '
                    >
                        Edit Skills portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;

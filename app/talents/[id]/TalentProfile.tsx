'use client';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf, IndustryType } from '@/types';
import { INDUSTRIES_BANNER, ROUTES } from '@/app/constants';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

type TalentProfileProps = {
    talentData: TalentTypeAcf;
    id: string;
};

const hideEmailDomain = (email: string) => {
	if (!email) return "";
  	return email.split("@")[0] + "@...";
};

const TalentProfile = ({
    talentData,
    id
}:TalentProfileProps) => {
    const pathname = useSearchParams();
    const industry = pathname.get('industry') || '';

    const pdfRef = useRef(null);
    const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>(talentData.professional_information.industries[0]);

    useEffect(() => {
        if (industry) {
            const selected = talentData.professional_information.industries.find((industry) => industry === industry);
            console.log(selected);
            if (selected) {
                setSelectedIndustry(selected);
            }
        }
    }, []);

    const downloadPDF = () => {
        generatePDF(pdfRef, {
            method: "save",
            filename: `Insyncx-${talentData.personal_information.first_name}-${selectedIndustry.industry}`,
            page: {
                margin: Margin.SMALL,
            },
            resolution: Resolution.HIGH,
        });
    };

    return (
        !talentData.professional_information.industries
        ? <div className='flex flex-col md:w-full'>
            <h5 className='text-center font-bold text-xl mb-4'>
                We couldn't any industry associated with this talent.
            </h5>
            <p className='text-center'>
                If this is your profile, please login to your account and <Link className='underline' href={`${ROUTES.MY_PROFILE}/${id}`}>update your profile</Link>.
            </p>
        </div>
        : <div className='flex flex-col md:w-full'>
            <div className='md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 my-8'>
                <div
                    ref={pdfRef}
                    className='border rounded-2xl bg-white'
                >
                    <div className='relative flex flex-col mx-auto md:w-[900px] bg-white'>
                        <div className='relative h-[7rem] md:h-[10rem] md:w-[900px] w-[80vw]'>
                            <Image
                                src={INDUSTRIES_BANNER[selectedIndustry.industry]}
                                alt={`Banner for ${talentData.personal_information.first_name}`}
                                width={900}
                                height={200}
                                className={`object-cover rounded-t-2xl object-center max-h-[7rem] md:max-h-[10rem] w-full`}
                            />
                        </div>
                        <div className='relative flex flex-col justify-between md:px-12 px-6 py-6'>
                            <div className='flex md:gap-4 flex-col md:flex-row relative mb-4 pb-14'>
                                <Image
                                    src={talentData.personal_information.profile_pic ? talentData.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                    alt={`Profile picture for ${talentData.personal_information.first_name}`}
                                    width={140}
                                    height={140}
                                    className='rounded-full border-[6px] border-white -top-[4rem] md:-top-[6rem] w-36 h-36 relative md:absolute object-cover'
                                />
                                <p className={`${!talentData.extras.more_about_myself ? 'hidden' : ''} relative -top-10 md:top-0 md:pl-[10rem]`}>
                                    " {talentData.extras.more_about_myself} "
                                </p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center mb-6 flex-col-reverse md:flex-row gap-4'>
                                    <h2 className='text-2xl'>
                                        {talentData.personal_information.first_name} <span className='h-bold capitalize'> - {selectedIndustry.position}</span>
                                    </h2>

                                    <select
                                        className='bg-[#f3f4f6] rounded-lg p-2 w-full md:w-[200px] text-[#1A335D] text-center ml-auto flex'
                                        onChange={(e) => {
                                            const selected = talentData.professional_information.industries.find((industry) => industry.position === e.target.value);
                                            if (selected) {
                                                setSelectedIndustry(selected);
                                            }
                                        }}
                                    >
                                        {talentData.professional_information.industries.map((industry, index) => (
                                            <option
                                                key={index}
                                                value={industry.position}
                                                onClick={() => setSelectedIndustry(industry)}
                                            >
                                                {industry.industry.toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex justify-between flex-col md:flex-row gap-3'>
                                    <div>
                                        <p className='text-[#1A335D]'>
                                            {talentData.working_rights.current_visa.label}
                                        </p>
                                        <p className='text-[#1A335D]'>
                                            {talentData.personal_information.country_of_birth}
                                        </p>
                                    </div>
                                    <div className={`${selectedIndustry.preferred_salary === '' ? 'hidden' : ''}`}>
                                        <h2 className='text-lg'>
                                            Preferred Salary
                                        </h2>
                                        <div className={`flex gap-2`}>
                                            ${selectedIndustry.preferred_salary} AUD per Hour
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between pt-4 flex-col md:flex-row gap-3'>
                                    {
                                        selectedIndustry.certificates && (
                                        <div>
                                            <h2 className='text-lg'>Licenses</h2>
                                            <p>
                                                {selectedIndustry.certificates.map(certificate => certificate.name).join(', ')}
                                            </p>
                                        </div>
                                        )
                                    }

                                    <div>
                                        <h2 className='text-lg'>
                                            Availability
                                        </h2>
                                        <div className={`flex gap-2 capitalize`}>
                                            {talentData.professional_information.work_preference ? talentData.professional_information.work_preference : '-'}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end flex-col items-end'>
                                    <h2 className='text-lg mb-2'>
                                        Contact me
                                    </h2>
                                    <div className='flex'>
                                        <Link
                                            href={`tel:${talentData.personal_information.mobile}`}
                                            className='ml-0 flex items-center gap-2 primary-btn group text-sm'
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" className="mr-2">
                                                <path d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                            {talentData.personal_information.mobile}
                                        </Link>
                                        <Link
                                            href={`mailto:${talentData.personal_information.email}`}
                                            className='flex items-center gap-2 primary-btn group text-sm mr-0 ml-0'
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" className="mr-2">
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></rect>
                                                </g>
                                            </svg>
                                            {hideEmailDomain(talentData.personal_information.email)}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        talentData.work_experience && <div className='flex flex-col my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                            <h2 className='text-xl pb-4 font-bold'>
                                Work Experience
                            </h2>
                            {
                                talentData.work_experience.map((experience, index) => (
                                    <div key={index} className='flex flex-col mb-3'>
                                        <h2 className='text-xl mb-2'>
                                            {experience.position}
                                        </h2>
                                        <p className='opacity-70'>{experience.company_name}</p>
                                        <p className='opacity-70'>{experience.start_date} - {experience.currently_working ? 'Current' : experience.end_date}</p>
                                        <p>{experience.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    <div className='flex flex-col  my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                        <h2 className='text-xl pb-4 font-bold'>
                            Extras
                        </h2>
                        <h2 className='text-lg'>
                            Level of English
                        </h2>
                        <p className='capitalize'>
                            {
                                !talentData.extras.level_of_english ? '-' : talentData.extras.level_of_english
                            }
                        </p>
                        {
                            talentData.extras.transport && (
                                <div>
                                    <h2 className='text-lg mt-2'>
                                        Own Transport
                                    </h2>
                                    <p className='capitalize'>
                                        {talentData.extras.transport}
                                    </p>
                                </div>
                            )
                        }
                        <h2 className='text-lg mt-2'>
                            Languages
                        </h2>
                        {
                            talentData.extras.languages.length === 0 ? '-' : talentData.extras.languages.join(', ')
                        }
                        <h2 className='text-lg mt-2'>
                            Education Level
                        </h2>
                        <p className='capitalize'>
                            {!talentData.extras.education_level ? '-' : talentData.extras.education_level}
                        </p>
                        <h2 className='text-lg mt-2 hidden'>
                            Presentation video
                        </h2>
                        <Link href={talentData.extras.presentation_video} target='_blank' className='underline hidden'>
                            {talentData.extras.presentation_video}
                        </Link>
                        <h2 className={`${!talentData.extras.other_credentials ? 'hidden' : ''} text-lg mt-2`}>
                            Other Credentials
                        </h2>
                        {
                            talentData.extras.other_credentials && talentData.extras.other_credentials.map((credential, index) => (
                                <div key={index}>
                                    <p className='capitalize'>
                                        {credential.certificate}
                                    </p>
                                    <p>
                                        {credential.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex pb-8 justify-end flex-wrap gap-4 md:gap-6 md:mb-0 w-[80vw] md:w-[900px] mx-auto'>
                <button
                    className='secondary-btn w-full md:w-auto px-8'
                    onClick={downloadPDF}
                >
                    Download Profile
                </button>
                <button
                    className='primary-btn w-full md:w-auto px-8 hidden'
                    onClick={downloadPDF}
                >
                    {`Connect with ${talentData.personal_information.first_name}`}
                </button>
            </div>
        </div>
    );
};

export default TalentProfile;

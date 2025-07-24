'use client';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf, IndustryType } from '@/types';
import { INDUSTRIES_BANNER, ROUTES } from '@/app/constants';
import { renderSocialMediaIcon, handleRenderTimeInJobs, isYouTubeUrl, extractYouTubeVideoId } from '@/lib/utils';
import { pdf, PDFViewer } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import TalentPDFDocument from './TalentPDFDocument';
import { format, parseISO } from 'date-fns';

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
    const queryIndustry = pathname.get('industry') || '';
    const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>(talentData.professional_information.industries[0]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (queryIndustry) {
            const selected = talentData.professional_information.industries.find((industry) => industry.industry === queryIndustry);
            if (selected) {
                setSelectedIndustry(selected);
            }
        }
    }, []);

    const generatePDF = async () => {
        const blob = await pdf(
          <TalentPDFDocument talentData={talentData} selectedIndustry={selectedIndustry} />
        ).toBlob();

        saveAs(blob, `Insyncx_${talentData.personal_information.first_name}_${talentData.personal_information.last_name}_Profile.pdf`);
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        };
    };

    return (
        !talentData.professional_information.industries
        ? <div className='flex flex-col md:w-full w-[80vw] h-[60vh] justify-center'>
            <h5 className='text-center font-bold text-xl mb-4'>
                We couldn't found any industry associated with this talent.
            </h5>
            <p className='text-center'>
                If this is your profile, please login to your account and <Link className='underline' href={`${ROUTES.MY_PROFILE}/${id}`}>update your profile</Link>.
            </p>
        </div>
        : <div className='flex flex-col md:w-full'>
            <div className='md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 my-8'>
                <div className='border rounded-2xl bg-white'>
                    <div className='relative flex flex-col mx-auto md:w-[900px] bg-white'>
                        {
                            selectedIndustry.industry === 'other' ?
                            <div className='relative bg-[#1A335D] h-[7rem] rounded-t-2xl md:h-[10rem] md:w-[900px] w-[80vw] flex justify-end'>
                                <Image src={'/assets/images/vectors/hero-pic.svg'} alt='Syncto colors' width={45} height={30} className='md:w-20 w-12 md:mr-12 mr-8'/>
                            </div>
                            :
                            <div className='relative h-[7rem] md:h-[10rem] md:w-[900px] w-[80vw]'>
                                <Image
                                    src={INDUSTRIES_BANNER[selectedIndustry.industry]}
                                    alt={`Banner for ${talentData.personal_information.first_name}`}
                                    width={900}
                                    height={200}
                                    className={`object-cover rounded-t-2xl object-center max-h-[7rem] md:max-h-[10rem] w-full`}
                                />
                            </div>
                        }

                        <div className='relative flex flex-col justify-between md:px-12 px-6 py-6'>
                            <div className='flex md:gap-4 flex-col md:flex-row relative mb-0 lg:mb-4 pb-0 md:pb-14'>
                                <Image
                                    src={talentData.personal_information.profile_pic ? talentData.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                    alt={`Profile picture for ${talentData.personal_information.first_name}`}
                                    width={140}
                                    height={140}
                                    className='rounded-full border-[6px] border-white -top-[4rem] md:-top-[6rem] w-36 h-36 relative md:absolute object-cover left-[50%] transform -translate-x-1/2 lg:left-0 lg:translate-x-0'
                                />
                                <p className={`${!talentData.personal_information.about_myself ? 'hidden' : ''} relative -top-10 md:top-0 md:pl-[10rem]`}>
                                    " {talentData.personal_information.about_myself} "
                                </p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center mb-3 flex-col-reverse md:flex-row gap-4'>
                                    <h4 className='text-2xl mt-4 lg:mt-0'>
                                        {talentData.personal_information.first_name} {talentData.personal_information.last_name} <span className='h-bold capitalize'> - {talentData.personal_information.country_of_birth}</span>
                                    </h4>
                                    {
                                        !queryIndustry && (
                                            <select
                                                className='bg-[#f3f4f6] rounded-lg p-2 w-full md:w-[200px] text-[#1A335D] text-center ml-auto flex'
                                                onChange={(e) => {
                                                    const selected = talentData.professional_information.industries.find((industry) => industry.industry === e.target.value);
                                                    if (selected) {
                                                        setSelectedIndustry(selected);
                                                    }
                                                }}
                                            >
                                                {talentData.professional_information.industries.map((industry, index) => (
                                                    <option
                                                        key={index}
                                                        value={industry.industry}
                                                    >
                                                        {industry.industry === 'other' ? industry.other_industry?.toUpperCase() : industry.industry.replace(/_/g, ' ').toUpperCase()}
                                                    </option>
                                                ))}
                                            </select>
                                        )
                                    }
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='order-2 md:order-1'>
                                        <div className='flex justify-between flex-col mb-5'>
                                            <h4 className='text-lg'>
                                                Current Location
                                            </h4>
                                            <p className='text-[#1A335D]'>
                                                    {talentData.personal_information.current_location.state && talentData.personal_information.current_location.suburb
                                                    ? `${talentData.personal_information.current_location.suburb}, ${talentData.personal_information.current_location.state}`
                                                    : `-`
                                                }
                                            </p>
                                        </div>

                                        <div className='flex flex-col mb-5'>
                                            <h4 className='text-lg'>
                                                Work Preference
                                            </h4>
                                            <p className={`capitalize`}>
                                                {talentData.professional_information.work_preference ? talentData.professional_information.work_preference : '-'}
                                            </p>
                                        </div>
                                        <div className='flex justify-between mt-1 flex-col'>
                                            <h4 className='text-lg'>
                                                Licenses or Certificates
                                            </h4>
                                            {
                                                selectedIndustry.certificates?.length > 0
                                                ? <p>
                                                    {selectedIndustry.certificates.map(certificate => certificate.name).join(', ')}
                                                </p>
                                                : '-'
                                            }
                                        </div>

                                        <div className='flex flex-col justify-between mt-8 flex-wrap '>
                                            <div className='flex flex-col'>
                                                <h4 className='text-lg mb-2'>
                                                    Contact me
                                                </h4>
                                                <div className='flex gap-4 md:gap-0 flex-wrap'>

                                                    <Link
                                                        href={`tel:${talentData.personal_information.mobile}`}
                                                        className={`${talentData.personal_information.mobile === '' ? 'hidden' : ''} ml-0 flex items-center gap-2 primary-btn group text-sm`}
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
                                    {
                                        talentData.personal_information.presentation_video && (
                                            <div className='flex flex-col order-1 md:order-2'>
                                                <h4 className='text-lg mb-2 block md:hidden'>
                                                    Presentation Video
                                                </h4>
                                                <div className='relative'>
                                                    <video
                                                        ref={videoRef}
                                                        controls
                                                        className='w-full h-auto rounded-3xl'
                                                        src={talentData.personal_information.presentation_video}
                                                    />
                                                    <div className={`${isPlaying ? '-z-10 !opacity-0 ' : ''} opacity-100 absolute inset-0 flex items-center justify-center`}>
                                                        <button
                                                            onClick={handlePlay}
                                                            className={`group cursor-pointer text-xl w-full h-full bg-primary-text hover:bg-[#c2bfbf] border-2 border-primary-text duration-500 flex gap-4 items-center text-white hover:text-primary-text rounded-3xl flex-col justify-center`}
                                                        >
                                                            {`Play video`}
                                                            <div className='p-2 bg-white w-fit rounded-full border-white border-2 group-hover:bg-white group-hover:border-primary-text transition-all duration-500'>
                                                                <svg viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={26}
                                                                    height={26}
                                                                >
                                                                    <g id="SVGRepo_iconCarrier">
                                                                        <path
                                                                            className='fill-primary-text transition-all duration-500'
                                                                            d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#fff">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>

                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        talentData.work_experience && <div className='flex flex-col my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                            <h4 className='text-xl pb-4 font-bold'>
                                Work Experience
                            </h4>
                            {
                            [...talentData.work_experience]
                                .sort((a, b) => parseISO(b.start_date).getTime() - parseISO(a.start_date).getTime())
                                .map((experience, index) => {
                                    const startDate = parseISO(experience.start_date);
                                    const endDate = experience.currently_working ? new Date() : parseISO(experience.end_date);

                                    return (
                                        <div key={index} className='flex flex-col gap-2 mb-2'>
                                            <h2 className='text-xl font-bold'>
                                                {experience.position} - <span className='text-lg'>{experience.company_name}</span>
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
                            }
                        </div>
                    }

                    <div className='flex flex-col my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                        <h4 className={`${talentData.professional_information.skills_set.length > 0 ? '' : 'hidden'} text-xl pb-4 font-bold`}>
                            Key Skills:
                        </h4>
                        <ul className='list-inside list-disc pb-4'>
                            {
                                talentData.professional_information.skills_set && talentData.professional_information.skills_set.length > 0
                                    ? talentData.professional_information.skills_set.map((skill, index) => (
                                        <li key={index} className='capitalize'>
                                            {skill.skill}
                                        </li>
                                    ))
                                    : null
                            }
                        </ul>
                        <h4 className='text-xl pb-4 font-bold'>
                            Extras
                        </h4>
                        <h4 className='text-lg'>
                            Level of English
                        </h4>
                        <p className='capitalize'>
                            {
                                !talentData.extras.level_of_english ? '-' : talentData.extras.level_of_english
                            }
                        </p>
                        {
                            talentData.extras.transport && (
                                <div>
                                    <h4 className='text-lg mt-2'>
                                        Own Transport
                                    </h4>
                                    <p className='capitalize'>
                                        {talentData.extras.transport}
                                    </p>
                                </div>
                            )
                        }
                        <h4 className='text-lg mt-2'>
                            Languages
                        </h4>
                        {
                            talentData.extras.languages.length === 0 ? '-' : talentData.extras.languages.join(', ')
                        }
                        <h4 className='text-lg mt-3'>
                            Education Level
                        </h4>
                        <p className='capitalize mb-3'>
                            {!talentData.extras.education_level ? '-' : talentData.extras.education_level}
                        </p>
                        <h4 className={`${!talentData.extras.other_credentials ? 'hidden' : ''} text-lg mt-2`}>
                            Other Credentials
                        </h4>
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
                        <h4 className='text-lg my-2'>
                            Other URLs
                        </h4>
                        <div className='flex gap-2 flex-wrap'>
                            {
                                talentData.extras.other_urls ?
                                talentData.extras.other_urls && talentData.extras.other_urls.map((item, index) => (
                                    <div key={index}>
                                        <Link href={item.url} target='_blank' rel='noreferrer' className='hover:underline'>{item.name}</Link>
                                    </div>
                                ))
                                : '-'
                            }
                        </div>
                        <h4 className='text-lg my-2'>
                            Social Media Links
                        </h4>
                        <div className='flex gap-3 flex-wrap mb-3'>
                            {
                                talentData.extras.social_media_links ?
                                talentData.extras.social_media_links && talentData.extras.social_media_links.map((link, index) => (
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
            <div className='flex pb-8 justify-end flex-wrap gap-4 md:gap-6 md:mb-0 w-[80vw] md:w-[900px] mx-auto'>
                <button
                    className='secondary-btn w-full md:w-auto px-8'
                    onClick={generatePDF}
                >
                    Download Profile
                </button>
            </div>
{/*             <div className='min-h-screen'>
                <PDFViewer>
                    <TalentPDFDocument talentData={talentData} selectedIndustry={selectedIndustry} />
                </PDFViewer>
            </div> */}
        </div>
    );
};

export default TalentProfile;

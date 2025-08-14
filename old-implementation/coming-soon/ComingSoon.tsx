'use client';
import { useState } from "react";
import Image from "next/image";
import { Link } from 'next-view-transitions';
import { ROUTES } from "@/app/constants";
import Modal from "@/components/Modal";

type FormValues = {
    email: string;
    first_name: string;
    last_name: string;
    phone_number?: string;
    industry: 'cleaning' | 'construction' | 'hospitality' | 'warehousing' | 'other';
    lookingFor: 'talents' | 'job';
    company_name?: string;
};

export default function ComingSoon () {
    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        industry: 'cleaning',
        lookingFor: 'job',
        company_name: '',
    });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
    const [isApiLoading, setIsApiLoading] = useState<boolean>(false);

    const renderMessageByCategory = (category: string) => {
        switch (category) {
            case 'cleaning':
                return (
                    <p className="text-center">
                        In the meantime, check our <Link className="underline" href={ROUTES.CATEGORIES_CLEANING}>Cleaning category page</Link> to get more insights about the industry.
                    </p>
                );
            case 'construction':
                return (
                    <p className="text-center">
                        In the meantime, check our <Link className="underline" href={ROUTES.CATEGORIES_CONSTRUCTION}>Construction category page</Link> to get more insights about the industry.
                    </p>
                );
            case 'hospitality':
                return (
                    <p className="text-center">
                        In the meantime, check our <Link className="underline" href={ROUTES.CATEGORIES_HOSPITALITY}>Hospitality category page</Link> to get more insights about the industry.
                    </p>
                );
            case 'warehousing':
                return (
                    <p className="text-center">
                        In the meantime, check our <Link className="underline" href={ROUTES.CATEGORIES_WAREHOUSING}>Warehousing category page</Link> to get more insights about the industry.
                    </p>
                );
            default:
                return (
                    <p className="text-center">
                        In the meantime, check our <Link className="underline" href={ROUTES.BLOG}>Blog</Link> to get more insights about the industry.
                    </p>
                );
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');
        setIsApiLoading(true);

        /*
        const apiResponse = formValues.lookingFor === 'job' ? await createTalent(formValues) : await createClient(formValues);

        if (apiResponse.status === 200) {
            setIsApiLoading(false);
            setOpenSuccessModal(true);
            setFormValues({
                email: '',
                first_name: '',
                last_name: '',
                phone_number: '',
                industry: 'cleaning',
                lookingFor: 'job'
            });
        } else {
            setIsApiLoading(false);
            setErrorMessage(apiResponse.message);
        }*/
    };

    return (
        <div className="my-12 lg:my-4 flex flex-col lg:flex-row lg:min-h-screen lg:justify-center lg:gap-6 lg:px-0 w-full">
            <div className="md:w-1/2 w-full flex pt-8 relative">
                <div className="md:w-[650px]">
                    <h2 className="text-[40px] h-bold">
                        Coming Soon!
                    </h2>
                    <h2 className="text-[40px] h-bold mb-4">
                        Be Part of Insyncx Now
                    </h2>
                    <p className="text-primary w-5/6 text-sm">
                        Exciting things are on the way! Want to be among the first to experience Insyncx?<br/>
                        Sign up now for early access, exclusive updates, and a chance to be ahead of the curve when we launch.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="pt-6">
                            <label className="">Looking for:</label>
                            <div className="flex gap-4 pt-2">
                                <div className={`flex gap-4 border rounded-3xl cursor-pointer py-2 px-3 transition-all border-secondary ${formValues.lookingFor === 'job' ? 'bg-secondary text-white' : ''} `}>
                                    <input
                                        type="radio"
                                        id="job"
                                        name="lookingFor"
                                        value={formValues.lookingFor}
                                        className="hidden"
                                        onChange={() => setFormValues({...formValues, lookingFor: 'job'})}
                                    />
                                    <label
                                        htmlFor="job"
                                        className={`cursor-pointer px-6 ${formValues.lookingFor === 'job' ? 'text-white' : ''}`}
                                    >
                                        Job
                                    </label>
                                </div>
                                <div className={`flex gap-4 border rounded-3xl cursor-pointer py-2 px-3 transition-all border-secondary ${formValues.lookingFor === 'talents' ? 'bg-secondary text-white' : ''} `}>
                                    <input
                                        type="radio"
                                        id="talents"
                                        name="lookingFor"
                                        value={formValues.lookingFor}
                                        className="hidden"
                                        onChange={() => setFormValues({...formValues, lookingFor: 'talents'})}
                                    />
                                    <label
                                        htmlFor="talents"
                                        className={`cursor-pointer px-6 ${formValues.lookingFor === 'talents' ? 'text-white' : ''}`}
                                    >
                                        Talents
                                    </label>

                                </div>
                            </div>
                        </div>
                        {
                            formValues.lookingFor === 'talents' && (
                                <div className="mt-3 flex flex-col">
                                    <label
                                        htmlFor="company_name"
                                    >
                                        Company Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="company_name"
                                        className="border rounded-3xl py-1 px-5 w-3/4 mt-1"
                                        placeholder="Enter your company name"
                                        required
                                        value={formValues.company_name}
                                        onChange={(e) => setFormValues({...formValues, company_name: e.target.value})}
                                    />
                                </div>
                            )
                        }
                        <div className="mt-3 flex flex-col">
                            <label
                                htmlFor="email"
                            >
                                Email Address*
                            </label>
                            <input
                                type="email"
                                className="border rounded-3xl py-1 px-5 w-3/4 mt-1"
                                placeholder="Enter your email"
                                name="email"
                                required
                                value={formValues.email}
                                onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                            />
                        </div>
                        <div className="mt-3 flex flex-col">
                            <label
                                htmlFor="name"
                            >
                                First name*
                            </label>
                            <input
                                name="first_name"
                                className="border rounded-3xl py-1 px-5 mt-1 w-3/4"
                                placeholder="Enter your name"
                                required
                                value={formValues.first_name}
                                onChange={(e) => setFormValues({...formValues, first_name: e.target.value})}
                            />
                        </div>
                        <div className="mt-3 flex flex-col">
                            <label
                                htmlFor="last_name"
                            >
                                Last name*
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                className="border rounded-3xl py-1 px-5 mt-1 w-3/4"
                                placeholder="Enter your last name"
                                required
                                value={formValues.last_name}
                                onChange={(e) => setFormValues({...formValues, last_name: e.target.value})}
                            />
                        </div>
                        <div className="mt-3 flex flex-col">
                            <label
                                htmlFor="phone_number"
                            >
                                Phone number (optional)
                            </label>
                            <input
                                type="text"
                                name="phone_number"
                                className="border rounded-3xl py-1 px-5 mt-1 w-3/4"
                                placeholder="Enter your phone number"
                                value={formValues.phone_number}
                                onChange={(e) => setFormValues({...formValues, phone_number: e.target.value})}
                            />
                        </div>
                        <div className="mt-3 flex flex-col">
                            <label
                                htmlFor="industry"
                            >
                                Industry of interest*
                            </label>
                            <select
                                id="industry"
                                name="industry"
                                className="mt-1 w-3/4"
                                required
                                value={formValues.industry}
                                onChange={(e) => setFormValues({...formValues, industry: e.target.value as FormValues['industry']})}
                            >
                                <option value="cleaning">Cleaning</option>
                                <option value="construction">Construction</option>
                                <option value="hospitality">Hospitality</option>
                                <option value="warehousing">Warehousing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {
                            errorMessage && <p className="text-red-500 mt-3 bg-red-200 border border-red-500 p-4 rounded-md">
                                {errorMessage}
                            </p>
                        }

                        <div className="flex lg:gap-3 gap-5 flex-wrap lg:mt-6 mt-8">
                            <button
                                className="primary-btn mx-0 w-fit lg:w-auto px-8"
                                type="submit"
                                disabled={isApiLoading}
                            >
                                Notify Me!
                            </button>
                            <Link
                                href={ROUTES.HOME}
                                className="secondary-btn w-fit lg:w-auto px-8"
                            >
                                No thanks, I'll wait
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 p-4 bg-[#AFB3FF] lg:w-1/2 h-fit w-full mt-8 lg:mt-0">
                <div className="relative w-[200px] h-[33vh] m-auto">
                    <Image src={'/assets/images/coming-soon/hero-pic.png'} alt='Coming soon' fill className="object-contain" />
                </div>
                <div className="relative w-[200px] h-[33vh] m-auto">
                    <Image src={'/assets/images/coming-soon/hero-pic-1.png'} alt='Coming soon' fill className="object-contain" />
                </div>
                <div className="relative w-[200px] h-[33vh] m-auto">
                    <Image src={'/assets/images/coming-soon/hero-pic-2.png'} alt='Coming soon' fill className="object-contain" />
                </div>
                <div className="relative w-[200px] h-[33vh] m-auto">
                    <Image src={'/assets/images/coming-soon/hero-pic-3.png'} alt='Coming soon' fill className="object-contain" />
                </div>
                <div className="relative w-[200px] h-[33vh] m-auto">
                    <Image src={'/assets/images/coming-soon/hero-pic-4.png'} alt='Coming soon' fill className="object-contain" />
                </div>
                <div className="relative w-[200px] h-[33vh] m-auto">
                    <Image src={'/assets/images/coming-soon/hero-pic-5.png'} alt='Coming soon' fill className="object-contain" />
                </div>
            </div>
            <div className='flex lg:hidden pt-10 md:flex-row gap-10 md:gap-0 items-center justify-center'>
                <Link
                    href={'https://www.instagram.com/insyncx.au/'}
                    target='_blank'
                    className='md:mr-2'
                >
                    <svg width={40} height={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#1A335D">
                            </path>
                            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#1A335D"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#1A335D">
                            </path>
                        </g>
                    </svg>
                </Link>
                <Link target='_blank' href={'https://www.facebook.com/profile.php?id=61561044445028'} className='md:mx-2'>
                    <Image src={'/assets/images/vectors/facebook.svg'} alt='icon' width={40} height={40}  />
                </Link>
                <Link target='_blank' href={'https://www.linkedin.com/company/insyncx/about/'} className='md:mx-2'>
                    <Image src={'/assets/images/vectors/linkedin.svg'} alt='icon' width={40} height={40} />
                </Link>
            </div>
            <Modal
                isOpen={openSuccessModal}
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-3xl font-bold">Thank you!</h2>
                    <p className="text-center">
                        We have received your request and will keep you updated on our progress.
                    </p>
                    {renderMessageByCategory(formValues.industry)}
                    <button
                        className="primary-btn"
                        onClick={() => setOpenSuccessModal(false)}
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}

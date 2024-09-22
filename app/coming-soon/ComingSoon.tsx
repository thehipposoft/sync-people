'use client';
import { useState } from "react";
import Image from "next/image";
import { sendComingSoonEmail } from "@/lib/api";
import Link from "next/link";
import { ROUTES } from "../constants";
import Modal from "@/components/Modal";

type FormValues = {
    email: string;
    name: string;
    industry: string;
    lookingFor: string;
};

export default function ComingSoon () {
    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        name: '',
        industry: 'Cleaning',
        lookingFor: 'job'
    });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
    const [isApiLoading, setIsApiLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');
        setIsApiLoading(true);

        const response = await sendComingSoonEmail(formValues);

        if (response.status === 500) {
            setIsApiLoading(false);
            setErrorMessage(response.message)
        } else {
            setIsApiLoading(false);
            setOpenSuccessModal(true);
            setFormValues({
                email: '',
                name: '',
                industry: 'Cleaning',
                lookingFor: 'job'
            });
        }
    };

    return (
        <div className="my-20 flex flex-col lg:flex-row lg:min-h-screen lg:justify-center lg:gap-6 px-6 lg:px-0">
            <div className="md:w-2/3 w-full md:pr-20">
                <h2 className="text-3xl p-bold">
                    Coming Soon!
                </h2>
                <h2 className="text-3xl p-bold mb-4">
                    Be Part of Insyncx Now
                </h2>
                <p>
                    Exciting things are on the way! Want to be among the first to experience Insyncx?
                    Sign up now for early access, exclusive updates, and a chance to be ahead of the curve when we launch.
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className="mb-2 mt-6">Looking for:</p>
                        <div className="flex gap-4">
                            <div className={`flex gap-4 border rounded-3xl cursor-pointer py-2 px-3 transition-all border-purple ${formValues.lookingFor === 'job' ? 'bg-purple text-white' : ''} `}>
                                <input
                                    type="radio"
                                    id="job"
                                    name="lookingFor"
                                    value="job"
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
                            <div className={`flex gap-4 border rounded-3xl cursor-pointer py-2 px-3 transition-all border-purple ${formValues.lookingFor === 'talents' ? 'bg-purple text-white' : ''} `}>
                                <input
                                    type="radio"
                                    id="talents"
                                    name="lookingFor"
                                    value="talents"
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
                    <div className="mt-3">
                        <label
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="border rounded-3xl py-1 px-5 w-full mt-1"
                            placeholder="Enter your email"
                            typeof="email"
                            name="email"
                            required
                            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="name"
                        >
                            Your name
                        </label>
                        <input
                            type="Name"
                            name="name"
                            className="border rounded-3xl py-1 px-5 mt-1 w-full"
                            placeholder="Enter your name"
                            required
                            onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="industry"
                        >
                            Industry of interest
                        </label>
                        <select
                            id="industry"
                            name="industry"
                            className="mt-1"
                            required
                            onChange={(e) => setFormValues({...formValues, industry: e.target.value})}
                        >
                            <option value="Cleaning">Cleaning</option>
                            <option value="Construction">Construction</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Warehousing">Warehousing</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {
                        errorMessage && <p className="text-red-500 mt-3 bg-red-200 border border-red-500 p-4 rounded-md">
                            {errorMessage}
                        </p>
                    }

                    <div className="flex lg:gap-3 gap-5 justify-center flex-wrap lg:mt-5 mt-8">
                        <button
                            className="primary-btn w-fit lg:w-auto"
                            type="submit"
                            disabled={isApiLoading}
                        >
                            Notify Me!
                        </button>
                        <Link
                            href={ROUTES.HOME}
                            className="secondary-btn w-fit lg:w-auto"
                        >
                            No thanks, I'll wait
                        </Link>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-2 p-4 bg-[#AFB3FF] lg:w-1/3 h-fit w-full mt-8 lg:mt-0">
                <Image src={'/assets/images/coming-soon/hero-pic.png'} alt='Coming soon' width={150} height={150} className="m-auto" />
                <Image src={'/assets/images/coming-soon/hero-pic-1.png'} alt='Coming soon' width={150} height={150} className="m-auto" />
                <Image src={'/assets/images/coming-soon/hero-pic-2.png'} alt='Coming soon' width={150} height={150} className="m-auto" />
                <Image src={'/assets/images/coming-soon/hero-pic-3.png'} alt='Coming soon' width={150} height={150} className="m-auto" />
                <Image src={'/assets/images/coming-soon/hero-pic-4.png'} alt='Coming soon' width={150} height={150} className="m-auto" />
                <Image src={'/assets/images/coming-soon/hero-pic-5.png'} alt='Coming soon' width={150} height={150} className="m-auto" />
            </div>
            <Modal
                isOpen={openSuccessModal}
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-3xl font-bold">Thank you!</h2>
                    <p className="text-center">
                        We have received your request and will keep you updated on our progress.
                    </p>
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

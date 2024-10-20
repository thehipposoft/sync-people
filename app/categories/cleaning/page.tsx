import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Insyncx | Cleaning",
    description: "Connecting talents with opportunities in the cleaning industry",
};

export default function CleaningPage() {
    return (
        <PublicLayout>
            <div className="my-20 flex flex-col md:flex-row gap-16 max-w-[80vw] md:max-w-none">
                <div>
                    <h1 className="md:text-5xl mb-10">
                        Why Choose a Career in Cleaning Services?
                    </h1>

                    <h2 className="text-lg h-bold">
                        Essential Industry in Australia
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        The cleaning industry in Australia is essential to maintaining hygiene
                        and safety across various sectors, including healthcare, hospitality,
                        and commercial spaces. This industry offers stable employment and
                        a wide range of job opportunities.
                    </p>

                    <h2 className="text-lg h-bold">
                        High-Demand Areas
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Major cities such as Sydney, Melbourne, and Perth have a high demand
                        for cleaning professionals in commercial, residential, and industrial settings.
                        With the increasing focus on hygiene standards, the need for skilled
                        cleaners continues to rise.
                    </p>

                    <h2 className="text-lg h-bold">
                        Qualifications and Skills Needed
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                    While many cleaning roles provide on-the-job training, having
                                    experience in specialized cleaning methods, such as carpet cleaning or
                                    industrial cleaning, can be an advantage. Attention to detail, time management,
                                    and reliability are key skills in this industry.
                    </p>

                    <h2 className="text-lg h-bold">
                        Flexibility and Work-Life Balance
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                    The cleaning industry often offers flexible working hours, including part-time
                                    and shift work, making it ideal for those seeking work-life balance.
                                    This flexibility can also provide opportunities for supplementary income.
                    </p>

                    <h2 className="text-lg h-bold">
                        Impactful Work
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Working in the cleaning industry allows you to make a tangible difference
                        in creating safe and healthy environments. Your work directly contributes
                        to the well-being of individuals and communities.
                    </p>

                    <h2 className="text-lg h-bold">
                        Endless Opportunities
                    </h2>
                    <p className="mt-2 text-[#798196]">
                        Whether you're looking for a steady job or seeking to develop specialized skills,
                        the cleaning industry in Australia offers a range of opportunities for growth
                        and career advancement.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="relative w-[340px] md:w-[490px] h-[400px] md:h-[520px]">
                        <Image src={'/assets/images/categories/cat-4.webp'} alt="" fill  className="object-cover md:rounded-tl-[300px] rounded-tl-[200px] md:rounded-br-[300px] rounded-br-[200px]"/>
                    </div>
                    <div className="relative flex flex-col md:flex-row md:h-[520px] gap-6 md:gap-0">
                        <div className="hidden md:block relative w-[285px] h-[280px]">
                            <Image src={'/assets/images/categories/cleaning.webp'} alt="" fill className="rounded-full rounded-bl-none object-cover " />
                        </div>
                        <div className="md:absolute relative md:w-[285px] w-[240px] md:h-[280px] h-[240px] right-0 rounded-full rounded-tr-none flex items-end bg-[#FF8149] self-end">
                            <div className='relative left-12 md:left-16 bottom-12'>
                                <svg width="35" height="55" viewBox="0 0 35 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 55H5L0 17.5H35L30 55ZM29.25 22.5H5.6875L9.375 50H25.625L29.25 22.5ZM17.5 37.5C19.5833 37.5 21.3542 36.7708 22.8125 35.3125C24.2708 33.8542 25 32.0833 25 30V25H20V30C20 30.7083 19.7608 31.3017 19.2825 31.78C18.8025 32.26 18.2083 32.5 17.5 32.5C16.7917 32.5 16.1983 32.26 15.72 31.78C15.24 31.3017 15 30.7083 15 30V25H10V30C10 32.0833 10.7292 33.8542 12.1875 35.3125C13.6458 36.7708 15.4167 37.5 17.5 37.5ZM25 15C23.9583 15 23.0733 14.635 22.345 13.905C21.615 13.1767 21.25 12.2917 21.25 11.25C21.25 10.2083 21.615 9.32333 22.345 8.595C23.0733 7.865 23.9583 7.5 25 7.5C26.0417 7.5 26.9267 7.865 27.655 8.595C28.385 9.32333 28.75 10.2083 28.75 11.25C28.75 12.2917 28.385 13.1767 27.655 13.905C26.9267 14.635 26.0417 15 25 15ZM12.5 12.5C10.75 12.5 9.27083 11.8958 8.0625 10.6875C6.85417 9.47917 6.25 8 6.25 6.25C6.25 4.5 6.85417 3.02083 8.0625 1.8125C9.27083 0.604167 10.75 0 12.5 0C14.25 0 15.7292 0.604167 16.9375 1.8125C18.1458 3.02083 18.75 4.5 18.75 6.25C18.75 8 18.1458 9.47917 16.9375 10.6875C15.7292 11.8958 14.25 12.5 12.5 12.5Z" fill="white"/>
                                </svg>
                                <p className='text-white font-semibold text-xl pt-2'>Cleaning services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

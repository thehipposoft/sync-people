import { Metadata } from "next";
import Image from "next/image";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
  title: "Insyncx | Construction",
  description: "Connecting talents with opportunities in the construction industry",
};

export default function ConstructionPage() {
    return (
        <PublicLayout>
            <div className="my-20 flex flex-col md:flex-row gap-16 max-w-[80vw] md:max-w-none">
                <div>
                    <h1 className="md:text-5xl mb-10 tracking-tight md:tracking-normal">
                        Why Choose a Career in Construction?
                    </h1>

                    <h2 className="text-lg h-bold">
                        Booming Industry in Australia
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        The construction industry in Australia is booming, with ongoing projects
                        in infrastructure, commercial development, and residential housing.
                        This sector offers robust job opportunities and plays a vital role
                        in the country's economic growth.
                    </p>

                    <h2 className="text-lg h-bold">
                        High-Demand Regions
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Skilled tradespeople, including carpenters, electricians, and plumbers,
                        are in high demand across Australia. Additionally, roles such as project
                        managers, site supervisors, and laborers offer diverse career paths
                        within the industry.
                    </p>

                    <h2 className="text-lg h-bold">
                        Qualifications and Skills Needed
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Many construction roles require specific qualifications, such as a
                        White Card for safety training, trade certifications, or apprenticeships.
                        Strong problem-solving skills, physical fitness, and attention to detail
                        are essential for success in this field.
                    </p>

                    <h2 className="text-lg h-bold">
                        Job Security and Growth
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        The construction industry provides excellent job security due to continuous
                        demand and the essential nature of the work. With opportunities for
                        career advancement, including supervisory and managerial roles,
                        construction offers long-term growth potential.
                    </p>

                    <h2 className="text-lg h-bold">
                        Collaboration and Teamwork
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Construction projects often require strong collaboration and teamwork,
                        allowing you to work alongside professionals from various disciplines.
                        This environment fosters a sense of accomplishment and community.
                    </p>

                    <h2 className="text-lg h-bold">
                        Endless Opportunities
                    </h2>
                    <p className="mt-2 text-[#798196]">
                        Whether you're just starting out or seeking to advance your career,
                        the construction industry in Australia provides endless opportunities
                        for skilled and motivated individuals.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="relative w-[240px] md:w-[490px] h-[300px] md:h-[520px]">
                        <Image src={'/assets/images/categories/construction-1.webp'} alt="" fill  className="object-cover md:rounded-tl-[300px] rounded-tl-[120px] md:rounded-br-[300px] rounded-br-[120px]"/>
                    </div>
                    <div className="relative flex flex-col md:flex-row md:h-[520px] gap-6 md:gap-0">
                        <div className="hidden md:block relative w-[285px] h-[280px]">
                            <Image src={'/assets/images/categories/construction-2.webp'} alt="" fill className="rounded-full rounded-bl-none object-cover" />
                        </div>
                        <div className="md:absolute relative md:w-[285px] w-[240px] md:h-[280px] h-[240px] right-0 rounded-full rounded-tr-none flex items-end bg-[#7052E5] self-end">
                            <div className='relative left-16 bottom-12'>
                                <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.375 0C8.62908 0 7.91371 0.296316 7.38626 0.823762C6.85882 1.35121 6.5625 2.06658 6.5625 2.8125H2.8125C2.06658 2.8125 1.35121 3.10882 0.823762 3.63626C0.296316 4.16371 0 4.87908 0 5.625V26.25C0 26.9959 0.296316 27.7113 0.823762 28.2387C1.35121 28.7662 2.06658 29.0625 2.8125 29.0625H6.5625V45H10.3125V29.0625H40.3125V45H44.0625V29.0625H47.8125C48.5584 29.0625 49.2738 28.7662 49.8012 28.2387C50.3287 27.7113 50.625 26.9959 50.625 26.25V5.625C50.625 4.87908 50.3287 4.16371 49.8012 3.63626C49.2738 3.10882 48.5584 2.8125 47.8125 2.8125H44.0625C44.0625 2.06658 43.7662 1.35121 43.2387 0.823762C42.7113 0.296316 41.9959 0 41.25 0C40.5041 0 39.7887 0.296316 39.2613 0.823762C38.7338 1.35121 38.4375 2.06658 38.4375 2.8125H12.1875C12.1875 2.06658 11.8912 1.35121 11.3637 0.823762C10.8363 0.296316 10.1209 0 9.375 0ZM1.875 11.2031L8.39062 4.6875H17.8594L1.875 20.6719V11.2031ZM4.64062 27.1875L27.1406 4.6875H36.6094L14.1094 27.1875H4.64062ZM45.8906 4.6875H47.8125C48.0611 4.6875 48.2996 4.78627 48.4754 4.96209C48.6512 5.1379 48.75 5.37636 48.75 5.625V11.2969L32.8594 27.1875H23.3906L45.8906 4.6875ZM48.75 20.5781V26.25C48.75 26.4986 48.6512 26.7371 48.4754 26.9129C48.2996 27.0887 48.0611 27.1875 47.8125 27.1875H42.1406L48.75 20.5781Z" fill="white"/>
                                </svg>
                                <p className='text-white font-semibold text-xl pt-2'>Construction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}



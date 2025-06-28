import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insyncx | Tourism",
  description: "Connecting talents with opportunities in the tourism industry",
};

export default function TourismPage() {
    return (
        <PublicLayout>
            <div className="my-20 flex flex-col md:flex-row gap-16 max-w-[80vw] md:max-w-none">
                <div>
                    <h1 className="md:text-5xl mb-10 tracking-tight md:tracking-normal">
                        Why Choose a Career in Tourism?
                    </h1>

                    <h2 className="text-lg h-bold">
                        Thriving Industry in Australia
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Tourism in Australia is a thriving industry, offering diverse job
                        opportunities across beautiful locations. With iconic destinations
                        like the Great Barrier Reef, Sydney Opera House, and Uluru attracting
                        millions of visitors each year, the sector generates significant
                        economic activity.
                    </p>

                    <h2 className="text-lg h-bold">
                        High-Demand Regions
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Regions such as Queensland, New South Wales, and Victoria are
                        hotspots for tourism, creating a high demand for skilled workers.
                        Careers in tourism can range from tour guiding and hospitality to
                        event planning and eco-tourism.
                    </p>

                    <h2 className="text-lg h-bold">
                        Qualifications and Skills Needed
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        To work in tourism, relevant qualifications such as a Certificate in
                        Tourism, hospitality experience, and excellent communication skills
                        are often required. Additionally, having knowledge of Australia's
                        unique landscapes and culture can make you an invaluable asset in the industry.
                    </p>

                    <h2 className="text-lg h-bold">
                        Job Flexibility and Seasonal Work
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Tourism often offers flexible working hours, including part-time and seasonal roles.
                        This can be ideal for those looking for work-life balance or opportunities to travel during the off-season.
                    </p>

                    <h2 className="text-lg h-bold">
                        Cultural Exchange
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Tourism jobs provide opportunities for cultural exchange and interaction with people from around the world,
                        offering enriching experiences both personally and professionally.
                    </p>

                    <h2 className="text-lg h-bold">
                        Endless Opportunities
                    </h2>
                    <p className="mt-2 text-[#798196]">
                        Whether you're passionate about travel or eager to work in a dynamic
                        and rewarding field, a career in tourism in Australia offers endless opportunities.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="relative w-[240px] md:w-[490px] h-[300px] md:h-[520px]">
                        <Image src={'/assets/images/categories/cat-1.webp'} alt="" fill  className="object-cover md:rounded-tl-[300px] rounded-tl-[120px] md:rounded-br-[300px] rounded-br-[120px]"/>
                    </div>
                    <div className="relative flex flex-col md:flex-row md:h-[520px] gap-6 md:gap-0">
                        <div className="hidden md:block relative w-[285px] h-[280px]">
                            <Image src={'/assets/images/categories/tourism-1.webp'} alt="" fill className="rounded-full rounded-bl-none object-none object-left-bottom" />
                        </div>
                        <div className="md:absolute relative md:w-[285px] w-[240px] md:h-[280px] h-[240px] right-0 rounded-full rounded-tr-none flex items-end bg-[#7052E5] self-end">
                            <div className='relative left-16 bottom-12'>
                                <Image src={'/assets/images/vectors/tourism.svg'} alt='' height={50} width={50} className='' />
                                <p className='text-white font-semibold text-xl pt-2'>Tourism</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

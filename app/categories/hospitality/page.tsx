import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insyncx | Hospitality",
  description: "Connecting talents with opportunities in the hospitality industry",
};

export default function HospitalityPage() {
    return (
        <PublicLayout>
            <div className="my-20 flex flex-col md:flex-row gap-16 max-w-[80vw] md:max-w-none">
                <div>
                    <h1 className="md:text-5xl mb-10 tracking-tight md:tracking-normal">
                        Why Choose a Career in Hospitality?
                    </h1>

                    <h2 className="text-lg h-bold">
                        Thriving Industry in Australia
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        For backpackers and immigrants, hospitality in Australia is an ideal career path.
                        It offers immediate opportunities to earn money while traveling or settling in a new country.
                        With flexible working hours, short-term contracts, and entry-level positions readily available, it’s a great way to gain local work experience.
                        Additionally, many hospitality jobs in Australia come with perks like free meals, accommodation, and the chance to work in beautiful locations such as beach resorts, national parks, or vibrant cities.
                    </p>

                    <h2 className="text-lg h-bold">
                        High-Demand Regions
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Hospitality jobs are in high demand globally, with some regions experiencing significant growth. Popular hotspots include:
                    </p>
                    <ul className="list-disc pl-8 mt-4 mb-4">
                        <li className="text-[#798196] mb-2">
                            <span className="font-bold text-primary-text underline">Sydney and Melbourne:</span> Australia’s largest cities are bustling with cafes, restaurants, hotels, and bars.
                        </li>
                        <li className="text-[#798196] mb-2">
                            <span className="font-bold text-primary-text underline">Gold Coast and Cairns:</span> Known for tourism, these regions have high seasonal demand for workers in hotels, resorts, and tourism services.
                        </li>
                        <li className="text-[#798196] mb-2">
                            <span className="font-bold text-primary-text underline">Perth and Brisbane:</span> Growing cities with expanding hospitality sectors that offer both urban and outdoor work environments.
                        </li>
                        <li className="text-[#798196]">
                            <span className="font-bold text-primary-text underline">Regional Areas:</span> Backpackers can also explore visa-friendly work in regional locations, often in eco-lodges or farm stays.
                        </li>
                    </ul>

                    <h2 className="text-lg h-bold">
                        Qualifications and Skills Needed
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        One of the biggest advantages of hospitality for backpackers and immigrants is that many jobs require minimal formal qualifications. However, having a Responsible Service of Alcohol (RSA) certificate is often mandatory for roles in bars and restaurants. Important skills include:
                    </p>
                    <ul className="list-disc pl-8 mt-4 mb-4">
                        <li className="text-[#798196] mb-2">
                            Excellent customer service and communication abilities
                        </li>
                        <li className="text-[#798196] mb-2">
                            Teamwork and adaptability in fast-paced environments
                        </li>
                        <li className="text-[#798196]">
                            Basic understanding of English (advanced language skills are a plus)
                        </li>
                        <li className="text-[#798196] mb-2">
                            Experience in food handling, cleaning, or hospitality services is beneficial but not always required
                        </li>
                    </ul>

                    <h2 className="text-lg h-bold">
                        Job Flexibility and Seasonal Work
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        The hospitality industry in Australia offers great flexibility, perfect for backpackers and travelers on working holiday visas.
                        Many jobs are seasonal, making it easy to find work during peak tourist seasons.
                        This allows for short-term roles, ideal for those looking to work and travel simultaneously.
                        Seasonal work is abundant in tourist hubs, ski resorts, and coastal areas during high season.
                    </p>

                    <h2 className="text-lg h-bold">
                        Average Salary
                    </h2>
                    <p className="mt-2 text-[#798196]">
                        Hospitality jobs in Australia typically offer competitive pay, even for entry-level roles. Depending on the position and location, hourly wages can range from <strong>AUD 20 to AUD 30</strong>, with opportunities for overtime and penalty rates on weekends or public holidays. Positions in more remote or in-demand areas may offer additional incentives like accommodation, food, or higher wages due to staffing shortages.
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
                                <p className='text-white font-semibold text-xl pt-2'>Hospitality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

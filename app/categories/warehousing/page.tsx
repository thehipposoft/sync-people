import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Why Choose a Career in Warehousing? | Insyncx",
    description: "Explore the benefits of starting a career in warehousing. Learn about opportunities, growth potential, and why this industry is perfect for backpackers, students, and newcomers to Australia.",
    openGraph: {
        title: "Why Choose a Career in Warehousing? | Insyncx",
        description: "Discover the advantages of working in the warehousing industry. From flexibility to career growth, warehousing offers great opportunities for newcomers in Australia.",
        url: "https://insyncx.com/categories/warehousing",
        siteName: "Insyncx",
        images: [
        {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "Warehousing Careers in Australia",
        },
        ],
        locale: "en_AU",
        type: "article",
    },
};

export default function WarehousingPage() {
    return (
        <PublicLayout>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Why Choose a Career in Warehousing?",
                    "description": "Learn why warehousing is a top career choice in Australia. Find out about opportunities, skills required, and why it suits backpackers, students, and immigrants.",
                    "author": {
                        "@type": "Organization",
                        "name": "Insyncx"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Insyncx",
                        "logo": {
                        "@type": "ImageObject",
                        "url": "https://insyncx.com/logo.png"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://insyncx.com/categories/warehousing"
                    },
                    "datePublished": "2025-08-30",
                    "dateModified": "2025-08-30",
                    "inLanguage": "en-AU"
                })}
            </script>
            <div className="my-20 flex flex-col md:flex-row gap-16 max-w-[80vw] md:max-w-none">
                <div>
                    <h1 className="lg:text-5xl text-4xl mb-10 tracking-tight md:tracking-normal">
                        Why Choose a Career in Warehousing?
                    </h1>

                    <h2 className="text-lg h-bold">
                        Growing Industry in Australia
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        The warehousing and logistics industry in Australia is expanding rapidly,
                        driven by the growth of e-commerce and global trade. This sector offers
                        stable job opportunities across various regions, with significant demand
                        for both entry-level and skilled workers.
                    </p>

                    <h2 className="text-lg h-bold">
                        High-Demand Areas
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                    Major cities like Sydney, Melbourne, and Brisbane are key logistics hubs,
                                    creating a strong demand for warehousing professionals. From order
                                    pickers to warehouse managers, there are diverse roles available in
                                    both urban and regional areas.
                    </p>

                    <h2 className="text-lg h-bold">
                        Qualifications and Skills Needed
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        While many warehousing roles offer on-the-job training, certifications
                        such as a Forklift License or Warehouse Operations Certificate can
                        enhance your job prospects. Strong organizational skills, attention to
                        detail, and physical stamina are also valuable in this field.
                    </p>

                    <h2 className="text-lg h-bold">
                        Job Flexibility and Shifts
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Warehousing often provides flexible working hours, including night shifts
                        and part-time opportunities. This flexibility can be beneficial for
                        those balancing other commitments or looking for varied work hours.
                    </p>

                    <h2 className="text-lg h-bold">
                        Diverse Work Environment
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        Working in warehousing often means being part of a diverse and dynamic team.
                        It’s an industry that welcomes people from various backgrounds, offering
                        a collaborative work environment.
                    </p>

                    <h2 className="text-lg h-bold">
                        Endless Opportunities
                    </h2>
                    <p className="mt-2 text-[#798196]">
                        Whether you're looking to enter the workforce or seeking career advancement,
                        the warehousing industry in Australia provides countless opportunities for growth and development.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="relative w-[240px] md:w-[490px] h-[300px] md:h-[520px]">
                        <Image src={'/assets/images/categories/categories-2.jpg'} alt="" fill  className="object-cover md:rounded-tl-[300px] rounded-tl-[120px] md:rounded-br-[300px] rounded-br-[120px]"/>
                    </div>
                    <div className="flex flex-col md:flex-row md:h-[520px] gap-6 md:gap-0 relative">
                        <div className="hidden md:block relative w-[285px] h-[280px]">
                            <Image src={'/assets/images/categories/warehousing.webp'} alt="" fill className="rounded-full rounded-bl-none object-cover" />
                        </div>
                        <div className="md:absolute relative md:w-[285px] w-[240px] md:h-[280px] h-[240px] right-0 rounded-full rounded-tr-none flex items-end bg-[#FF8149] self-end">
                            <div className='relative left-16 bottom-12'>
                                <Image src={'/assets/images/vectors/paper.svg'} alt='' height={50} width={50} className='' />
                                <p className='text-white font-semibold text-xl pt-2'>Warehousing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

import type { Metadata } from 'next';
import PublicLayout from "@/components/PublicLayout";
import TalentsList from './TalentsList';
import { getTalents } from '@/lib/api';
import { TalentTypeAcf } from '@/types';

export const metadata: Metadata = {
    title: "Insyncx | Talents list",
    description: "Check out our list of talents",
    keywords: ['Insyncx', 'Talents', 'Freelancers', 'Professionals', 'Experts', 'Skilled Workers', 'Consultants', 'Specialists', 'Remote Workers', 'Contractors'],
    openGraph: {
        title: "Insyncx | Talents list",
        description: "Check out our list of talents",
        url: 'https://insyncx.com/talents',
        siteName: "Insyncx",
        images: [
            {
                url: `/assets/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Insyncx Talents List',
            },
        ],
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Insyncx | Talents list",
        description: "Check out our list of talents",
        images: [`/assets/og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
};

const TalentsListPage = async () => {
    const talents:TalentTypeAcf[] = await getTalents();
    const filterTalentsWithIndustries = talents.filter((talent) => talent.professional_information.industries && talent.professional_information.current_status !== 'offline');

	return (
		<PublicLayout>
            <TalentsList
                talentsList={filterTalentsWithIndustries}
            />
		</PublicLayout>
	);
};

export default TalentsListPage;

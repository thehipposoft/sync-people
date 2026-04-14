import type { Metadata, ResolvingMetadata } from 'next';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import PublicLayout from '@/components/PublicLayout';
import { getTalent } from '@/lib/api';
import { TalentType } from '@/types';
import TalentProfile from './TalentProfile';

type TalentProfilePageProps = {
    params: Promise<{
        id: string;
    }>;
};

const formatIndustryLabel = (industry: TalentType['acf']['professional_information']['industries'][number]) => {
    if (industry.industry === 'other') {
        return industry.other_industry || 'Other';
    }

    return industry.industry.replace(/_/g, ' ');
};

const getTalentCached = cache(async (id: string) => getTalent(id));

export async function generateMetadata(
    { params }: TalentProfilePageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const talentData = await getTalentCached(id);

    if (talentData) {
        const previousImages = (await parent).openGraph?.images || [];
        const profileImage = talentData.acf.personal_information.profile_pic;
        const images = profileImage ? [profileImage, ...previousImages] : previousImages;

        return {
            title: `Insyncx | Talent Profile | ${talentData.acf.personal_information.first_name}`,
            openGraph: {
                images,
            },
            twitter: {
                images,
            },
        };
    }

    return {
        title: 'Insyncx | Talent Profile',
    };
};

const TalentProfilePage = async ({
    params,
}:TalentProfilePageProps) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
	const talentData = await getTalentCached(id);

    if (!talentData) {
        notFound();
    }

    const industries = talentData.acf.professional_information.industries || [];

	return (
		<PublicLayout>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": `${talentData.acf.personal_information.first_name} ${talentData.acf.personal_information.last_name}`,
                    "image": talentData.acf.personal_information.profile_pic,
                    "jobTitle": talentData.acf.professional_information.current_status,
                    "description": talentData.acf.personal_information.about_myself,
                    "url": `https://insyncx.com/talents/${talentData.id}`,
                    "hasOccupation": industries.map((industry) => ({
                        "@type": "Occupation",
                        "name": formatIndustryLabel(industry)
                    })),
                    "inLanguage": "en-AU"
                })}
            </script>
			<TalentProfile talentData={talentData.acf} id={id} />
		</PublicLayout>
	);
};

export default TalentProfilePage;

import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from "next/navigation";
import { ROUTES } from '@/app/constants';
import PublicLayout from '@/components/PublicLayout';
import { getTalent } from '@/lib/api';
import { TalentType } from '@/types';
import TalentProfile from './TalentProfile';

type TalentProfilePageProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata(
    { params }: TalentProfilePageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const talentData: TalentType = await getTalent(id).then((res) => res);

    if(talentData.id) {
        const previousImages = (await parent).openGraph?.images || []

        return {
            title: `Insyncx | Talent Profile | ${talentData.acf.personal_information.first_name}`,
            openGraph: {
                images: [talentData.acf.personal_information.profile_pic , ...previousImages],
            },
            twitter: {
                images: [talentData.acf.personal_information.profile_pic , ...previousImages],
            }
        };
    }

    return {
        title: 'Insyncx | Talent Profile',
    }
};

const TalentProfilePage = async ({
    params,
}:TalentProfilePageProps) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
	const talentData:TalentType = await getTalent(id);

    if(!talentData.id) {
        redirect(ROUTES.HOME);
    }

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
                    "hasOccupation": talentData.acf.professional_information.industries.map(industry => ({
                        "@type": "Occupation",
                        "name": industry
                    })),
                    "inLanguage": "en-AU"
                })}
            </script>
			{
				talentData
				? <TalentProfile talentData={talentData.acf} id={id} />
				: <div>
					<h3 className={'text-center text-2xl mt-4'}>
						Talent not found
					</h3>
				</div>
			}
		</PublicLayout>
	);
};

export default TalentProfilePage;

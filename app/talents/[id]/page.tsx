import type { Metadata, ResolvingMetadata } from 'next';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { ROUTES } from '@/app/constants';
import PublicLayout from '@/components/PublicLayout';
import getTalent from '@/api/getTalent';
import { TalentType } from '@/types';
import TalentProfile from './TalentProfile';

type TalentProfilePageProps = {
     params: { id: string }
};

export async function generateMetadata(
    { params }: TalentProfilePageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id;
    const talentData: TalentType = await getTalent(id).then((res) => res);

    if(talentData.id) {
        const previousImages = (await parent).openGraph?.images || []

        return {
            title: `Insyncx | Talent Profile | ${talentData.acf.personal_information.first_name}`,
            openGraph: {
                images: [talentData.acf.personal_information.profile_pic , ...previousImages],
            },
        }
    };

    return {
        title: 'Insyncx | Talent Profile',
    }
};

const TalentProfilePage = async ({
    params,
}:TalentProfilePageProps) => {
    revalidatePath('/talent/[id]', 'page');
	const talentId = params.id;
	const talentData:TalentType = await getTalent(talentId);

    if(!talentData.id) {
        redirect(ROUTES.HOME);
    }

	return (
		<PublicLayout>
			{
				talentData
				? <TalentProfile talentData={talentData.acf} />
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

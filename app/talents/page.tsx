import type { Metadata } from 'next';
import PublicLayout from "@/components/PublicLayout";
import TalentsList from './TalentsList';
import { getTalents } from '@/lib/api';
import { TalentTypeAcf } from '@/types';

export const metadata: Metadata = {
    title: "Insyncx | Talents list",
    description: "Check out our list of talents",
};

const TalentsListPage = async () => {
    const talents:TalentTypeAcf[] = await getTalents();
    const filterTalentsWithIndustries = talents.filter((talent) => talent.professional_information.industries);

	return (
		<PublicLayout>
            <TalentsList
                talentsList={filterTalentsWithIndustries}
            />
		</PublicLayout>
	);
};

export default TalentsListPage;

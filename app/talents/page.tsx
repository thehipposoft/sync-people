import type { Metadata } from 'next';
import PublicLayout from "@/components/PublicLayout";
import TalentsList from './TalentsList';
import { getTalents } from '@/lib/api';

export const metadata: Metadata = {
    title: "Insyncx | Talents list",
    description: "Check out our list of talents",
};

const TalentsListPage = async () => {
    const talents = await getTalents();

	return (
		<PublicLayout>
            <TalentsList
                talentsList={talents}
            />
		</PublicLayout>
	);
};

export default TalentsListPage;

import type { Metadata } from "next";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";
import TalentForm from "./TalentForm";

type MetadataPropsType = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const resolvedParams = await params;
    const userData: TalentType = await getTalent(resolvedParams.id);

    if(userData) {
        return {
            title: `${userData.acf.personal_information.first_name} | Talent Portal`,
        }
    };

    return {
        title: 'Insyncx - Talent Portal',
    }
};

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const MyProfilePage = async ({ params }: Props) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const userData:TalentType = await getTalent(id);

    return (
        <PrivateLayout
            user={userData.acf}
            userId={id}
        >
            <div className="flex">
                <div className="flex flex-col w-full">
{/*                     <TalentForm
                        user={userData.acf}
                        userId={id}
                    /> */}
                </div>
            </div>
        </PrivateLayout>
    )
};

export default MyProfilePage;

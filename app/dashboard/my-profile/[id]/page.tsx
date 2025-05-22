import type { Metadata } from "next";
import MyProfile from "./MyProfile";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";
import { ROUTES } from "@/app/constants";
import { redirect } from "next/navigation";

type MetadataPropsType = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const resolvedParams = await params;
    const userData: TalentType = await getTalent(resolvedParams.id);

    if(userData.acf) {
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

    if(!userData.acf) {
        //redirect(ROUTES.CURRENT_TALENT_NOT_FOUND);
    };

    return (
        <div className="flex">
            <div className="flex flex-col w-full">
                <MyProfile
                    user={userData.acf}
                    userId={id}
                />
            </div>
        </div>
    )
};

export default MyProfilePage;

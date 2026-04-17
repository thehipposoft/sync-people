import type { Metadata } from "next";
import MyProfile from "./MyProfile";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import { ROUTES } from "@/app/constants";
import { redirect } from "next/navigation";

type MetadataPropsType = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const resolvedParams = await params;
    const userData: TalentType | null = await getTalent(resolvedParams.id);

    if(userData?.acf) {
        const firstName = userData.acf.personal_information.first_name;
        const lastName = userData.acf.personal_information.last_name;
        return {
            title: `${firstName} ${lastName} | Skills Portfolio | Insyncx`,
            description: `Manage and update your Skills Portfolio on Insyncx.`,
            robots: {
                index: false,
                follow: false,
            },
        }
    };

    return {
        title: 'Skills Portfolio | Insyncx',
        description: 'Manage and update your Skills Portfolio on Insyncx.',
        robots: {
            index: false,
            follow: false,
        },
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
    const userData: TalentType | null = await getTalent(id);

    if(!userData || !userData.acf) {
        redirect(ROUTES.CURRENT_TALENT_NOT_FOUND);
    };

    if(!userData.acf?.professional_information.industries) {
        redirect(`/dashboard/my-profile/${id}/create-talent-profile`)
    }

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

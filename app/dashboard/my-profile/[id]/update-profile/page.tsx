import type { Metadata } from "next";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";
import ProfileForm from "./ProfileForm";

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
            title: `${userData.acf.personal_information.first_name} | Update Profile | Insyncx`,
        }
    };

    return {
        title: 'Update Profile | Insyncx',
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
            <ProfileForm
                userData={userData.acf}
                userId={id}
            />
        </PrivateLayout>
    )
};

export default MyProfilePage;

import type { Metadata } from "next";
import { getTalent } from "@/lib/api";
import { TalentTypeAcf } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";
import ProfileForm from "./ProfileForm";

type MetadataPropsType = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const userData:TalentTypeAcf = await getTalent(params.id);

    if(userData) {
        return {
            title: `${userData.personal_information.first_name} | Update Profile`,
        }
    };

    return {
        title: 'Insyncx - Update Profile',
    }
};

type Props = {
    params: {
        id: string;
    }
};

const MyProfilePage = async ({ params }: Props) => {
    const { id } = params;
    const userData:TalentTypeAcf = await getTalent(id);

    return (
        <PrivateLayout
            user={userData}
        >
            <ProfileForm userData={userData} />
        </PrivateLayout>
    )
};

export default MyProfilePage;

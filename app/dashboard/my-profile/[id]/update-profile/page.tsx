import type { Metadata } from "next";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";
import ProfileForm from "./ProfileForm";

type MetadataPropsType = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const userData:TalentType = await getTalent(params.id);

    if(userData) {
        return {
            title: `${userData.acf.personal_information.first_name} | Update Profile`,
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
    const userData:TalentType = await getTalent(id);

    return (
        <PrivateLayout
            user={userData.acf}
            userId={id}
        >
            <ProfileForm userData={userData.acf} />
        </PrivateLayout>
    )
};

export default MyProfilePage;

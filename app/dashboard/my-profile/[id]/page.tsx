import type { Metadata } from "next";
import MyProfile from "./MyProfile";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";

type MetadataPropsType = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const userData:TalentType = await getTalent(params.id);

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
            <div className="flex">
                <div className="flex flex-col w-full">
                    <MyProfile
                        user={userData.acf}
                        userId={id}
                    />
                </div>
            </div>
        </PrivateLayout>
    )
};

export default MyProfilePage;

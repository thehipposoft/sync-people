import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MyProfile from "./MyProfile";
import { getTalent } from "@/lib/api";
import { TalentTypeAcf } from "@/types";
import PrivateLayout from "@/components/PrivateLayout";

type MetadataPropsType = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const userData:TalentTypeAcf = await getTalent(params.id);

    if(userData) {
        return {
            title: `${userData.personal_information.first_name} | Talent Portal`,
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
    const userData:TalentTypeAcf = await getTalent(id);

    return (
        <PrivateLayout
            user={userData}
        >
            <div className="flex">
                <div className="flex flex-col w-full">
                    <MyProfile user={userData} />
                    <Footer />
                </div>
            </div>
        </PrivateLayout>
    )
};

export default MyProfilePage;

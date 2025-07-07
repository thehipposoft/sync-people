import type { Metadata } from "next";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import TalentForm from "./TalentForm";
import { redirect } from "next/navigation";
import { ROUTES } from "@/app/constants";

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

const CreateTalentProfile = async ({ params }: Props) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const userData:TalentType = await getTalent(id);

    if(userData.acf.professional_information.industries && userData.acf.professional_information.industries.length) {
        /* redirect(`${ROUTES.MY_PROFILE}/${id}`); */
    }

    return (
        <div className="flex flex-col w-full">
            <TalentForm
                user={userData.acf}
                userId={id}
            />
        </div>
    )
};

export default CreateTalentProfile;

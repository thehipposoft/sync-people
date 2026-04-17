import type { Metadata } from "next";
import { getTalent } from "@/lib/api";
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
    const userData = await getTalent(resolvedParams.id);

    if(userData) {
        return {
            title: `Create Talent Profile | ${userData.acf.personal_information.first_name} | Insyncx`,
            description: 'Complete your Skills Portfolio to get discovered by employers and unlock relevant opportunities.',
            robots: {
                index: false,
                follow: false,
            },
        }
    };

    return {
        title: 'Create Talent Profile | Insyncx',
        description: 'Complete your Skills Portfolio to get discovered by employers and unlock relevant opportunities.',
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

const CreateTalentProfile = async ({ params }: Props) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const userData = await getTalent(id);

    if(!userData) {
        redirect(ROUTES.MY_PROFILE);
    }

    if(userData.acf.professional_information.industries && userData.acf.professional_information.industries.length) {
        redirect(`${ROUTES.MY_PROFILE}/${id}`);
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

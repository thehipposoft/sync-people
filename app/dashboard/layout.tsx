import type { Metadata } from "next";
import PrivateLayout from "@/components/PrivateLayout";
import { getTalent } from "@/lib/api";
import { TalentType } from "@/types";
import { redirect } from "next/navigation";
import { ROUTES } from "@/app/constants";
import { getTalentId } from "@/lib/actions";

export async function generateMetadata(): Promise<Metadata> {
    const id = await getTalentId();
    if (!id) {
        return {
            title: 'Insyncx - Talent Portal',
        }
    }
    const userData: TalentType = await getTalent(id);

    if(userData.acf) {
        return {
            title: `${userData.acf.personal_information.first_name} | Talent Portal`,
        }
    };

    return {
        title: 'Insyncx - Talent Portal',
    }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const id = await getTalentId();
    if (!id) {
        redirect(ROUTES.HOME);
    }
    const userData:TalentType = await getTalent(id);

    return (
        <div className={`min-h-screen flex flex-col`}>
            <PrivateLayout
                userId={id}
                user={userData.acf}
            >
                {children}
            </PrivateLayout>
        </div>
    );
}

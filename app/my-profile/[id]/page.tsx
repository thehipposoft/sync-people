import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MyProfile from "@/components/MyProfile";
import SideNav from "@/components/SideNav";
import { getUserProfile } from "@/lib/protected-api";
import { getTalent } from "@/lib/api";

type MetadataPropsType = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: MetadataPropsType): Promise<Metadata> {
    const userData = await getTalent(params.id);
    console.log(">>userData", userData);

    if(userData) {
        return {
            title: `${userData.personal_information.first_name} | Talent Portal`,
        }
    };

    return {
        title: 'Insyncx - Talent Portal',
    }
};


export default function MyProfilePage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <MyProfile />
                <Footer />
            </div>
        </div>
    )
}

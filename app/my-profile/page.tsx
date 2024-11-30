import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MyProfile from "@/components/MyProfile";
import SideNav from "@/components/SideNav";
import { getUserProfile } from "@/lib/protected-api";

export async function generateMetadata(): Promise<Metadata> {
    const userData = await getUserProfile();
    console.log(">>userData", userData);

    if(userData) {
        return {
            title: `Welcome ${userData.name} to the All Medical Waste Client Portal`,
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

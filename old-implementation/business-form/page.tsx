import SideNav from "@/components/SideNav"
import Footer from "@/components/Footer"
import BusinessCreateProfile from "@/components/BusinessCreateProfile"

export default async function BusinessCreateProfilePage() {
    return(
        <div className="flex">
            {/* <SideNav /> */}
            <div className="flex flex-col w-full">
                <BusinessCreateProfile />
                <Footer />
            </div>
        </div>
    )
}

import SideNav from "../../../components/SideNav"
import Footer from "../../../components/Footer"
import BusinessProfile from "../../../components/BusinessProfile"

export default async function BusinessProfilePage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <BusinessProfile />
                <Footer />
            </div>
        </div>
    )
}


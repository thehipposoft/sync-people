import SideNav from "@/components/SideNav"
import Footer from "@/components/Footer"
import StaffSearch from "@/components/StaffSearch"

export default function StaffSearchPage() {
    return(
        <div className="flex">
            {/* <SideNav /> */}
            <div className="flex flex-col w-full">
                <StaffSearch />
                <Footer />
            </div>
        </div>
    )
}

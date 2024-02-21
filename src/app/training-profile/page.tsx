import SideNav from "../../../components/SideNav"
import Footer from "../../../components/Footer"
import TrainingProfile from "../../../components/TrainingProfile"

export default async function TrainingProfilePage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <TrainingProfile />
                <Footer />
            </div>
        </div>
    )
}


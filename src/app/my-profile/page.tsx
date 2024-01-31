import Footer from "../../../components/Footer";
import MyProfile from "../../../components/MyProfile";
import SideNav from "../../../components/SideNav";


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

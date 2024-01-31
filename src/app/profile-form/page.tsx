import Footer from "../../../components/Footer";
import MyProfile from "../../../components/MyProfile";
import ProfileForm from "../../../components/ProfileForm";
import SideNav from "../../../components/SideNav";


export default function ProfileFormPage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <ProfileForm />
                <Footer />
            </div>
        </div>
    )
}

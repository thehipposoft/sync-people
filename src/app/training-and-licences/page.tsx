import Footer from "../../../components/Footer";
import SearchComponent from "../../../components/Search";
import SideNav from "../../../components/SideNav";
import { LICENCES_RESULTS } from "../../../components/Search/constants"


export default function StaffMarketPage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <SearchComponent data={LICENCES_RESULTS} user='licence' />
                <Footer />
            </div>
        </div>
    )
}

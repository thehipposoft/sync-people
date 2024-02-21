import Footer from "../../../components/Footer";
import SearchComponent from "../../../components/Search";
import SideNav from "../../../components/SideNav";
import { BUSINESS_RESULTS } from "../../../components/Search/constants";

export default function BusinessMarketPage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <SearchComponent  data={BUSINESS_RESULTS} />
                <Footer />
            </div>
        </div>
    )
}

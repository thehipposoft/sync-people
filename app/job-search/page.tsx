import SideNav from "@/components/SideNav"
import JobSearchForm from "@/components/JobSearchForm"
import Footer from "@/components/Footer"

export default function JobSearchPage() {
    return(
        <div className="flex">
            <SideNav />
            <div className="flex flex-col w-full">
                <JobSearchForm />
                <Footer />
            </div>
        </div>
    )
}

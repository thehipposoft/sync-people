import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import TalentNotFoundComp from "./TalentNotFound";

export const metadata: Metadata = {
    title: "Insyncx | Talent not found",
    description: "We couldn't find your talent profile",
};

const TalentNotFound = async () => {
    return(
        <PublicLayout>
            <TalentNotFoundComp />
        </PublicLayout>
    )
};

export default TalentNotFound;

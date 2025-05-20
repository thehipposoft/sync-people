import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import SessionExpiredComp from "./SessionExpired";

export const metadata: Metadata = {
    title: "Insyncx | Session Expired",
    description: "Your email has expired",
};

export default async function SessionExpired() {
    return (
        <PublicLayout>
            <SessionExpiredComp />
        </PublicLayout>
    )
}

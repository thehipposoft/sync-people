import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
    title: "Insyncx | Email verified",
    description: "Your email has been verified",
};

export default async function EmailVerified() {
    return(
        <PublicLayout>
            <div>
                Your email has been verified
            </div>

        </PublicLayout>
    )
}


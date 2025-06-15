import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import { Link } from "next-view-transitions";
import { ROUTES } from "../constants";

export const metadata: Metadata = {
    title: "Insyncx | Forgot password email verification",
    description: "Your email has been verified",
};

export default async function EmailVerified() {
    return(
        <PublicLayout>
            <div className="flex flex-col w-full">
                <h3 className="text-center">
                    We have sent you an email with a link to reset your password.
                </h3>
                <Link
                    className="mt-5 primary-btn mx-auto"
                    href={ROUTES.LOGIN}
                >
                    Login
                </Link>
            </div>
        </PublicLayout>
    )
}


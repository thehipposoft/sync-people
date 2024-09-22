import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import ComingSoon from "./ComingSoon";

export const metadata: Metadata = {
  title: "Insyncx | Coming Soon",
  description: "Connecting talents with opportunities in the cleaning industry",
};

export default function ComingsoonPage () {
    return (
        <PublicLayout>
            <ComingSoon />
        </PublicLayout>
    );
}

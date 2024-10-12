import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import ComingSoon from "./ComingSoon";

export const metadata: Metadata = {
  title: "Insyncx | Coming Soon",
  description: "Coming Soon! Be Part of Insyncx Now",
};

export default function ComingsoonPage () {
    return (
        <PublicLayout>
            <ComingSoon />
        </PublicLayout>
    );
}

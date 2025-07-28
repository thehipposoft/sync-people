import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";
import SingleEntry from "@/components/blog/SingleEntry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insyncx | Blog Entry",
  description: "Connecting talents with opportunities in the cleaning industry",
};

export default function ComingsoonPage () {
    return (
        <div>
            <Header />
            <SingleEntry />
            <Footer />
        </div>
    );
}

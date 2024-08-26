import { Metadata } from "next";
import PublicLayout from "../../../../components/PublicLayout";

export const metadata: Metadata = {
  title: "Insyncx | Tourism",
  description: "Connecting talents with opportunities in the tourism industry",
};

export default function TourismPage() {
    return (
        <PublicLayout>
            <div className="my-20">
                <h1 className="text-3xl mb-10 text-center">
                    Why Choose a Career in Tourism?
                </h1>

                <h2 className="text-lg h-bold">
                    Thriving Industry in Australia
                </h2>
                <p className="mb-4">
                    Tourism in Australia is a thriving industry, offering diverse job
                    opportunities across beautiful locations. With iconic destinations
                    like the Great Barrier Reef, Sydney Opera House, and Uluru attracting
                    millions of visitors each year, the sector generates significant
                    economic activity.
                </p>

                <h2 className="text-lg h-bold">
                    High-Demand Regions
                </h2>
                <p className="mb-4">
                    Regions such as Queensland, New South Wales, and Victoria are
                    hotspots for tourism, creating a high demand for skilled workers.
                    Careers in tourism can range from tour guiding and hospitality to
                    event planning and eco-tourism.
                </p>

                <h2 className="text-lg h-bold">
                    Qualifications and Skills Needed
                </h2>
                <p className="mb-4">
                    To work in tourism, relevant qualifications such as a Certificate in
                    Tourism, hospitality experience, and excellent communication skills
                    are often required. Additionally, having knowledge of Australia's
                    unique landscapes and culture can make you an invaluable asset in the industry.
                </p>

                <h2 className="text-lg h-bold">
                    Job Flexibility and Seasonal Work
                </h2>
                <p className="mb-4">
                    Tourism often offers flexible working hours, including part-time and seasonal roles.
                    This can be ideal for those looking for work-life balance or opportunities to travel during the off-season.
                </p>

                <h2 className="text-lg h-bold">
                    Cultural Exchange
                </h2>
                <p className="mb-4">
                    Tourism jobs provide opportunities for cultural exchange and interaction with people from around the world,
                    offering enriching experiences both personally and professionally.
                </p>

                <h2 className="text-lg h-bold">
                    Endless Opportunities
                </h2>
                <p>
                    Whether you're passionate about travel or eager to work in a dynamic
                    and rewarding field, a career in tourism in Australia offers endless opportunities.
                </p>
            </div>
        </PublicLayout>
    );
}

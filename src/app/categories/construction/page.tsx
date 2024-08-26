import { Metadata } from "next";
import PublicLayout from "../../../../components/PublicLayout";

export const metadata: Metadata = {
  title: "Insyncx | Construction",
  description: "Connecting talents with opportunities in the construction industry",
};

export default function ConstructionPage() {
    return (
        <PublicLayout>
            <div>
                <h1 className="text-3xl mb-10 text-center">
                    Why Choose a Career in Construction?
                </h1>

                <h2 className="text-lg h-bold">
                    Booming Industry in Australia
                </h2>
                <p className="mb-4">
                    The construction industry in Australia is booming, with ongoing projects
                    in infrastructure, commercial development, and residential housing.
                    This sector offers robust job opportunities and plays a vital role
                    in the country's economic growth.
                </p>

                <h2 className="text-lg h-bold">
                    High-Demand Roles
                </h2>
                <p className="mb-4">
                    Skilled tradespeople, including carpenters, electricians, and plumbers,
                    are in high demand across Australia. Additionally, roles such as project
                    managers, site supervisors, and laborers offer diverse career paths
                    within the industry.
                </p>

                <h2 className="text-lg h-bold">
                    Qualifications and Skills Needed
                </h2>
                <p className="mb-4">
                    Many construction roles require specific qualifications, such as a
                    White Card for safety training, trade certifications, or apprenticeships.
                    Strong problem-solving skills, physical fitness, and attention to detail
                    are essential for success in this field.
                </p>

                <h2 className="text-lg h-bold">
                    Job Security and Growth
                </h2>
                <p className="mb-4">
                    The construction industry provides excellent job security due to continuous
                    demand and the essential nature of the work. With opportunities for
                    career advancement, including supervisory and managerial roles,
                    construction offers long-term growth potential.
                </p>

                <h2 className="text-lg h-bold">
                    Collaboration and Teamwork
                </h2>
                <p className="mb-4">
                    Construction projects often require strong collaboration and teamwork,
                    allowing you to work alongside professionals from various disciplines.
                    This environment fosters a sense of accomplishment and community.
                </p>

                <h2 className="text-lg h-bold">
                    Endless Opportunities
                </h2>
                <p>
                    Whether you're just starting out or seeking to advance your career,
                    the construction industry in Australia provides endless opportunities
                    for skilled and motivated individuals.
                </p>
            </div>
        </PublicLayout>
    );
}

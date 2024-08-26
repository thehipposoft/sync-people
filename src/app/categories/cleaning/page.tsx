import { Metadata } from "next";
import PublicLayout from "../../../../components/PublicLayout";

export const metadata: Metadata = {
  title: "Insyncx | Cleaning",
  description: "Connecting talents with opportunities in the cleaning industry",
};

export default function CleaningPage() {
    return (
        <PublicLayout>
            <div>
                <h1 className="text-3xl mb-10 text-center">
                    Why Choose a Career in Cleaning?
                </h1>

                <h2 className="text-lg h-bold">
                    Essential Industry in Australia
                </h2>
                <p className="mb-4">
                    The cleaning industry in Australia is essential to maintaining hygiene
                    and safety across various sectors, including healthcare, hospitality,
                    and commercial spaces. This industry offers stable employment and
                    a wide range of job opportunities.
                </p>

                <h2 className="text-lg h-bold">
                    High-Demand Areas
                </h2>
                <p className="mb-4">
                    Major cities such as Sydney, Melbourne, and Perth have a high demand
                    for cleaning professionals in commercial, residential, and industrial settings.
                    With the increasing focus on hygiene standards, the need for skilled
                    cleaners continues to rise.
                </p>

                <h2 className="text-lg h-bold">
                    Qualifications and Skills Needed
                </h2>
                <p className="mb-4">
                    While many cleaning roles provide on-the-job training, having
                    experience in specialized cleaning methods, such as carpet cleaning or
                    industrial cleaning, can be an advantage. Attention to detail, time management,
                    and reliability are key skills in this industry.
                </p>

                <h2 className="text-lg h-bold">
                    Flexibility and Work-Life Balance
                </h2>
                <p className="mb-4">
                    The cleaning industry often offers flexible working hours, including part-time
                    and shift work, making it ideal for those seeking work-life balance.
                    This flexibility can also provide opportunities for supplementary income.
                </p>

                <h2 className="text-lg h-bold">
                    Impactful Work
                </h2>
                <p className="mb-4">
                    Working in the cleaning industry allows you to make a tangible difference
                    in creating safe and healthy environments. Your work directly contributes
                    to the well-being of individuals and communities.
                </p>

                <h2 className="text-lg h-bold">
                    Endless Opportunities
                </h2>
                <p>
                    Whether you're looking for a steady job or seeking to develop specialized skills,
                    the cleaning industry in Australia offers a range of opportunities for growth
                    and career advancement.
                </p>
            </div>
        </PublicLayout>
    );
}

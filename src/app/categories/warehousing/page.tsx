import { Metadata } from "next";
import PublicLayout from "../../../../components/PublicLayout";

export const metadata: Metadata = {
  title: "Insyncx | Warehousing",
  description: "Connecting talents with opportunities in the warehousing industry",
};

export default function WarehousingPage() {
    return (
        <PublicLayout>
            <div className="py-8">
                <h1 className="text-3xl mb-10 text-center">
                    Why Choose a Career in Warehousing?
                </h1>

                <h2 className="text-lg h-bold">
                    Growing Industry in Australia
                </h2>
                <p className="mb-4">
                    The warehousing and logistics industry in Australia is expanding rapidly,
                    driven by the growth of e-commerce and global trade. This sector offers
                    stable job opportunities across various regions, with significant demand
                    for both entry-level and skilled workers.
                </p>

                <h2 className="text-lg h-bold">
                    High-Demand Areas
                </h2>
                <p className="mb-4">
                    Major cities like Sydney, Melbourne, and Brisbane are key logistics hubs,
                    creating a strong demand for warehousing professionals. From order
                    pickers to warehouse managers, there are diverse roles available in
                    both urban and regional areas.
                </p>

                <h2 className="text-lg h-bold">
                    Qualifications and Skills Needed
                </h2>
                <p className="mb-4">
                    While many warehousing roles offer on-the-job training, certifications
                    such as a Forklift License or Warehouse Operations Certificate can
                    enhance your job prospects. Strong organizational skills, attention to
                    detail, and physical stamina are also valuable in this field.
                </p>

                <h2 className="text-lg h-bold">
                    Job Flexibility and Shifts
                </h2>
                <p className="mb-4">
                    Warehousing often provides flexible working hours, including night shifts
                    and part-time opportunities. This flexibility can be beneficial for
                    those balancing other commitments or looking for varied work hours.
                </p>

                <h2 className="text-lg h-bold">
                    Diverse Work Environment
                </h2>
                <p className="mb-4">
                    Working in warehousing often means being part of a diverse and dynamic team.
                    It’s an industry that welcomes people from various backgrounds, offering
                    a collaborative work environment.
                </p>

                <h2 className="text-lg h-bold">
                    Endless Opportunities
                </h2>
                <p>
                    Whether you're looking to enter the workforce or seeking career advancement,
                    the warehousing industry in Australia provides countless opportunities for growth and development.
                </p>
            </div>
        </PublicLayout>
    );
}

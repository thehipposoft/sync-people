import type { Metadata } from 'next';
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
    title: "Insyncx | Talents",
    description: "Connecting talents with opportunities",
};

const TradieProfilePage = () => {
	return (
		<PublicLayout>
            <div>
                Talent Page
            </div>
		</PublicLayout>
	);
};

export default TradieProfilePage;

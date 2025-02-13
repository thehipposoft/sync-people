import Header from "./Header";
import Footer from "./Footer";
import { getUserProfile } from '@/lib/protected-api';

type PublicLayoutProps = {
    children: React.ReactNode,
    fullWith?: boolean,
};

const PublicLayout = async ({
    children,
    fullWith,
}:PublicLayoutProps) => {
    const userData = await getUserProfile();

    return (
        <div className="flex flex-col min-h-screen bg-bg-primary">
            <Header
                isFixed={true}
                userId={userData && userData.meta && userData?.meta.talent_id}
            />
                <div className={`${fullWith ? 'w-full' : 'md:w-[1250px]'} flex justify-between items-center mx-auto flex-grow`}>
                    {children}
                </div>
            <Footer />
        </div>
    );
}

export default PublicLayout;

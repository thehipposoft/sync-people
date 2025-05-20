import Header from "./Header";
import Footer from "./Footer";
import { getToken } from "@/lib/actions";

type PublicLayoutProps = {
    children: React.ReactNode,
    fullWith?: boolean,
};

const PublicLayout = async ({
    children,
    fullWith,
}:PublicLayoutProps) => {
    const userToken = await getToken();
    console.log(">>userToken", userToken);

    return (
        <div className="flex flex-col min-h-screen bg-bg-primary">
            <Header
                isFixed={true}
                isLoggedIn={!!userToken}
            />
                <div className={`${fullWith ? 'w-full' : 'md:w-[1250px]'} pt-28 lg:pt-0 flex justify-between items-center mx-auto flex-grow`}>
                    {children}
                </div>
            <Footer />
        </div>
    );
}

export default PublicLayout;

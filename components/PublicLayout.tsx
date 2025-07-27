import Header from "./Header";
import Footer from "./Footer";
import { getTalentId } from "@/lib/actions";

type PublicLayoutProps = {
    children: React.ReactNode,
    fullWith?: boolean,
};

const PublicLayout = async ({
    children,
    fullWith,
}:PublicLayoutProps) => {
    const id = await getTalentId();

    return (
        <div className="flex flex-col bg-bg-primary overflow-x-hidden min-h-screen">
            <Header isLoggedIn={id} userId={id}/>
            <main className={`${fullWith ? 'w-full' : 'lg:w-[1250px]'} flex justify-between items-center mx-auto flex-grow`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default PublicLayout;

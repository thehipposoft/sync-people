import Header from "./Header";
import Footer from "./Footer";

type PublicLayoutProps = {
    children: React.ReactNode
};

const PublicLayout = ({ children }:PublicLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="md:w-[1250px] flex justify-between items-center mx-auto flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PublicLayout;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogComponent from "@/components/blog/BlogComponent";

export default function BlogPage() {
    return(
        <div>
            <Header isFixed={false} />
            <BlogComponent />
            <Footer />
        </div>
    )

}

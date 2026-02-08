import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Ebook = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Free Ebook"
                description="Download our free guide to studying abroad. Comprehensive tips and checklists for aspiring students."
            />
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-4">Free E-Book</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Ebook;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Ribbons from "@/components/ui/Ribbons";
import LoadingScreen from "./components/LoadingScreen";
import SEO from "./components/SEO";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const TestimonialsPage = lazy(() => import("./pages/Testimonials"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const Ebook = lazy(() => import("./pages/Ebook"));
const UniversityList = lazy(() => import("./pages/UniversityList"));
const CourseUniversities = lazy(() => import("./pages/CourseUniversities"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Removed fixed timer to allow video to play fully

  return (
    <QueryClientProvider client={queryClient}>
      <SEO
        title="AspireEach"
        description="Turn Your Aspiration Into A Global Reality. Expert study abroad counseling, visa assistance, and university selection."
        keywords="study abroad, overseas education, visa consultant, university admissions"
      />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
          ) : (
            <>
              <div className="fixed inset-0 pointer-events-none z-[9999]">
                <Ribbons
                  baseThickness={11}
                  colors={["#14b8a6"]}
                  speedMultiplier={0.5}
                  maxAge={500}
                  enableFade={true}
                  enableShaderEffect={false}
                />
              </div>
              <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={<div className="min-h-screen bg-background" />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ebook" element={<Ebook />} />
                    <Route path="/universities/:country" element={<UniversityList />} />
                    <Route path="/courses/:courseName" element={<CourseUniversities />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

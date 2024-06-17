import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import ServicesSection from "./components/ServicesSection";
// import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServicesSection />
        <Workflow />
        <Pricing />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;

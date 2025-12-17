import HeroSection from "./components/Home/HeroSection";
import ParallaxSection from "./components/Home/ParallexSection";
import "./App.css";
import CityPresenceSection from "./components/Home/CityPerSection";
import FeaturesSection from "./components/Home/FeaturesSection";
import KYCTabsSection from "./components/Home/KYCTabsSection";
import BenefitsSection from "./components/Home/BenefitSection";
import FAQSection from "./components/Home/FAQSection";
import Footer from "./components/Home/Footer";
import FlowStepsSection from "./components/Home/FlowStepSection";
import { Route, Routes } from "react-router-dom";
import ServiceBanner from "./components/Services/ServiceBanner";
import CompanyMarqueeSection from "./components/Services/CompanyMarqueeSection";
import CompanyRegistrationSection from "./components/Services/CompanyRegistrationSection";
import PrivateLimitedHero from "./components/Services/Sub/PrivateLimitedHero";
import ReviewsMarquee from "./components/Services/Sub/ReviewsMarquee";
import PrivateLimitedService from "./components/Services/PrivateLimited/PrivateLimitedServices";
import LLPHero from "./components/Services/LLP/LLPHero";
import LLPService from "./components/Services/LLP/LLPService";
import OPCHero from "./components/Services/OPC/OPCHero";
import OPCService from "./components/Services/OPC/OPCService";
import Plans from "./components/Plans/Plans";
import AboutHero from "./components/About/AboutHero";
import AboutDetails from "./components/About/AboutDetails";
import BusinessPowerSection from "./components/About/BusinessPowerSection";
import WhyPartnerSection from "./components/About/WhyPartnerSection";
import ContactUs from "./components/Contact/ContactSection";
import MapSection from "./components/Contact/MapSection";
import Testimonials from "./components/Contact/Testimonials";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ParallaxSection />
              <CityPresenceSection />
              <FeaturesSection />
              <KYCTabsSection />
              <FlowStepsSection />
              <BenefitsSection />

              <FAQSection />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <ServiceBanner />
              <CompanyMarqueeSection />
              <CompanyRegistrationSection />
            </>
          }
        />

        <Route
          path="/services/private_limited"
          element={
            <>
              <PrivateLimitedHero />
              <ReviewsMarquee />
              <PrivateLimitedService />
              <Footer />
            </>
          }
        />


         <Route
          path="/services/llp"
          element={
            <>
              <LLPHero />
              <ReviewsMarquee />
              <LLPService />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/opc"
          element={
            <>
              <OPCHero />
              <ReviewsMarquee />
              <OPCService />
              <Footer />
            </>
          }
        />

        <Route
        path="/plans"
        element={
          <>
            <Plans />
          </>
        }
         />

         <Route
         path="/about-us"
         element={
          <>
            <AboutHero />
            <AboutDetails />
            <BusinessPowerSection />
            <WhyPartnerSection />
            <Footer />
          </>
         }
          />

          <Route
          path="/contact-us"
          element={
            <>
              <ContactUs />
              <MapSection />
              <Testimonials />
              <Footer />
            </>
          }
           />

          

          



      </Routes>
    </div>
  );
};

export default App;

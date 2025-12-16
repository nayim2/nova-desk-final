import HeroSection from './Navbar/HeroSection'
import ParallaxSection from './Navbar/ParallexSection'
import './App.css'
import CityPresenceSection from './Navbar/CityPerSection'
import FeaturesSection from './Navbar/FeaturesSection'
import KYCTabsSection from './Navbar/KYCTabsSection'
import BenefitsSection from './Navbar/BenefitSection'
import FAQSection from './Navbar/FAQSection'
import Footer from './Navbar/Footer'

const App = () => {
  return (
    <div>
    
      <HeroSection />
      <ParallaxSection />
      <CityPresenceSection />
      <FeaturesSection />
      <KYCTabsSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
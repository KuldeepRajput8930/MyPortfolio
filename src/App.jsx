import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import InfoSection from './components/InfoSection/InfoSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import ItemsSection from './components/ItemsSection/ItemsSection'
import UIServicesSection from './components/UIServicesSection/UIServicesSection'
import FAQSection from './components/FAQSection/FAQSection'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <InfoSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectSection />
      <ItemsSection />
      <UIServicesSection />
      <FAQSection />
    </>
  )
}

export default App

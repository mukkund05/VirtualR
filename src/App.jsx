import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    
          <NavBar/>
          <div className="mx-auto max-w-7xl pt-20 px-6">
            <HeroSection/>
            <FeatureSection/>
            <WorkFlow/>
            <Price/>
            <Testimonials/>
            <Footer/>
          </div>
          
    
    
    
    </>
  )
}
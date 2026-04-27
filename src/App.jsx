import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CraftedMaterial from "./components/CraftedMaterial";
import WhyChooseUs from "./components/WhyChooseUs";
import ModernInterior from "./components/ModernInterior";
import FeaturedChairs from "./components/FeaturedChairs";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CraftedMaterial />
      <WhyChooseUs />
      <ModernInterior />
      <FeaturedChairs />
    </>
  );
}

export default App;

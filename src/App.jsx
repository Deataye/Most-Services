import AccreditationBanner from "./components/AccreditationBanner";
import CoursesSection from "./components/CoursesSection";
import Hero from "./components/Hero";
import Hub from "./components/Hub";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AccreditationBanner/>
      <Testimonials/>
      <CoursesSection/>
      <StatsSection/>
      <Hub/>
    </>
  );
}

export default App;
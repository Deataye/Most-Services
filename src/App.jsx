import AccreditationBanner from "./components/AccreditationBanner";
import CoursesSection from "./components/CoursesSection";
import Hero from "./components/Hero";
import Hub from "./components/Hub";
import Navbar from "./components/Navbar";
import NewsletterSubscription from "./components/NewsletterSubscription";
import Reviews from "./components/Reviews";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
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
      <Reviews/>
      <NewsletterSubscription/>
      <Footer/>
    </>
  );
}

export default App;
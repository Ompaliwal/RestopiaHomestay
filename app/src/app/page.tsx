import About from "./AboutUs/page";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./ContactUs/page";
import Gallery from "./gallery/page";
import Home from "./Home/page";
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

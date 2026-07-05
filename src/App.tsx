import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import CurrentlyLearning from "./components/CurrentlyLearning";

export default function App() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: "url('Background.png')" }}
    >
      {/* Soft overlay jo background shapes ke upar text ki readability badhayega */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-0" />

      {/* Main Container jahan saare custom components ek ke baad ek aayenge */}
      <div className="relative z-10 min-h-screen w-full flex flex-col">
        <Navbar />
        <Hero />
        <About/>
        <CurrentlyLearning/>
        <Skills/>
        <Achievements/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
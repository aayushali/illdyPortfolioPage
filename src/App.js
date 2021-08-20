import About from "./Components/About";
import Contact from "./Components/Contact";
import FrontPage from "./Components/FrontPage";
import LatestNews from "./Components/LatestNews";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <FrontPage />
      <About />
      <Projects />
      <Testimonials />
      <Services />
      <LatestNews />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

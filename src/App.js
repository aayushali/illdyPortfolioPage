import About from "./Components/About";
import Contact from "./Components/Contact";
import FrontPage from "./Components/FrontPage";
import LatestNews from "./Components/LatestNews";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Projects />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/blog">
            <LatestNews />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <FrontPage />
            <About />
            <Projects />
            <Testimonials />
            <Services />
            <Team />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

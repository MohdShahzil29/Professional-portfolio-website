import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <Home />
      <Banner />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;

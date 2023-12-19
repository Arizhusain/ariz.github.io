import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Social from "./Components/Social";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Skills/>
      <Contact/>
      {/* <Resume/> */}
      <Social/>
      <Footer />
    </>
  );
}

export default App;

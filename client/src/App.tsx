import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";



const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollToTop />
    </>
  );
};

export default App;
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-hidden"
    >
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default App;
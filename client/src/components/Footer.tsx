import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Adeyemi Adedeji Michael</h3>
          <p className="text-blue-100 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-blue-200 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-200 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-200 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-200 transition">
            Contact
          </a>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:devadedejimike@gmail.com"
            aria-label="Send me a mail"
            className="hover:text-blue-200 transition"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/devadedejimike"
            target="_blank"
            aria-label="Visit my GitHub profile"
            className="hover:text-blue-200 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/adedeji-adeyemi-696193290"
            aria-label="Visit my LinkedIn profile"
            target="_blank"
            className="hover:text-blue-200 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/devadedejimike"
            aria-label="Visit my X profile"
            target="_blank"
            className="hover:text-blue-200 transition"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

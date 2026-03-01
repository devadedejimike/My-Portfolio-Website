import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-blue-600 text-white py-8 px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left Side */}
        <motion.div
          variants={itemVariants}
          className="text-center md:text-left"
        >
          <h3 className="text-xl font-semibold">
            Adeyemi Adedeji Michael
          </h3>
          <p className="text-blue-100 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* Center - Quick Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          {["home", "about", "projects", "contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-200 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </motion.a>
          ))}
        </motion.div>

        {/* Right Side - Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          {[
            { icon: <Mail size={22} />, href: "mailto:devadedejimike@gmail.com" },
            { icon: <Github size={22} />, href: "https://github.com/devadedejimike" },
            { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/adedeji-adeyemi-696193290" },
            { icon: <Twitter size={22} />, href: "https://twitter.com/devadedejimike" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-200 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
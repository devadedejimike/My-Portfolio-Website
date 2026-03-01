import { Mail, Github, Linkedin, Twitter, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbyonqr", {
        method: "POST",
        body: data,
        headers: { accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Success");
        form.reset();
      } else {
        setStatus("Error");
      }
    } catch {
      setStatus("Error");
    } finally {
      setLoading(false);
    }
  };

  // Stagger animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-white to-blue-50 text-center px-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-10">
          Have a project idea or want to collaborate? Feel free to reach out via
          the form below or connect with me on my socials.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 flex flex-col space-y-4 border border-gray-100"
      >
        <motion.input
          variants={itemVariants}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        <motion.input
          variants={itemVariants}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        <motion.textarea
          variants={itemVariants}
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="border border-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        <motion.button
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:bg-blue-400"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {/* Status Messages */}
        {status === "Success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-green-600 font-medium mt-2"
          >
            <CheckCircle2 size={20} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}

        {status === "Error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 font-medium mt-2"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 mt-12"
      >
        {[
          { icon: <Mail size={28} />, href: "mailto:devadedejimike@gmail.com", label: "Email" },
          { icon: <Github size={28} />, href: "https://github.com/devadedejimike", label: "Github" },
          { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/adedeji-adeyemi-696193290", label: "LinkedIn" },
          { icon: <Twitter size={28} />, href: "https://x.com/devadedejimike", label: "Twitter" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target={social.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-blue-600 transition-all"
            title={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
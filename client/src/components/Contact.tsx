import { Mail, Github, Linkedin, Twitter, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

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
    } catch (err) {
      setStatus("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-white to-blue-50 text-center px-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
      <p className="text-gray-600 max-w-lg mx-auto mb-10">
        Have a project idea or want to collaborate? Feel free to reach out via
        the form below or connect with me on my socials.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 flex flex-col space-y-4 border border-gray-100"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="border border-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        
        <button
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
        </button>
        
        {status === "Success" && (
          <div className="flex items-center justify-center gap-2 text-green-600 font-medium mt-2 animate-bounce">
            <CheckCircle2 size={20} />
            <span>Message sent successfully!</span>
          </div>
        )}
        {status === "Error" && (
          <p className="text-red-600 font-medium mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mt-12">
        {[
          { icon: <Mail size={28} />, href: "mailto:devadedejimike@gmail.com", label: "Email" },
          { icon: <Github size={28} />, href: "https://github.com/devadedejimike", label: "Github" },
          { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/adedeji-adeyemi-696193290", label: "LinkedIn" },
          { icon: <Twitter size={28} />, href: "https://x.com/devadedejimike", label: "Twitter" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target={social.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1"
            title={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
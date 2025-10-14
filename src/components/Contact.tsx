import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-white to-blue-50 text-center px-6"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
      <p className="text-gray-600 max-w-lg mx-auto mb-10">
        Have a project idea or want to collaborate? Feel free to reach out via
        the form below or connect with me on my socials.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {/* Status messages */}
        {status === "Success" && (
          <p className="text-green-600 font-medium mt-2">
            Message sent successfully
          </p>
        )}
        {status === "Error" && (
          <p className="text-red-600 font-medium mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="mailto:devadedejimike@gmail.com"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/devadedejimike"
          target="_blank"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/adedeji-adeyemi-696193290"
          target="_blank"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://twitter.com/devadedejimike"
          target="_blank"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Twitter size={28} />
        </a>
      </div>
    </section>
  );
};

export default Contact;

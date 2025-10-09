import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
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
        onSubmit={(e) => e.preventDefault()}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
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

import { useState, useEffect } from "react";
import { Home, User, FolderKanban, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home", icon: <Home size={22} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={22} /> },
    { name: "Projects", href: "#projects", id: "projects", icon: <FolderKanban size={22} /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={22} /> },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", 
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections that have an ID matching our links
    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center">
      <nav className="fixed top-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-center gap-6 transition-all duration-300 z-50 border border-gray-100">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            title={link.name}
            className={`transition-all duration-300 p-2 rounded-full ${
              activeSection === link.id 
              ? "text-blue-600 bg-blue-50 scale-110" 
              : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
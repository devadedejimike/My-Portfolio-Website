import { Home, User, FolderKanban, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const links = [
    { name: "Home", href: "#home", icon: <Home size={22} /> },
    { name: "About", href: "#about", icon: <User size={22} /> },
    { name: "Projects", href: "#projects", icon: <FolderKanban size={22} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={22} /> },
  ];

  return (
    <div className="flex justify-center items-center">
      <nav className="fixed top-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-center gap-6 transition-all duration-300 z-50">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            title={link.name}
            className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-full"
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

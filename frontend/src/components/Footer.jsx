import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-white">JobPortal</h1>
          <p className="mt-2 text-gray-400">
            Find your dream job or hire top talent with us. Trusted by thousands.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mail className="text-white" />
            <span>contact@jobportal.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-white" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-white" />
            <span>123 Main St, City, Country</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-white hover:text-gray-400 transition" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        © 2024 JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

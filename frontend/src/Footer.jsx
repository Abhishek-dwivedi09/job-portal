import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 px-4 md:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-1">
            <span className="text-black">Job</span>
            <span className="text-[#F83002]">Hunt</span>
          </h1>
          <p className="text-sm text-gray-600">
            Your gateway to top tech careers.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-black p-2 rounded-full">
            <Github className="text-white" size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-black p-2 rounded-full">
            <Twitter className="text-white" size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-black p-2 rounded-full">
            <Linkedin className="text-white" size={18} />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-xs">
        © {new Date().getFullYear()} JobHunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

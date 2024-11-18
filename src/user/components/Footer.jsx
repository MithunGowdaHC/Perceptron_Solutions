import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Facebook, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-6 text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300">
              Stay Connected
            </span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-8 text-sm transform hover:scale-105 transition-transform duration-300">
            Join our newsletter for the latest insights in AI, Machine Learning, and Quantitative Finance
          </p>
          <form onSubmit={handleSubmit} className="flex items-center justify-center max-w-md mx-auto group">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder:text-gray-500 hover:border-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 group-hover:gap-3 hover:scale-105"
            >
              Subscribe
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Navigation Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block group">
                Navigation
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Features'].map((item) => (
                  <li key={item} className="transform hover:translate-x-2 transition-transform duration-300">
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-blue-500 transition-all duration-300"></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block group">
                Contact
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <ul className="space-y-4">
                {[
                  { Icon: Phone, text: '+1-5454-5845' },
                  { Icon: Mail, text: 'perceptron.solutions', href: 'https://www.perceptron.solutions' },
                  { Icon: MapPin, text: 'Vancouver, British Columbia, Canada' }
                ].map(({ Icon, text, href }, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <Icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    {href ? (
                      <a href={href} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        {text}
                      </a>
                    ) : (
                      <span className="group-hover:text-white transition-colors">{text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block group">
                About Me
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed hover:text-white transition-colors duration-300">
                Hello. My name is Pavan Mirla. I am a Machine Learning Data
                Scientist with investment research and quantitative analysis
                experience at large Canadian Asset Management Firms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Now integrated with main design */}
      <div className="border-t border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex space-x-8">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/pavanmirla' },
                { icon: Twitter, href: 'https://twitter.com/pavanmirla' },
                { icon: Github, href: 'https://github.com/pmirla' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/pavanmirla/' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} BY PAVAN MIRLA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
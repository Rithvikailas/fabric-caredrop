
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-launow-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-launow-blue to-launow-teal"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-launow-light-blue via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company info */}
            <div className="space-y-6">
              <div>
                <a href="#" className="text-2xl font-bold text-white">Launow</a>
                <p className="mt-4 text-white/70 max-w-xs">
                  The intelligent fabric care platform connecting users with premium laundry and garment care services.
                </p>
              </div>
              
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={`Social media link ${index + 1}`}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-launow-blue transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  "About Us", 
                  "Services", 
                  "How It Works", 
                  "Pricing Plans", 
                  "Partner With Us"
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-300 inline-flex items-center"
                    >
                      <span>{link}</span>
                      <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 text-launow-blue mt-1 flex-shrink-0" />
                  <span className="text-white/70">123 Innovation Drive, Tech City, CA 90210</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 text-launow-blue flex-shrink-0" />
                  <span className="text-white/70">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 text-launow-blue flex-shrink-0" />
                  <span className="text-white/70">support@launow.com</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-white/70 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 rounded-l-full px-4 py-2 outline-none focus:bg-white/20 transition-colors duration-300 w-full"
                  aria-label="Email address"
                />
                <button className="bg-launow-blue hover:bg-launow-blue/80 rounded-r-full px-4 py-2 transition-colors duration-300" aria-label="Subscribe">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Launow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

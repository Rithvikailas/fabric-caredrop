
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-bold text-2xl text-launow-blue">Launow</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-launow-dark hover:text-launow-blue transition-colors duration-300">Home</a>
            <a href="#services" className="text-launow-dark hover:text-launow-blue transition-colors duration-300">Services</a>
            <a href="#features" className="text-launow-dark hover:text-launow-blue transition-colors duration-300">Features</a>
            <a href="#app" className="text-launow-dark hover:text-launow-blue transition-colors duration-300">App</a>
            <a href="#sustainability" className="text-launow-dark hover:text-launow-blue transition-colors duration-300">Sustainability</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-launow-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 ease-in-out flex flex-col pt-20 px-6',
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <a 
            href="#" 
            className="text-launow-dark hover:text-launow-blue transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-launow-dark hover:text-launow-blue transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#features" 
            className="text-launow-dark hover:text-launow-blue transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#app" 
            className="text-launow-dark hover:text-launow-blue transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            App
          </a>
          <a 
            href="#sustainability" 
            className="text-launow-dark hover:text-launow-blue transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Sustainability
          </a>
        </nav>
        <div className="mt-8">
          <button 
            className="btn-primary w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Download App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

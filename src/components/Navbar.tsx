import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold flex items-center"
          >
            <Zap className="w-6 h-6 text-primary-500 mr-2" />
            <span className="gradient-text">Elite8</span>
            <span>Digital</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex md:items-center md:space-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover-underline-animation text-sm font-medium ${
                isActive(link.path) 
                  ? 'text-primary-400' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary text-sm"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? '100vh' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="md:hidden overflow-hidden bg-dark-800"
      >
        <div className="container-custom py-8 flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: isOpen ? 0 : 20, 
                opacity: isOpen ? 1 : 0 
              }}
              transition={{ delay: 0.05 * index }}
            >
              <Link
                to={link.path}
                className={`text-2xl font-semibold ${
                  isActive(link.path) ? 'text-primary-400' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isOpen ? 0 : 20, 
              opacity: isOpen ? 1 : 0 
            }}
            transition={{ delay: 0.25 }}
          >
            <Link to="/contact" className="btn btn-primary block text-center mt-4">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
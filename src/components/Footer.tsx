import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            variants={fadeIn('right', 'tween', 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-primary-500 mr-2" />
              <span className="gradient-text text-xl font-bold">Elite8</span>
              <span className="text-xl font-bold">Digital</span>
            </Link>
            <p className="text-gray-400 mb-6">
              We craft digital experiences that captivate, engage, and deliver results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Our Work</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Privacy Policy</a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Mobile Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Digital Strategy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover-underline-animation">Brand Identity</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.4, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Innovation Drive, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">hello@elite8digital.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Elite8 Digital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
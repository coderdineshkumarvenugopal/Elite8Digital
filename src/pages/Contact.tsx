import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Elite8 Digital";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary-900/10 via-dark-900 to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Have a project in mind or want to learn more about our services? 
              We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-24 bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary-500 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-gray-400">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-secondary-500 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-gray-400">
                      General Inquiries: <a href="mailto:hello@elite8digital.com" className="text-primary-400 hover:underline">hello@elite8digital.com</a><br />
                      Support: <a href="mailto:support@elite8digital.com" className="text-primary-400 hover:underline">support@elite8digital.com</a><br />
                      Careers: <a href="mailto:careers@elite8digital.com" className="text-primary-400 hover:underline">careers@elite8digital.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-accent-500 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-gray-400">
                      Phone: <a href="tel:+15551234567" className="text-primary-400 hover:underline">+1 (555) 123-4567</a><br />
                      Fax: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM (PST)</li>
                  <li>Saturday: 10:00 AM - 4:00 PM (PST)</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-24 bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conveniently located in the heart of San Francisco's tech district.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-96 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-dark-700">
              <p className="text-lg text-gray-400">
                Interactive map would be displayed here in a production environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">What services do you offer?</h3>
              <p className="text-gray-400">
                We offer a comprehensive range of digital services including UI/UX design, web development, mobile app development, digital strategy, brand identity, and digital marketing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">How much does a typical project cost?</h3>
              <p className="text-gray-400">
                Project costs vary based on scope, complexity, and specific requirements. We provide detailed proposals after an initial consultation to understand your needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">What is your typical timeline for projects?</h3>
              <p className="text-gray-400">
                Timelines depend on project complexity. A typical website might take 6-8 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial discussions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Do you work with clients remotely?</h3>
              <p className="text-gray-400">
                Yes, we work with clients worldwide. Our collaborative process and communication tools allow us to deliver exceptional results regardless of geographical location.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">What happens after my project launches?</h3>
              <p className="text-gray-400">
                We offer ongoing support and maintenance packages to ensure your digital product continues to perform optimally. We're committed to long-term partnerships with our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
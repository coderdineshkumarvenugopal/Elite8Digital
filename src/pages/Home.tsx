import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Code, ExternalLink, Zap } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { projects, services, testimonials } from '../assets/data';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  useEffect(() => {
    document.title = "Elite8 Digital - Creative Digital Agency";
  }, []);
  
  // Scroll to the content section when the scroll icon is clicked
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-dark-900 to-dark-900"></div>
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900/50 to-dark-900 opacity-70"
          ></motion.div>
        </div>
        
        <div className="container-custom relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              We Create
              <span className="gradient-text ml-3">Digital</span>
              <br />
              Experiences That Matter
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              A full-service digital agency specializing in crafting beautiful, 
              user-centered experiences that drive results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown className="w-8 h-8 text-white opacity-70" />
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Services Section */}
      <section id="content" className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help businesses 
              thrive in today's competitive landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400 max-w-lg">
                Our portfolio showcases our commitment to excellence and innovation 
                in every project we undertake.
              </p>
            </div>
            <Link to="/projects">
              <Button variant="primary" className="mt-6 md:mt-0">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900/20 via-dark-900 to-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">50+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">100+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">8</h3>
              <p className="text-gray-300">Years of Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">15+</h3>
              <p className="text-gray-300">Awards Won</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-dark-800 p-8 rounded-lg relative"
              >
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-primary-500 opacity-30 absolute top-6 right-6"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.722 6.422c-6.204 0-10.722 4.6-10.722 10.321 0 4.6 2.857 7.651 7.354 7.651 4.497 0 8.229-4.007 8.229-9.321 0-2.069-0.722-3.947-2.321-5.321-1.6-1.374-3.229-2.069-5.229-2.069 0.929-0.722 2.166-1.374 3.683-1.6 1.243-0.356 2.166-0.356 3.229-0.178v-1.422c-1.243-0.178-2.321-0.178-3.229 0-3.348 0.722-5.696 2.243-7.319 4.204-0.5 0.545-0.857 1.067-1.072 1.6-0.215 0.533-0.322 1.067-0.322 1.422l1.497 0.002c0-0.545 0.572-1.069 1.143-1.779 0.929-0.889 1.857-1.6 2.786-2.069 0.929-0.533 1.857-0.711 2.786-0.711zM24.309 6.422c-6.204 0-10.722 4.6-10.722 10.321 0 4.6 2.857 7.651 7.354 7.651 4.497 0 8.229-4.007 8.229-9.321 0-2.069-0.722-3.947-2.321-5.321-1.6-1.374-3.229-2.069-5.229-2.069 0.929-0.722 2.166-1.374 3.683-1.6 1.243-0.356 2.166-0.356 3.229-0.178v-1.422c-1.243-0.178-2.321-0.178-3.229 0-3.348 0.722-5.696 2.243-7.319 4.204-0.5 0.545-0.857 1.067-1.072 1.6-0.215 0.533-0.322 1.067-0.322 1.422h1.497c0-0.545 0.572-1.069 1.143-1.779 0.929-0.889 1.857-1.6 2.786-2.069 0.929-0.533 1.857-0.711 2.786-0.711z"></path>
                  </svg>
                  
                  <p className="text-gray-300 relative z-10">"{testimonial.testimonial}"</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-primary-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's work together to create something amazing. Get in touch with our team to start your journey.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Start Your Project
                <Zap className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/data';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  useEffect(() => {
    document.title = "Our Work | Elite8 Digital";
    
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of innovative projects where creativity meets functionality.
              Each project represents our commitment to design excellence and technical innovation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Filter */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
                <p className="text-gray-400">
                  We couldn't find any projects in this category. Please try another category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a structured approach to ensure every project is delivered to the highest standards.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary-900/20 group-hover:bg-primary-900/40 transition-colors duration-300"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10">01. Discovery</h3>
              <p className="text-gray-400 relative z-10">
                We start by understanding your business, goals, and target audience to define the project scope.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-secondary-900/20 group-hover:bg-secondary-900/40 transition-colors duration-300"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10">02. Strategy</h3>
              <p className="text-gray-400 relative z-10">
                We develop a comprehensive strategy that aligns with your business objectives and user needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-accent-900/20 group-hover:bg-accent-900/40 transition-colors duration-300"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10">03. Design & Build</h3>
              <p className="text-gray-400 relative z-10">
                Our designers and developers collaborate to create beautiful, functional digital experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary-900/20 group-hover:bg-primary-900/40 transition-colors duration-300"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10">04. Launch & Grow</h3>
              <p className="text-gray-400 relative z-10">
                We deploy your project and provide ongoing support to ensure continued success and growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
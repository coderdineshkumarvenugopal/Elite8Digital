import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div>
          <span className="text-sm font-medium text-primary-400 mb-2 inline-block">{project.category}</span>
          <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.description}
          </p>
          
          <Link 
            to={`/projects/${project.id}`} 
            className="inline-flex items-center text-white font-medium group/btn"
          >
            View Project 
            <motion.span 
              initial={{ x: 0 }} 
              whileHover={{ x: 5 }}
              className="ml-2"
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
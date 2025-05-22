import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Dynamically get the icon from lucide-react
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="card group hover:shadow-lg hover:shadow-primary-900/20 cursor-pointer"
    >
      <div className="p-8">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-900/30 mb-6 group-hover:bg-primary-600/20 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-primary-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
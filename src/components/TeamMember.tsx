import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember as TeamMemberType } from '../types';

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <p className="text-gray-300 text-sm">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-primary-400">{member.role}</p>
    </motion.div>
  );
};

export default TeamMember;
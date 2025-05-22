import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock, Heart, Lightbulb, Rocket, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TeamMember from '../components/TeamMember';
import { team } from '../assets/data';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Elite8 Digital";
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              We're a team of strategists, designers, and developers passionate about creating
              exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-24 bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2017, Elite8 Digital was born from a simple yet powerful idea: to bridge the gap between technology and human experience. We believed that digital solutions should not only be functional but also meaningful and impactful.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small team of four passionate individuals has grown into a diverse collective of creative minds, technical experts, and strategic thinkers. Despite our growth, our core mission remains unchanged: to create digital experiences that matter.
              </p>
              <p className="text-gray-300">
                Today, we're proud to work with clients across industries, helping them transform their digital presence and achieve remarkable results. Our journey continues as we explore new technologies and push the boundaries of what's possible in the digital realm.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide our work and shape our approach to every project we undertake.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-primary-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We continuously explore new ideas and technologies to deliver innovative solutions that set our clients apart.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-secondary-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-400">
                We bring enthusiasm and dedication to every project, treating each client's business as if it were our own.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-accent-900/30 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-accent-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We hold ourselves to the highest standards of quality and craftsmanship in everything we create.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision</h3>
              <p className="text-gray-400">
                We pay meticulous attention to detail, ensuring every element is thoughtfully considered and perfectly executed.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-secondary-900/30 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-secondary-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-400">
                We deliver on our promises, meeting deadlines and exceeding expectations with consistency and integrity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-700 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-accent-900/30 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-accent-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-gray-400">
                We're committed to continuous learning and improvement, both for ourselves and for the success of our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The talented individuals behind our success. Our diverse team brings together expertise from various disciplines.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. If you're passionate about digital innovation, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
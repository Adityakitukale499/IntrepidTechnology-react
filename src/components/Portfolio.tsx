import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'A comprehensive healthcare app connecting patients with healthcare providers and managing appointments.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'An advanced financial dashboard with real-time data visualization and portfolio management features.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'Learning Management System',
      category: 'Education Platform',
      description: 'A comprehensive LMS with course creation, student tracking, and interactive learning modules.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Express.js', 'MySQL', 'WebRTC'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'A modern real estate platform with property listings, virtual tours, and mortgage calculators.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'AWS', 'Mapbox'],
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
    {
      title: 'Social Media Analytics',
      category: 'Analytics Platform',
      description: 'A powerful analytics platform for social media management with automated reporting and insights.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'TensorFlow', 'Redis'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of successful projects and see how we've helped businesses transform digitally.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:opacity-75 transition-opacity duration-300`}></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
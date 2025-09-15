import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'E-commerce',
      description: 'A comprehensive e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      gradient: 'from-blue-500/20 to-purple-500/20',
      client: 'Retail Corp',
      year: '2024',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Apps',
      description: 'A comprehensive healthcare application connecting patients with healthcare providers, featuring appointment scheduling and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      client: 'MedCare Solutions',
      year: '2024',
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Development',
      description: 'An advanced financial dashboard with real-time data visualization, portfolio management, and comprehensive reporting features.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      gradient: 'from-orange-500/20 to-red-500/20',
      client: 'FinTech Pro',
      year: '2023',
    },
    {
      title: 'Learning Management System',
      category: 'Web Development',
      description: 'A comprehensive LMS with course creation tools, student tracking, interactive learning modules, and video conferencing integration.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Express.js', 'MySQL', 'WebRTC'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      client: 'EduTech Institute',
      year: '2023',
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'A modern real estate platform featuring property listings, virtual tours, mortgage calculators, and agent management system.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'AWS', 'Mapbox'],
      gradient: 'from-indigo-500/20 to-blue-500/20',
      client: 'PropertyMax',
      year: '2023',
    },
    {
      title: 'Restaurant Management App',
      category: 'Mobile Apps',
      description: 'A complete restaurant management solution with order processing, inventory tracking, staff management, and customer analytics.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      client: 'FoodChain Ltd',
      year: '2024',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of successful projects and see how we've helped businesses transform digitally across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                  {/* Category and Year */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Client: {project.client}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with our expertise and innovation
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
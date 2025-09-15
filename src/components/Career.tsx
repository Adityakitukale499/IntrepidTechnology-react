import React from 'react';
import { Users, Award, TrendingUp, Heart } from 'lucide-react';

const Career: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with talented professionals in a supportive and collaborative team environment.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement programs to help you grow.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Benefits',
      description: 'Attractive compensation packages with comprehensive benefits and performance bonuses.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and a culture that values work-life balance.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'We are looking for an experienced full stack developer to join our growing team.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive user experiences.',
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote / On-site',
      type: 'Full-time',
      description: 'Help us grow our digital presence and reach new audiences.',
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'On-site',
      type: 'Full-time',
      description: 'Lead and coordinate projects to ensure successful delivery.',
    },
  ];

  return (
    <section id="career" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our <span className="text-blue-600 dark:text-blue-400">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of an innovative team that's shaping the future of technology. 
            Explore exciting career opportunities with us.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Work With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Current Openings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {position.description}
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Don't See the Right Position?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Career;
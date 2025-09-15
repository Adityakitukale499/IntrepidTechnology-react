import React from 'react';
import { Users, Award, TrendingUp, Heart } from 'lucide-react';

const Career: React.FC = () => {
  const internships = [
    {
      title: 'UiPath Program',
      description: 'Master UiPath RPA development with hands-on training in process automation, workflow design, and bot deployment for enterprise solutions.',
      tags: ['RPA', 'Automation', 'Enterprise'],
    },
    {
      title: 'Microsoft Power Automate Program',
      description: 'Learn Microsoft Power Automate to create automated workflows, integrate business processes, and build cloud-based automation solutions.',
      tags: ['Power Automate', 'Workflows', 'Cloud'],
    },
    {
      title: 'Automation Anywhere Program',
      description: 'Develop expertise in Automation Anywhere platform for intelligent automation, cognitive bots, and enterprise RPA implementation.',
      tags: ['Cognitive Bots', 'Intelligent', 'Enterprise'],
    },
    {
      title: 'Website Development',
      description: 'Master modern web development with HTML, CSS, JavaScript, React, Node.js, and full-stack development through real-world projects.',
      tags: ['Frontend', 'Backend', 'Full Stack'],
    },
    {
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native, Flutter, and native iOS/Android development with modern UI/UX principles.',
      tags: ['iOS', 'Android', 'Cross-Platform'],
    },
    {
      title: 'E-commerce Development',
      description: 'Learn to build complete e-commerce solutions with payment integration, inventory management, and modern shopping experiences.',
      tags: ['Payment', 'Inventory', 'Modern UI'],
    },
  ];

  const applyUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd_Fy8ms7b7AvsgrlymG-8LbKYdjMH1Nk4E4yss8Z4C6dchBg/viewform';
  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with talented professionals in a supportive and collaborative team environment that fosters creativity and innovation.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, skill development programs, and clear career advancement paths to help you grow.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Benefits',
      description: 'Attractive compensation packages with comprehensive benefits, performance bonuses, and equity participation.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, remote work options, and a culture that values work-life balance and well-being.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const perks = [
    'Health Insurance',
    'Flexible Working Hours',
    'Remote Work Options',
    'Professional Development Budget',
    'Team Outings & Events',
    'Performance Bonuses',
    'Equity Participation',
    'Modern Office Space',
    'Free Snacks & Beverages',
    'Gym Membership',
    'Mental Health Support',
    'Parental Leave'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our <span className="text-blue-600 dark:text-blue-400">Team</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of an innovative team that's shaping the future of technology.
              Explore exciting career opportunities and grow with us.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Team Members' },
              { number: '5+', label: 'Years in Business' },
              { number: '500+', label: 'Projects Delivered' },
              { number: '100+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships We Offer */}
      <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Internships We Offer!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our exciting internship journey and gain hands-on experience in cutting-edge technologies. We provide practical learning through live projects and real-world examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((item) => (
              <div key={item.title} className="p-8 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what makes Intrepid Technology a great place to build your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Perks & Benefits */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Perks & Benefits
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-900/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
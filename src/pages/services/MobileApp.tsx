import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Zap, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const MobileApp: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native & Cross-Platform',
      description: 'Build native iOS/Android apps or cross-platform solutions using React Native and Flutter.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and smooth user experience across all devices and platforms.',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with user experience and engagement in mind.',
    },
    {
      icon: Globe,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and APIs for enhanced functionality.',
    },
  ];

  const services = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and Objective-C for optimal performance.',
      features: ['Native iOS development', 'App Store optimization', 'iOS-specific features', 'Performance optimization']
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications using Kotlin and Java for Google Play Store.',
      features: ['Native Android development', 'Material Design', 'Google Play optimization', 'Android-specific features']
    },
    {
      title: 'Cross-Platform Development',
      description: 'Single codebase apps that work on both iOS and Android platforms.',
      features: ['React Native', 'Flutter development', 'Code reusability', 'Faster time-to-market']
    },
    {
      title: 'App Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support for your mobile applications.',
      features: ['Bug fixes', 'Feature updates', 'OS compatibility', 'Performance monitoring']
    }
  ];

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Swift', category: 'iOS' },
    { name: 'Kotlin', category: 'Android' },
    { name: 'Java', category: 'Android' },
    { name: 'Objective-C', category: 'iOS' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'AWS Mobile', category: 'Cloud' },
    { name: 'GraphQL', category: 'API' },
    { name: 'REST APIs', category: 'API' },
    { name: 'SQLite', category: 'Database' },
    { name: 'Realm', category: 'Database' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mobile App <span className="text-purple-600 dark:text-purple-400">Development</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create engaging mobile applications that connect with your users and drive business growth across iOS and Android platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mobile App Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive mobile development solutions for all platforms and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge mobile development technologies for superior app performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-all duration-300">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create a mobile app that engages your users and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Start Your App Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/products" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              View Our Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
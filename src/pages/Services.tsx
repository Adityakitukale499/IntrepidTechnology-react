import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, Search, ShoppingCart, Shield, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['React/Vue/Angular', 'Node.js/Python', 'API Integration', 'Database Design'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/mobile-app',
    },
    {
      icon: Shield,
      title: 'Software Development',
      description: 'Enterprise-grade software solutions tailored to your business processes and requirements.',
      features: ['Architecture Design', 'API Platforms', 'Microservices', 'Testing Automation'],
      gradient: 'from-slate-500 to-gray-600',
      link: '/services/software-development',
    },
    {
      icon: Search,
      title: 'RPA Automation',
      description: 'Robotic Process Automation to automate repetitive tasks and improve operational efficiency.',
      features: ['UiPath', 'Power Automate', 'Automation Anywhere', 'Process Design'],
      gradient: 'from-orange-500 to-red-500',
      link: '/services/rpa-automation',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment processing and inventory management systems.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Analytics'],
      gradient: 'from-indigo-500 to-purple-500',
      link: '/services/ecommerce',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline transition-all duration-300 group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your business needs, goals, and challenges through detailed consultation.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create a comprehensive project plan with timelines, milestones, and deliverables.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our expert team builds your solution using best practices and cutting-edge technologies.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We deploy your solution and provide ongoing support to ensure optimal performance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
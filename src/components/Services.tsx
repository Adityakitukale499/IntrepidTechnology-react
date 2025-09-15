import React from 'react';
import { Code, Smartphone, Palette, Search, ShoppingCart, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom responsive websites built with modern frameworks and technologies for optimal performance.',
      features: ['Modern Frameworks', 'Performance Focused', 'Responsive Design', 'SEO Ready'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Software Development',
      description: 'Enterprise-grade software solutions tailored to your business processes and requirements.',
      features: ['Architecture Design', 'API Platforms', 'Microservices', 'Testing Automation'],
      gradient: 'from-slate-500 to-gray-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployments'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Search,
      title: 'RPA Automation',
      description: 'Robotic Process Automation to automate repetitive tasks and improve operational efficiency.',
      features: ['UiPath', 'Power Automate', 'Automation Anywhere', 'Process Design'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Palette,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help businesses leverage digital transformation.',
      features: ['Cloud Strategy', 'Cost Optimization', 'Security Reviews', 'Roadmaps'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete online store solutions with payment integration and modern shopping experiences.',
      features: ['Storefronts', 'Payment Gateways', 'Cart & Checkout', 'Analytics'],
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions that help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
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
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;